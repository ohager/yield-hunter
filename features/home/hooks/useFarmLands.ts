import { useContext } from 'react'
import { AppContext } from '../../../app/appContext'
import useSWR from 'swr'
import { FarmLandData } from '../../../types/FarmLandData'
import { UseSWRBase } from '../../../types/UseSWRBase'

interface UseFarmLands extends UseSWRBase {
  farmLands: FarmLandData[]
}

export function useFarmlands(): UseFarmLands {
  const { FarmerService } = useContext(AppContext)
  const { data, error } = useSWR(
    'fetchFarmLands',
    async () => await FarmerService.fetchAllFarmLands(),
    {
      refreshInterval: 10 * 1000,
    }
  )

  return {
    farmLands: data,
    isLoading: !error && !data,
    isError: error,
  }
}
