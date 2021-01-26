import { useContext } from 'react'
import { AppContext } from '../../../app/appContext'
import useSWR from 'swr'
import { FarmLandData } from '../../../types/FarmLandData'
import { UseSWRBase } from '../../../types/UseSWRBase'

interface UseFarmLand extends UseSWRBase {
  farmLand: FarmLandData
}

export function useFarmland(id: string): UseFarmLand {
  const { FarmerService } = useContext(AppContext)
  const { data, error } = useSWR(
    'fetchFarmLand',
    async () => await FarmerService.fetchFarmLand(id),
    {
      refreshInterval: 30 * 1000,
    }
  )

  return {
    farmLand: data,
    isLoading: !error && !data,
    isError: error,
  }
}
