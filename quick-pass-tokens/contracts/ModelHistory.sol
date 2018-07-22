pragma solidity ^0.4.18;
pragma experimental ABIEncoderV2;

import '../node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol';

contract ModelHistory is Ownable{

  struct ModelIO {
    int64 timestamp;
    string input_hash;
    string model_hash;
    string output_hash;
  }

  ModelIO[] history;

  mapping (address => bool) public whiteList;

  function addWhiteList(address user) public onlyOwner {
    whiteList[user] = true;
  }

  function setHistory(ModelIO hist) public {
    require(whiteList[msg.sender] == true);
    history.push(hist);
  }

  function getHistory() public view returns (ModelIO[]) {
    return history;
  }

  function getLatestHistory() public view returns (ModelIO) {
    return history[history.length];
  }
}
