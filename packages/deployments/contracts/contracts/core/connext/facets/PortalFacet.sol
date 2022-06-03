// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.14;

import {BaseConnextFacet} from "./BaseConnextFacet.sol";
import {IAavePool} from "../interfaces/IAavePool.sol";
import {AssetLogic} from "../libraries/AssetLogic.sol";
import {SafeERC20Upgradeable, IERC20Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";

contract PortalFacet is BaseConnextFacet {
  // ========== Custom Errors ===========
  error PortalFacet__setAavePortalFee_invalidFee();
  error PortalFacet__repayAavePortal_insufficientFunds();
  error PortalFacet__repayAavePortal_backingTooHigh();
  error PortalFacet__repayAavePortal_feeTooHigh();
  error PortalFacet__repayAavePortal_swapFailed();

  // ============ Events ============

  /**
   * @notice Emitted when a router executed a manual repayment to Aave Portal
   * @param router - The router that execute the repayment
   * @param asset - The asset that was repaid
   * @param amount - The amount that was repaid
   * @param fee - The fee amount that was repaid
   */
  event AavePortalRouterRepayment(address indexed router, address asset, uint256 amount, uint256 fee);

  // ============ Getters methods ==============

  function getAavePortalDebt(bytes32 _transferId) external view returns (uint256) {
    return s.portalDebt[_transferId];
  }

  function getAavePortalFeeDebt(bytes32 _transferId) external view returns (uint256) {
    return s.portalDebt[_transferId];
  }

  function aavePool() external view returns (address) {
    return s.aavePool;
  }

  function aavePortalFee() external view returns (uint256) {
    return s.aavePortalFeeNumerator;
  }

  // ============ External functions ============

  /**
   * @notice Sets the Aave Pool contract address.
   * @dev Allows to set the aavePool to address zero to disable Aave Portal if needed
   * @param _aavePool The address of the Aave Pool contract
   */
  function setAavePool(address _aavePool) external onlyOwner {
    s.aavePool = _aavePool;
  }

  /**
   * @notice Sets the Aave Portal fee numerator
   * @param _aavePortalFeeNumerator The new value for the Aave Portal fee numerator
   */
  function setAavePortalFee(uint256 _aavePortalFeeNumerator) external onlyOwner {
    if (_aavePortalFeeNumerator > s.LIQUIDITY_FEE_DENOMINATOR) revert PortalFacet__setAavePortalFee_invalidFee();

    s.aavePortalFeeNumerator = _aavePortalFeeNumerator;
  }

  /**
   * @notice Used by routers to perform a manual repayment to Aave Portals to cover any outstanding debt
   * @dev The router must be approved for portal and with enough liquidity
   * @param _local The local asset (what router stores liquidity in)
   * @param _backingAmount The principle to be paid (in adopted asset)
   * @param _feeAmount The fee to be paid (in adopted asset)
   * @param _maxIn The max value of the local asset to swap for the _backingAmount of adopted asset
   */
  function repayAavePortal(
    address _local,
    uint256 _backingAmount,
    uint256 _feeAmount,
    uint256 _maxIn,
    bytes32 _transferId
  ) external {
    uint256 totalAmount = _backingAmount + _feeAmount; // in adopted
    uint256 routerBalance = s.routerBalances[msg.sender][_local]; // in local

    // Sanity check: has that much to spend
    if (routerBalance < _maxIn) revert PortalFacet__repayAavePortal_insufficientFunds();

    // Sanity check: not overpaying principle
    if (_backingAmount > s.portalDebt[_transferId]) revert PortalFacet__repayAavePortal_backingTooHigh();

    // Sanity check: not overpaying fees
    if (_feeAmount > s.portalFeeDebt[_transferId]) revert PortalFacet__repayAavePortal_feeTooHigh();
    // Need to swap into adopted asset or asset that was backing the loan
    // The router will always be holding collateral in the local asset while the loaned asset
    // is the adopted asset

    // Swap for exact `totalRepayAmount` of adopted asset to repay aave
    (bool success, uint256 amountIn, address adopted) = AssetLogic.swapFromLocalAssetIfNeededForExactOut(
      _local,
      totalAmount,
      _maxIn
    );

    // decrement router balances
    unchecked {
      s.routerBalances[msg.sender][_local] -= amountIn;
    }

    if (!success) revert PortalFacet__repayAavePortal_swapFailed();

    // back loan
    SafeERC20Upgradeable.safeIncreaseAllowance(IERC20Upgradeable(adopted), s.aavePool, totalAmount);

    IAavePool(s.aavePool).backUnbacked(adopted, _backingAmount, _feeAmount);

    emit AavePortalRouterRepayment(msg.sender, adopted, _backingAmount, _feeAmount);
  }
}
