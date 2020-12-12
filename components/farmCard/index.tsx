import React from 'react'
import Image from 'next/image'
import { FarmLandData } from '../../types/FarmLandData'
import { Card } from '../card'
import { BurstValue, convertNumericIdToAddress } from '@burstjs/util'
import { Avatar } from '../avatar'
import { IconButton } from '../iconButton'

const CardHolder = ({ children }) => (
  <div className="h-64 justify-center flex">{children}</div>
)

const MoneyItem = (props) => {
  const v: BurstValue = props.value

  return (
    <div className="flex flex-row items-center">
      <span className="mr-1">{v.getBurst()}</span>
      <Image src="/icon/coin.svg" alt="coin" width={20} height={20} />
    </div>
  )
}

interface Props {
  data: FarmLandData
}

export const FarmCard: React.FC<Props> = (props) => {
  const { data } = props

  return (
    <CardHolder>
      <Card
        image="/img/farmland.small.png"
        title=""
        width="240px"
        height="240px"
      >
        <div className="p-1 absolute left-0 top-0 w-full">
          <div className="flex flex-row justify-between">
            <MoneyItem value={data.farmValue} />
            <Avatar
              name={convertNumericIdToAddress(data.patron)}
              badge="patron"
              size={32}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="h-full">Some more info here</div>
          <div className="h-full">Some more info here</div>
          <div className="h-full">Some more info here</div>
          <div className="h-full flex flex-row justify-end">
            <IconButton
              iconSrc="/icon/sow.svg"
              tooltip="Go Farming"
              size={48}
              onClick={() => {
                console.log('clicked')
              }}
            />
          </div>
        </div>
      </Card>
    </CardHolder>
  )
}
