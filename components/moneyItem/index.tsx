import { BurstValue } from '@burstjs/util'
import React from 'react'

interface Props {
  value: BurstValue
  scale?: number
}

export const MoneyItem: React.FC<Props> = (props) => {
  const { value, scale = 1.0 } = props
  return (
    <div className="flex flex-row items-center scalable">
      <img src="/icon/coin.svg" alt="coin" width={20} height={20} />
      <span className="ml-1 pt-0.5">
        {value && Number.parseFloat(value.getBurst()).toFixed(2)}
      </span>
      <style jsx>
        {`
          .scalable {
            transform: scale(${scale});
          }
        `}
      </style>
    </div>
  )
}
