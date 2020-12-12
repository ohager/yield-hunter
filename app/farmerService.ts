import { Api } from '@burstjs/core'
import { FarmLandData } from '../types/FarmLandData'

const LordMethodHashes = {
  stake: '-2656511522688860312',
  buyIn: '5623382620658472920',
  buyOut: '3920936425848631052',
  takeOver: '-5414711536059530086',
}

const FarmerMethodHashes = {
  payout: '-4576041685933966606',
}

export class FarmerService {
  constructor(private burstApi: Api, private contractIds: string[]) {}

  async fetchFarmLand(contractId: string): Promise<FarmLandData> {
    const contract = await this.burstApi.contract.getContract(contractId)
    return FarmLandData.fromContract(contract)
  }

  async fetchAllFarmLands(): Promise<FarmLandData[]> {
    const promises = this.contractIds.map((id) => this.fetchFarmLand(id))
    return await Promise.all(promises)
  }
}
