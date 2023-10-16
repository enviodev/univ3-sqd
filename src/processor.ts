// import { EvmBatchProcessor } from "@subsquid/evm-processor";
// import { events } from "./abi/SwapContract";
// import { lookupArchive } from "@subsquid/archive-registry";

// export const SWAP_CONTRACT =
//   "0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640".toLowerCase();

// export const processor = new EvmBatchProcessor()
//   .setDataSource({
//     archive: lookupArchive("eth-mainnet"),
//     chain:
//       "https://ethereum-mainnet.core.chainstack.com/4f684a0bcb02b58f9a2fd403d913783b",
//   })
//   .setBlockRange({ from: 12_376_729 })
//   .setFinalityConfirmation(75)
//   .addLog({
//     address: [SWAP_CONTRACT],
//     topic0: [events.Swap.topic],
//   });
