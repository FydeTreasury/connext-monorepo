import { expect, getRandomBytes32 } from "@connext/nxtp-utils";
import { constants } from "ethers";

import { DBImpl, SparseMerkleTree, ZERO_HASHES } from "../../src/helpers/merkle";

describe.only("Helpers: Merkle", () => {
  const TREE_HEIGHT = 32;
  const SAMPLE_HASH_COUNT = 123;
  const SAMPLE_HASHES: string[] = [];

  before(() => {
    console.log(`Generating ${SAMPLE_HASH_COUNT} sample leaf hashes...`);
    for (let i = 0; i < SAMPLE_HASH_COUNT; i++) {
      SAMPLE_HASHES.push(getRandomBytes32());
    }
    console.log(`Generating ${SAMPLE_HASH_COUNT} sample leaf hashes... done.`);
  });

  describe("MockMerkleLib", () => {
    let mockle: MockMerkleLib;

    beforeEach(() => {
      mockle = new MockMerkleLib(TREE_HEIGHT);
    });

    describe("#insert", () => {
      it("should handle 4 total inserts correctly", () => {
        /**
         * 4 total nodes inserted (A-D), final branch should look like:
         * [
         *   C
         *   (A,B)
         *   ((A,B), (C,D))
         * ]
         */
        // Assign first four values from sample hashes.
        const [A, B, C, D] = SAMPLE_HASHES;

        for (const value of [A, B, C, D]) {
          mockle.insert(value);
        }

        // For readability, pre-calc some hashes:
        const AB = SparseMerkleTree.hash(A, B);
        const ABCD = SparseMerkleTree.hash(AB, SparseMerkleTree.hash(C, D));

        // Compare active branch to expected.
        const branch = mockle.getBranch();
        expect(branch).to.be.deep.eq([C, AB, ABCD]);

        /**
         * Calculating root for 4 (..00100) total:
         * [
         *   (0,0)
         *   ((0,0), (0,0))
         *   (((A,B), (C,D)), ((0,0), (0,0)))
         *   ...
         * ]
         */
        // Pre-calc root based on expected behavior.
        let precalc = constants.HashZero;
        for (let i = 0; i < TREE_HEIGHT; i++) {
          if (i === 2) {
            precalc = SparseMerkleTree.hash(ABCD, precalc);
          } else {
            precalc = SparseMerkleTree.hash(precalc, MockMerkleLib.ZERO_HASHES[i]);
          }
        }

        const root = mockle.root();
        expect(root).to.be.eq(precalc);
      });

      it("should handle 8 total inserts correctly", () => {
        /**
         * 8 total nodes inserted (A-H), final branch should look like:
         * [
         *   G
         *   (E,F)
         *   ((A,B), (C,D))
         *   (((A,B), (C,D)), ((E,F), (G,H)))
         * ]
         */
        // Assign first eight values from sample hashes.
        const [A, B, C, D, E, F, G, H] = SAMPLE_HASHES;

        for (const value of [A, B, C, D, E, F, G, H]) {
          mockle.insert(value);
        }

        // For readability, pre-calc some hashes:
        const EF = SparseMerkleTree.hash(E, F);
        const ABCD = SparseMerkleTree.hash(SparseMerkleTree.hash(A, B), SparseMerkleTree.hash(C, D));
        const EFGH = SparseMerkleTree.hash(EF, SparseMerkleTree.hash(G, H));
        const ABCDEFGH = SparseMerkleTree.hash(ABCD, EFGH);

        // Compare active branch to expected.
        const branch = mockle.getBranch();
        expect(branch).to.be.deep.eq([G, EF, ABCD, ABCDEFGH]);

        /**
         * Calculating root for 8 (..01000) total:
         * [
         *   (0,0)
         *   ((0,0), (0,0))
         *   (((0,0), (0,0)), ((0,0), (0,0)))
         *   ( (((A,B), (C,D)), ((E,F), (G,H))), (((0,0), (0,0)), ((0,0), (0,0))) )
         *   ...
         * ]
         */
        // Pre-calc root based on expected behavior.
        let precalc = constants.HashZero;
        for (let i = 0; i < TREE_HEIGHT; i++) {
          if (i === 3) {
            precalc = SparseMerkleTree.hash(ABCDEFGH, precalc);
          } else {
            precalc = SparseMerkleTree.hash(precalc, MockMerkleLib.ZERO_HASHES[i]);
          }
        }

        const root = mockle.root();
        expect(root).to.be.eq(precalc);
      });
    });
  });

  describe("SparseMerkleTree", () => {
    let db: DBImpl;
    let merkle: SparseMerkleTree;
    let mockle: MockMerkleLib;

    beforeEach(() => {
      db = new DBImpl();
      mockle = new MockMerkleLib(TREE_HEIGHT);

      for (let i = 0; i < SAMPLE_HASH_COUNT; i++) {
        // Insert ALL sample hashes into the DB.
        db.push(SAMPLE_HASHES[i]);
        // Insert ALL sample hashes into the mock MerkleLib.
        mockle.insert(SAMPLE_HASHES[i]);
      }

      merkle = new SparseMerkleTree(db, TREE_HEIGHT);
    });

    describe("#getRoot", () => {
      it("should calculate same root as the active branch would on-chain", async () => {
        const merkleRoot = await merkle.getRoot();
        const mockleRoot = mockle.root();
        expect(merkleRoot).to.be.eq(mockleRoot);
      });
    });

    describe("#getMerkleProof", () => {
      it("should get merkle proof", async () => {
        console.log("Calculating expected root...");
        const expectedRoot = mockle.root();
        console.log("EXPECTED ROOT:", expectedRoot, "\n\n");

        // Pick a random leaf for whom we want to get the proof.
        const index = 57; // This index is definitely random, I generated it myself.
        const leaf: string = (await db.getNode(index))!;
        console.log("Getting proof for leaf:", leaf, "at index:", index);

        const proof = await merkle.getProof(index);
        expect(proof.length).to.be.eq(TREE_HEIGHT);
        const result = merkle.verify(index, leaf, proof, expectedRoot);
        const mockBranchRoot = MockMerkleLib.branchRoot(leaf, proof, index);
        console.log({
          ...result,
          expected: expectedRoot,
          mockBranchRoot: mockBranchRoot,
          proof,
        });
        expect(result.verified).to.be.true;
        expect(result.calculated).to.be.eq(expectedRoot);
        expect(result.calculated).to.be.eq(mockBranchRoot);
      });
    });
  });
});

