import React, { useContext } from 'react'
import { Hero } from '../../components/hero'
import { FieldsCarousel } from './fieldsCarousel'
import { Avatar } from '../../components/avatar'
import { InfoBox } from './infoBox'
import useSWR from 'swr'
import { AppContext } from '../../app/appContext'
import { FarmLandData } from '../../types/FarmLandData'

export const Home = () => {
  const { FarmerService } = useContext(AppContext)
  const { data } = useSWR<FarmLandData[]>(
    'fetchFarms',
    async () => await FarmerService.fetchAllFarmLands(),
    {
      refreshInterval: 10 * 1000,
    }
  )
  return (
    <>
      <Hero bg="img/farmland.small.png">
        <div className="relative flex items-center h-full">
          {data && <FieldsCarousel farmLands={data} />}
          <InfoBox>
            Best Farmers
            <Avatar name="ohager" badge="lord" />
            <Avatar name="frank" badge="patron" />
            <Avatar name="jjos" />
          </InfoBox>
        </div>
      </Hero>
      <p>{JSON.stringify(data, null, '\t')}</p>
    </>
  )
}
