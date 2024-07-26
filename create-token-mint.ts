import { createMint } from "@solana/spl-token";

import "dotenv/config";

import {
  getKeypairFromEnvironment,
  getExplorerLink,
} from "@solana-developers/helpers";

import { Connection, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

const user = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `🔑 Loaded our keypair securely, using an env file! Our public key is: ${user.publicKey.toBase58()}`
);

// This is a shortcut that runs:
// SystemProgram.createAccount
// token.createInitializeMintInstruction
// See https://www.soldev.app/course/token-program


//token mint creation | factory creation | 
//there's an address to tokenMint
const tokenMint = await createMint(connection, user, user.publicKey, null, 2);


const link = getExplorerLink("address", tokenMint.toString(), "devnet");

console.log(`✅ Finished! Created token mint: ${link}`);

//https://explorer.solana.com/address/7wDQ1ddkqyDwcoWtu4U7PkwweoZF4ZjKDd1q1Ckjc6KP?cluster=devnet