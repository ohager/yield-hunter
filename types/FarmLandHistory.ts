import { Transaction } from '@burstjs/core'

interface FarmLandHistoryArgs {
  farmLandId: string
  transactions: Transaction[]
}

export class FarmLandHistory {
  public readonly transactions: Transaction[]
  public readonly farmLandId: string

  constructor(args: FarmLandHistoryArgs) {
    this.farmLandId = args.farmLandId
    this.transactions = args.transactions
  }

  getAllPayouts(): Transaction[] {
    return this.transactions.filter((t) => t.sender === this.farmLandId)
  }

  getAllPayins(): Transaction[] {
    return this.transactions.filter((t) => t.sender !== this.farmLandId)
  }
}
