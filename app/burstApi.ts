import {ApiSettings, composeApi} from '@burstjs/core'

const settings = new ApiSettings('https://testnet.burstcoin.network:6876')
export const BurstApi = composeApi(settings)