/// MARK - types/class to mock behavior of on-chain MerkleLib.
type MockTree = {
  branch: string[];
  count: number;
};

class MockMerkleLib {
  public static readonly ZERO_HASHES = ZERO_HASHES().reverse();

  public readonly MAX_LEAVES: number;
  private tree: MockTree;

  constructor(public readonly height: number) {
    this.tree = {
      branch: new Array<string>(this.height).fill(constants.HashZero as string),
      count: 0,
    };
    this.MAX_LEAVES = 2 ** this.height - 1;
  }

  public printBranch() {
    console.log(this.getBranch());
  }

  public printBranchWithCtx() {
    console.log(this.getBranchWithCtx());
  }

  public getBranch(): string[] {
    const furthestDepth = this.tree.branch.indexOf(constants.HashZero as string);
    return this.tree.branch.slice(0, furthestDepth);
  }

  public getBranchWithCtx(): string[] {
    const furthestDepth = this.tree.branch.indexOf(constants.HashZero as string);
    return this.tree.branch.slice(0, furthestDepth).concat(MockMerkleLib.ZERO_HASHES.slice(furthestDepth));
  }

  /// MARK - Mocking of onchain functions:

  // See `MerkleLib.insert`
  public insert(node: string): number {
    let size: number = this.tree.count + 1;
    if (size >= this.MAX_LEAVES) {
      throw new Error("MerkleLibMock: tree is full!");
    }

    this.tree.count = size;
    for (let i = 0; i < this.height; i++) {
      if ((size & 1) == 1) {
        this.tree.branch[i] = node;
        return size;
      }
      node = SparseMerkleTree.hash(this.tree.branch[i], node);
      size /= 2;
    }

    throw new Error("MerkleLibMock: reached end of execution in `insert`, fn is broken.");
  }

  // See: `MerkleLib.rootWithCtx`
  public root(): string {
    let current: string = constants.HashZero;
    let index: number = this.tree.count;

    for (let i = 0; i < this.height; i++) {
      const ithBit = (index >> i) & 1;
      if (ithBit == 1) {
        current = SparseMerkleTree.hash(this.tree.branch[i], current);
      } else {
        current = SparseMerkleTree.hash(current, MockMerkleLib.ZERO_HASHES[i]);
      }
    }

    return current;
  }

  // See `MerkleLib.branchRoot`
  public static branchRoot(leaf: string, branch: string[], index: number): string {
    const height = branch.length;

    let current = leaf;
    for (let i = 0; i < height; i++) {
      const ithBit = (index >> i) & 1;
      const sibling = branch[i];
      if (ithBit == 1) {
        // If ith bit is 1, then the leaf is somewhere to the right.
        current = SparseMerkleTree.hash(sibling, current);
      } else {
        // If the ith bit is 0, then the leaf is somewhere to the left.
        current = SparseMerkleTree.hash(current, sibling);
      }
    }

    return current;
  }
}
