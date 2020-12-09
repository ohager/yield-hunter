import {Api} from "@burstjs/core";
import {FarmLandData} from "../types/FarmLandData";

export class FarmerService {
    constructor(private burstApi: Api, private contractIds: string[]) {
    }

    async fetchFarmLand(contractId: string): Promise<FarmLandData> {
        const contract = await this.burstApi.contract.getContract(contractId)
        return FarmLandData.fromContract(contract);
    }

    async fetchAllFarmLands(): Promise<FarmLandData[]> {
        const promises = this.contractIds.map((id) => this.fetchFarmLand(id))
        return await Promise.all(promises)
    }

}
