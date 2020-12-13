import { BurstValue } from '@burstjs/util'
import React from 'react'

interface Props {
  value: BurstValue
}

export const MoneyItem: React.FC<Props> = (props) => {
  const { value } = props
  return (
    <div className="flex flex-row items-center">
      <img src="/icon/coin.svg" alt="coin" width={20} height={20} />
      <span className="ml-1">{value && value.getBurst()}</span>
    </div>
  )
}
