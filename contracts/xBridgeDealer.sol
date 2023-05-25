// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "./interfaces/IStargateReceiver.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract xBridgeDealer is IStargateReceiver, OwnableUpgradeable {
    using SafeERC20 for IERC20;
   function sgReceive(
        uint16 _srcChainId,              // the remote chainId sending the tokens
        bytes memory _srcAddress,        // the remote Bridge address
        uint256 _nonce,                  
        address _token,                  // the token contract on the local chain
        uint256 amountLD,                // the qty of local _token contract tokens  
        bytes memory payload
    ) override external{

    }

    function withdraw(address asset, uint256 amount) external{
        IERC20(asset).safeTransfer(_msgSender(),amount);
    }

}
