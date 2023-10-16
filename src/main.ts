import { TypeormDatabase } from "@subsquid/typeorm-store";
import { decodeHex } from "@subsquid/evm-processor";
import { events } from "./abi/SwapContract";
import { ethers } from "ethers";
import { Swap } from "./model";
import { processor, SWAP_CONTRACT } from "./processor";

processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
  const swaps: Map<string, Swap> = new Map();

  for (const c of ctx.blocks) {
    for (const e of c.logs) {
      if (!(e.address === SWAP_CONTRACT && e.topics[0] === events.Swap.topic))
        continue;
      // extract information from the event

      const {
        recipient,
        sender,
        amount0,
        amount1,
        sqrtPriceX96,
        liquidity,
        tick,
      } = extractData(e);
      // create the swap entity
      swaps.set(
        e.block.hash,
        new Swap({
          id: e.transaction?.hash,
          sender: recipient,
          recipient: sender,
          amount0: amount0,
          amount1: amount1,
          sqrtPriceX96: sqrtPriceX96,
          liquidity: liquidity,
          tick: Number(tick),
          blockNumber: BigInt(e.block.height),
          blockTimestamp: BigInt(e.block.timestamp),
          transactionHash: e.transaction?.hash!,
        })
      );
    }
  }

  await ctx.store.upsert([...swaps.values()]);
});

function extractData(evmLog: any): {
  recipient: string;
  sender: string;
  amount0: bigint;
  amount1: bigint;
  sqrtPriceX96: bigint;
  liquidity: bigint;
  tick: bigint;
} {
  if (evmLog.topics[0] === events.Swap.topic) {
    return events.Swap.decode(evmLog);
  }
  throw new Error("Unsupported topic");
}
