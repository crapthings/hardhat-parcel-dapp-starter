// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Dapp {
  string private _str = 'Hardhat Parcel Dapp Starter';

  event changeStr(string str);

  /// @notice use this function to view your string
  /// @return str
  function getStr () public view returns (string memory) {
    console.log("log: str is equal to", _str);
    return _str;
  }

  /// @notice set string to your input
  /// @param str set string to any thing that fit your need
  function setStr (string memory str) public {
    console.log("log: set str to", str);
    _str = str;
    emit changeStr(_str);
  }
}
