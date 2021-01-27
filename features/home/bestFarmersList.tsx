import { Avatar } from '../../components/avatar'
import React from 'react'
import { BurstValue } from '@burstjs/util'
import { MoneyItem } from '../../components/moneyItem'

interface ListItemProps {
  name: string
  value: BurstValue
}

const ListItem: React.FC<ListItemProps> = ({ name, value }) => (
  <div className="mb-2 flex flex-row w-full items-center">
    <div className="flex-none pr-4">
      <Avatar name={name} />
    </div>
    <div>
      <MoneyItem value={value} />
    </div>
  </div>
)

export const BestFarmersList = () => {
  return (
    <>
      <ListItem name="jjos" value={BurstValue.fromBurst(2300)} />
      <ListItem name="frank_the_tank" value={BurstValue.fromBurst(2210)} />
      <ListItem name="ohager" value={BurstValue.fromBurst(2190)} />
    </>
  )
}
