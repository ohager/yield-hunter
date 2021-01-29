import { FarmerService } from './services/farmerService'
import React from 'react'
import { ApiSettings, composeApi } from '@burstjs/core'

const contractIds = process.env.NEXT_PUBLIC_CONTRACTS.split(',')
const settings = new ApiSettings(process.env.NEXT_PUBLIC_BURST_PEER_URL)

export const BurstApi = composeApi(settings)

export const appContext = {
  BurstApi,
  FarmerService: new FarmerService(BurstApi, contractIds),
}

export const AppContext = React.createContext(appContext)
