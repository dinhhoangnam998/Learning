const bip39 = require("bip39");
const HDKey = require("hdkey");

const mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);
const root = HDKey.fromMasterSeed(seed);
const addrnode0 = root.derive("m/44'/0'/0'/0/0");

console.log(addrnode0.publicKey.toString("base64"));
