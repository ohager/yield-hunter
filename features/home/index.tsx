import React, { useContext } from 'react'
import { Hero } from '../../components/hero'
import { FieldsCarousel } from './fieldsCarousel'
import { Avatar } from '../../components/avatar'
import { InfoBox } from './infoBox'
import useSWR from 'swr'
import { AppContext } from '../../app/appContext'
import { FarmLandData } from '../../types/FarmLandData'
import { FarmLandHistory } from '../../types/FarmLandHistory'
import { useFarmlands } from './hooks/useFarmLands'
import { useFarmlandHistories } from './hooks/useFarmLandHistories'
import { useSetRecoilState } from 'recoil'
import { notificationState } from '../../components/notification/state'

export const Home = () => {
  const { FarmerService } = useContext(AppContext)
  const { farmLands } = useFarmlands()
  const { farmLandHistories } = useFarmlandHistories()
  const setNotification = useSetRecoilState(notificationState)

  setNotification({
    message: 'Hello',
    type: 'success',
  })

  return (
    <>
      <Hero bg="img/farmland.small.png">
        <div className="relative flex items-center h-full">
          {farmLands && <FieldsCarousel farmLands={farmLands} />}
          <InfoBox>
            Best Farmers
            <Avatar name="ohager" badge="lord" />
            <Avatar name="frank" badge="patron" />
            <Avatar name="jjos" />
          </InfoBox>
        </div>
      </Hero>
      <p>{JSON.stringify(farmLands, null, '\t')}</p>
    </>
  )
}
