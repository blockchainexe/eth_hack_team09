var SimpleStorage = artifacts.require("./SimpleStorage.sol");
const EIP20 = artifacts.require('./EIP20.sol');

module.exports = function(deployer) {
  deployer.deploy(EIP20, 1000000, 'PaulAndKames', 0, 'PAK');
};
