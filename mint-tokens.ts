import { mintTo } from "@solana/spl-token";

import "dotenv/config";

import {
  getExplorerLink,
  getKeypairFromEnvironment,
} from "@solana-developers/helpers";

import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));

// Our token has two decimal places
const MINOR_UNITS_PER_MAJOR_UNITS = Math.pow(10, 2);

//mint authority is in user's hands
const user = getKeypairFromEnvironment("SECRET_KEY");

// Subtitute in your token mint account from create-token-mint.ts
const tokenMintAccount = new PublicKey(
  "7wDQ1ddkqyDwcoWtu4U7PkwweoZF4ZjKDd1q1Ckjc6KP"
);

// Substitute in your own, or a friend's token account address, based on the previous step.
const recipientAssociatedTokenAccount = new PublicKey(
  "GB6dDMhoujyoSt9BrKaEcaknjcyhsNETBDahCsZj2HEV"
);

const transactionSignature = await mintTo(
  connection,
  user,
  tokenMintAccount,
  recipientAssociatedTokenAccount,
  user,
  10 * MINOR_UNITS_PER_MAJOR_UNITS
);

const link = getExplorerLink("transaction", transactionSignature, "devnet");

console.log(`✅ Success! Mint Token Transaction: ${link}`);

//token_mint_account 
//7wDQ1ddkqyDwcoWtu4U7PkwweoZF4ZjKDd1q1Ckjc6KP

//my_token_account_address
//GB6dDMhoujyoSt9BrKaEcaknjcyhsNETBDahCsZj2HEV
