require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan rebel night smile include another army gentle'; 
let testAccounts = [
"0x372511080bd90735c076b8822e69082c165d86d8a7a8d289191098b4361a4cef",
"0x68a4db4c3bd9bd066cebc35445182e4fcecee431cbfe66f18dc5a47ec041199c",
"0xb026068042c1918b9f5b5839fd7f781549a225541a0e09e4ed5d7aba4529cc2e",
"0xbe1e3d74d92af7eba70d2851bbadc1b8172a10626924177aa1184ac0435f5f9c",
"0x7d21bc7041078c4777da4e1c6a2566e778efff5a690b8085036e4fcb185c4ddf",
"0xecda4bbfd1eed83678072350525399e858f3b73a4d97227dab58c69c581b6de1",
"0x1275dc782abed24cb97e2a6017964795ef5a5d3965db3b448b3382c20c18dd9b",
"0x266b7ad8dac919e1a0a759c6015f662a2208019aa80e27779e49d1c4dc960700",
"0xdd908389dee0403947f4152dead02faa6bcd64b071068c4b93d55107ded64816",
"0xed2208785cf325543c1ccca42e3567bd188ca127ff7b1ed188f05c53d347cb16"
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

