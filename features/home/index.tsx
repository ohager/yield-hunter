import React, { useEffect } from 'react'
import { Hero } from '../../components/hero'
import { FieldsCarousel } from './fieldsCarousel'
import { Avatar } from '../../components/avatar'
import { InfoBox } from './infoBox'
import { useFarmlands } from './hooks/useFarmLands'
import { useNotification } from '../../app/hooks/useNotification'
import { TransitionedFarmCard } from '../../components/farmCard'

export const Home = () => {
  const { farmLands } = useFarmlands()
  const notification = useNotification('success')

  useEffect(() => {
    function show() {
      notification.show('Nice message')
    }

    setTimeout(show, 1000)
  }, [])

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
