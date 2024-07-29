import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);


// The public key is:  F6kj2jbTCTtSj3BaCDoowzP33EC5HPX85x1fgC6QuN5L

// The secret key is:  Uint8Array(64) [
//    31, 215, 232,  32, 206, 132,  72, 218, 254, 197, 224,
//   249, 168,  80, 183,  56, 122, 226, 195,  33, 132,  61,
//   230, 228, 162,  67, 201, 155, 197, 223,  31, 146, 209,
//   124, 245, 236,  89,  41, 210, 193,  16, 178,  30, 110,
//   243,  18, 204, 251, 117, 250, 194,  82,  64,  53,  28,
//   220, 166, 161, 157,  86, 129,  51, 141, 223
// ]