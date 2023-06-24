import { MessagesCache } from "@connext/nxtp-adapters-cache";
import { Database } from "@connext/nxtp-adapters-database";
import { DBHelper } from "@connext/nxtp-utils";
import { Pool } from "pg";

export class SpokeDBHelper implements DBHelper {
  constructor(
    private domain: string,
    private count: number,
    private db: { reader: Database; writer: { database: Database; pool: Pool } },
    private cache: MessagesCache,
  ) {}

  public async getCount(): Promise<number> {
    return this.count;
  }

  public async getNode(index: number): Promise<string | undefined> {
    let node: string | undefined = await this.cache.getNode(this.domain, index);
    if (!node) {
      node = await this.db.reader.getSpokeNode(this.domain, index, this.count);
      if (node) {
        await this.cache.putNode(this.domain, index, node);
      }
    }
    return node;
  }

  public async getNodes(start: number, end: number): Promise<string[]> {
    let nodes: string[] = (await this.cache.getNodes(this.domain, start, end)) ?? [];
    if (!nodes || nodes.length == 0) {
      nodes = await this.db.reader.getSpokeNodes(this.domain, start, end, this.count);
      // Store in cache if all nodes are returned.
      if (nodes.length == end - start + 1) await this.cache.putNodes(this.domain, start, end, nodes);
    }
    return nodes;
  }

  public async getRoot(path: string): Promise<string | undefined> {
    let root: string | undefined = await this.cache.getRoot(this.domain, path);
    if (!root) {
      root = await this.db.reader.getRoot(this.domain, path);
      if (root) {
        await this.cache.putRoot(this.domain, path, root);
      }
    }
    return root;
  }

  public async putRoot(path: string, hash: string): Promise<void> {
    await this.db.writer.database.putRoot(this.domain, path, hash, this.db.writer.pool);
    await this.cache.putRoot(this.domain, path, hash);
  }

  public async clearCache(): Promise<void> {
    await this.cache.clearDomain(this.domain);
    return await this.db.writer.database.deleteCache(this.domain, this.db.writer.pool);
  }
}

export class HubDBHelper implements DBHelper {
  constructor(
    private domain: string,
    private count: number,
    private db: { reader: Database; writer: { database: Database; pool: Pool } },
    private cache: MessagesCache,
  ) {}

  public async getCount(): Promise<number> {
    return this.count;
  }

  public async getNode(index: number): Promise<string | undefined> {
    let node: string | undefined = await this.cache.getNode(this.domain, index);
    if (!node) {
      node = await this.db.reader.getHubNode(index, this.count);
      if (node) {
        await this.cache.putNode(this.domain, index, node);
      }
    }
    return node;
  }

  public async getNodes(start: number, end: number): Promise<string[]> {
    let nodes: string[] = (await this.cache.getNodes(this.domain, start, end)) ?? [];
    if (!nodes || nodes.length == 0) {
      nodes = await this.db.reader.getHubNodes(start, end, this.count);
      // Store in cache if all nodes are returned.
      if (nodes.length == end - start + 1) await this.cache.putNodes(this.domain, start, end, nodes);
    }
    return nodes;
  }

  public async getRoot(path: string): Promise<string | undefined> {
    let root: string | undefined = await this.cache.getRoot(this.domain, path);
    if (!root) {
      root = await this.db.reader.getRoot(this.domain, path);
      if (root) {
        await this.cache.putRoot(this.domain, path, root);
      }
    }
    return root;
  }

  public async putRoot(path: string, hash: string): Promise<void> {
    await this.db.writer.database.putRoot(this.domain, path, hash, this.db.writer.pool);
    await this.cache.putRoot(this.domain, path, hash);
  }

  public async clearCache(): Promise<void> {
    await this.cache.clearDomain(this.domain);
    return await this.db.writer.database.deleteCache(this.domain, this.db.writer.pool);
  }
}
