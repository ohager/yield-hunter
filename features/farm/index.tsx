import React from 'react'
import { useFarmland } from './hooks/useFarmLand'
import { FarmHeader } from './header/farmHeader'

interface Props {
  id: string
}

export const Farm: React.FC<Props> = ({ id }) => {
  const { farmLand, isLoading } = useFarmland(id)

  return (
    <section className="flex flex-col">
      <FarmHeader data={farmLand} />
      <h1>more data here</h1>
    </section>
  )
}
