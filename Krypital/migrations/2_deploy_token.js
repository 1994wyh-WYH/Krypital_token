var KrypitalToken = artifacts.require("KrypitalToken");
module.exports = function(deployer) {
    deployer.deploy(KrypitalToken);
};
