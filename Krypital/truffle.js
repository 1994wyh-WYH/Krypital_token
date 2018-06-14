
	var LedgerWalletProvider = require("truffle-ledger-provider");
var infura_apikey = "odDeoF9Fbvm7XQx4YMMp"; // set your Infura API key
var ledgerOptions = {
    networkId: 1, // mainnet
    accountsOffset: 0 // we use the first address
};
module.exports = {
    networks: {
        live: {
            provider: new LedgerWalletProvider(ledgerOptions, "https://mainnet.infura.io/" + infura_apikey),
            network_id: 1,
		gas: 4600000
        }
    }
};

