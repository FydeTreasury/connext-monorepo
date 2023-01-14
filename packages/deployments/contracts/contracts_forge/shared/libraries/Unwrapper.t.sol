// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {Unwrapper, IWrapper} from "../../../contracts/shared/libraries/Unwrapper.sol";
import {Orphanage} from "../../../contracts/shared/libraries/Orphanage.sol";

import "../../utils/ForgeHelper.sol";
import "../../utils/Mock.sol";

contract UnwrapperTest is ForgeHelper {
  // ============ Events ============

  event OrphanedTokens(address indexed token, uint256 indexed amount, address indexed parent, bytes reason);
  event OrphanedNativeTokens(uint256 indexed amount, address indexed parent, bytes reason);

  // ============ Storage ============
  address constant MOCK_CONNEXT = address(999999);
  address constant MOCK_WRAPPER = address(888888);
  address constant MOCK_ERC20 = address(777777);

  // Arguments in tested methods.
  address constant originSender = address(111111);
  address constant recipient = address(222222);
  bytes constant callDataWithRecipient = abi.encode(recipient);
  bytes constant callDataNoRecipient = abi.encode(address(0));

  // Unused arguments in tested methods.
  bytes32 constant transferId = bytes32("");
  uint32 constant origin = 123456;

  // Tested contract.
  Unwrapper unwrapper;

  // ============ Test set up ============
  function setUp() public {
    vm.mockCall(MOCK_WRAPPER, abi.encodeWithSelector(IWrapper.withdraw.selector), abi.encode());
    vm.mockCall(MOCK_WRAPPER, abi.encodeWithSelector(IWrapper.transfer.selector), abi.encode(true));

    utils_setUpMockErc20(true); // Default transferSuccess = true.

    unwrapper = new Unwrapper(MOCK_CONNEXT, MOCK_WRAPPER);
  }

  // ============ Utils ============
  function utils_setUpMockErc20(bool transferSuccess) internal {
    vm.mockCall(MOCK_ERC20, abi.encodeWithSelector(IERC20.transfer.selector), abi.encode(transferSuccess));
  }

  function utils_expectOrphans(
    address asset,
    uint256 amount,
    address parent,
    bytes memory reason
  ) internal {
    if (asset == address(0)) {
      vm.expectEmit(true, true, true, true);
      emit OrphanedNativeTokens(amount, parent, reason);
      assertEq(unwrapper.checkOrphansFor(asset, parent), 0); // Should have 0 currently.
    } else {
      vm.expectEmit(true, true, true, true);
      emit OrphanedTokens(asset, amount, parent, reason);
      assertEq(unwrapper.checkOrphansFor(asset, parent), 0); // Should have 0 currently.
    }
  }

  function utils_assertOrphans(
    address asset,
    uint256 amount,
    address parent
  ) internal {
    assertEq(unwrapper.checkOrphansFor(asset, parent), amount);
  }

  // ============ Unwrapper.xReceive ============
  function test_Unwrapper__xReceive_works() public {
    address asset = MOCK_WRAPPER;
    uint256 amount = 10 ether;

    vm.prank(MOCK_CONNEXT);
    unwrapper.xReceive(transferId, amount, asset, originSender, origin, callDataWithRecipient);
  }

  function test_Unwrapper__xReceive_failsIfNotConnext() public {
    address asset = MOCK_WRAPPER;
    uint256 amount = 10 ether;

    vm.expectRevert("unwrap: !connext");
    unwrapper.xReceive(transferId, amount, asset, originSender, origin, callDataWithRecipient);
  }

  function test_Unwrapper__xReceive_failsIfZeroAmount() public {
    address asset = MOCK_WRAPPER;
    uint256 amount = 0;

    vm.expectRevert("unwrap: !amount");
    vm.prank(MOCK_CONNEXT);
    unwrapper.xReceive(transferId, amount, asset, originSender, origin, callDataWithRecipient);
  }

  function test_Unwrapper__xReceive_orphansIfRecipientIsZero() public {
    address asset = MOCK_WRAPPER;
    uint256 amount = 10 ether;

    // NOTE: Expecting recipient to be originSender in this case!
    utils_expectOrphans(asset, amount, originSender, "unwrap: !recipient");

    vm.prank(MOCK_CONNEXT);
    unwrapper.xReceive(transferId, amount, asset, originSender, origin, callDataNoRecipient);

    utils_assertOrphans(asset, amount, originSender);
  }

  function test_Unwrapper__xReceive_transfersIfNonWrapperAsset() public {
    address asset = MOCK_ERC20; // xReceive will be getting a random non-wrapper erc20 asset.
    uint256 amount = 10 ether;

    // Should transfer the non-wrapper ERC20 to the intended recipient!
    vm.expectCall(MOCK_ERC20, abi.encodeWithSelector(IERC20.transfer.selector, recipient, amount));

    vm.prank(MOCK_CONNEXT);
    unwrapper.xReceive(transferId, amount, asset, originSender, origin, callDataWithRecipient);
  }

  function test_Unwrapper__xReceive_orphansIfNonWrapperAssetAndERC20TransferFails() public {
    utils_setUpMockErc20(false);
    address asset = MOCK_ERC20; // xReceive will be getting a random non-wrapper erc20 asset.
    uint256 amount = 10 ether;

    utils_expectOrphans(asset, amount, recipient, "unwrap: !wrapper,!success");

    vm.prank(MOCK_CONNEXT);
    unwrapper.xReceive(transferId, amount, asset, originSender, origin, callDataWithRecipient);

    utils_assertOrphans(asset, amount, recipient);
  }

  function test_Unwrapper__xReceive_orphansIfNonWrapperAssetAndERC20TransferReverts() public {
    address asset = MOCK_ERC20; // xReceive will be getting a random non-wrapper erc20 asset.
    uint256 amount = 10 ether;

    // Clear mocked calls. Basically, we're going to simulate an ERC20 asset address given that has no
    // actual contract code at that address (we call `ERC20.transfer` but it will revert).
    vm.clearMockedCalls();

    // TODO: Use RevertingERC20
    // utils_expectOrphans(asset, amount, recipient, "EvmError: Revert");

    // vm.prank(MOCK_CONNEXT);
    // unwrapper.xReceive(transferId, amount, asset, originSender, origin, callDataWithRecipient);

    // utils_assertOrphans(asset, amount, recipient);
  }

  function test_Unwrapper__xReceive_orphansIfETHNotSent() public {}

  function test_Unwrapper__xReceive_transfersWETHIfWithdrawFails() public {}

  function test_Unwrapper__xReceive_orphansIfWithdrawFailsAndTransferWETHFails() public {}

  function test_Unwrapper__xReceive_orphansIfWithdrawFailsAndTransferWETHReverts() public {}
}
