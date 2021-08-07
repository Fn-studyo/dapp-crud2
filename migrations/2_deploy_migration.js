const Country = artifacts.require("Country");

module.exports = function (deployer) {
  deployer.deploy(Country);
};
