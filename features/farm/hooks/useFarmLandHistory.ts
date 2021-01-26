import { useContext } from 'react'
import useSWR from 'swr'
import { AppContext } from '../../../app/appContext'
import { FarmLandHistory } from '../../../types/FarmLandHistory'
import { UseSWRBase } from '../../../types/UseSWRBase'

interface UseFarmLandHistory extends UseSWRBase {
  farmLandHistory: FarmLandHistory
}

export function useFarmlandHistory(id: string): UseFarmLandHistory {
  const { FarmerService } = useContext(AppContext)
  const { data, error } = useSWR(
    'fetchFarmLandHistory',
    async () => await FarmerService.fetchFarmLandHistory(id),
    {
      refreshInterval: 30 * 1000,
    }
  )

  return {
    farmLandHistory: data,
    isLoading: !error && !data,
    isError: error,
  }
}
