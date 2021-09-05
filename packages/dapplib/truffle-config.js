require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food dance rebel noise mistake hundred light army gate'; 
let testAccounts = [
"0xa51acb09c33b0b37a512fabae9e9e62fdf542eef6757af19784b5254fb8602f3",
"0x2acc02abe2bcdb1be6bb9ce186c16fc85b8e483dbc347b08a6b1f0737cffcf61",
"0xa931bfbdf8c9e207b748fbefafd53923270f953a1f2e2b53eeb60abd0405aa79",
"0x6806148f6dd13d2f3b268ae059578d945670556e724151dd3783cc131dfcf714",
"0x71f05d84372bfabf37363c3542c9007cb86bddcfdf58615ce14440ecd9db6002",
"0x8b41f041deb8d6fa670ac9218b67aeba6f378c46b87517b2af5597e0c7fdc0f5",
"0x65b1d4eccfbee1caa9adadba2f6c4b88af0434309912ac4e141e0ab4ef55620a",
"0x203227957da53ee1bd5b3cbb6b2ed764334db7c66968321be688cbab878321ad",
"0xa48c13c10fc514fbaa0d1c0a1b360cc0f163952588e8e3cc9c59753966446ac1",
"0x7fe24683a8161400894effc6651bda097fd44b0c1d3f67be60cb4873c64f17cd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

