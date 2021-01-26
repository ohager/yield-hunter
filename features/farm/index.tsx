import React from 'react'
import { Hero } from '../../components/hero'
import { useFarmland } from './hooks/useFarmLand'

interface Props {
  id: string
}

export const Farm: React.FC<Props> = ({ id }) => {
  const { farmLand, isLoading } = useFarmland(id)
  return (
    <>
      <Hero bg="img/farmland.small.png">
        <div className="relative flex items-center h-full">
          <small>{JSON.stringify(farmLand, null, '\t')}</small>
        </div>
      </Hero>
    </>
  )
}
