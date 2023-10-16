// import { TypeormDatabase } from "@subsquid/typeorm-store";
// import { decodeHex } from "@subsquid/evm-processor";
// import { events } from "./abi/SwapContract";
// import { ethers } from "ethers";
// import { Gravatar, Swap } from "./model";
// import { processor, SWAP_CONTRACT } from "./processor";

// processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
//   const gravatars: Map<string, Gravatar> = new Map();
//   const swaps: Map<string, Swap> = new Map();
//   for (const c of ctx.blocks) {
//     for (const e of c.logs) {
//       if (!(e.address === SWAP_CONTRACT && e.topics[0] === events.Swap.topic))
//         continue;
//       // extract information from the event
//       const { recipient, sender, amount0, amount1 } = extractData(e);
//       let idString = "0x" + id.toString(16);
//       // create the swap entity
//       gravatars.set(
//         idString,
//         new Gravatar({
//           id: idString,
//           owner: decodeHex(owner),
//           displayName,
//           imageUrl,
//         })
//       );
//       swaps.set(
//         idString,
//         new Swap({
//           id: idString,
//           blockNumber: c.number,
//           blockTimestamp: c.timestamp,
//           owner: decodeHex(owner),
//           displayName,
//           imageUrl,
//         });
//       );
//     }
//   }
//   await ctx.store.upsert([...swaps.values()]);
// });

// function extractData(evmLog: any): {
//   id: bigint;
//   owner: string;
//   displayName: string;
//   imageUrl: string;
// } {
//   if (evmLog.topics[0] === events.Swap.topic) {
//     return events.Swap.decode(evmLog);
//   }
//   throw new Error("Unsupported topic");
// }
