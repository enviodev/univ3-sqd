import {
  Entity as Entity_,
  Column as Column_,
  PrimaryColumn as PrimaryColumn_,
} from "typeorm";
import * as marshal from "./marshal";

@Entity_()
export class Swap {
  constructor(props?: Partial<Swap>) {
    Object.assign(this, props);
  }

  @PrimaryColumn_()
  id!: string;

  @Column_("text", { nullable: false })
  sender!: string;

  @Column_("text", { nullable: false })
  recipient!: string;

  @Column_("numeric", {
    transformer: marshal.bigintTransformer,
    nullable: false,
  })
  amount0!: bigint;

  @Column_("numeric", {
    transformer: marshal.bigintTransformer,
    nullable: false,
  })
  amount1!: bigint;

  @Column_("numeric", {
    transformer: marshal.bigintTransformer,
    nullable: false,
  })
  sqrtPriceX96!: bigint;

  @Column_("numeric", {
    transformer: marshal.bigintTransformer,
    nullable: false,
  })
  liquidity!: bigint;

  @Column_("int4", { nullable: false })
  tick!: number;

  @Column_("numeric", {
    transformer: marshal.bigintTransformer,
    nullable: false,
  })
  blockNumber!: bigint;

  @Column_("numeric", {
    transformer: marshal.bigintTransformer,
    nullable: false,
  })
  blockTimestamp!: bigint;

  @Column_("text", { nullable: false })
  transactionHash!: string;
}
