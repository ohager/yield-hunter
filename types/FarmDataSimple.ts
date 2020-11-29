import {BurstValue} from "@burstjs/util";

export interface FarmDataSimple{
    farmers: string[],
    patron: string,
    lords: string[],
    farmingPower: BurstValue,
    patronLevel: BurstValue,
    currentFarmValue: BurstValue,
    lordInvestments: BurstValue,
}
