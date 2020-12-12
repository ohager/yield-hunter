import { useContext } from 'react'
import { AppContext } from '../../../app/appContext'
import useSWR from 'swr'
import { FarmLandData } from '../../../types/FarmLandData'
import { FarmLandHistory } from '../../../types/FarmLandHistory'
import { UseSWRBase } from '../../../types/UseSWRBase'

interface UseFarmLandHistories extends UseSWRBase {
  farmLandHistories: FarmLandHistory[]
}

export function useFarmlandHistories(): UseFarmLandHistories {
  const { FarmerService } = useContext(AppContext)
  const { data, error } = useSWR(
    'fetchFarmLandsHistories',
    async () => await FarmerService.fetchAllFarmLandHistories(),
    {
      refreshInterval: 30 * 1000,
    }
  )

  return {
    farmLandHistories: data,
    isLoading: !error && !data,
    isError: error,
  }
}
