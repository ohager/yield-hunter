import React from 'react'
import { FarmLandData } from '../../types/FarmLandData'
import { Card } from '../card'
import { BurstValue, convertNumericIdToAddress } from '@burstjs/util'
import { Avatar } from '../avatar'
import { IconButton } from '../iconButton'
import Popup from 'reactjs-popup'
import { PaymentModal } from '../paymentModal'
import { MoneyItem } from '../moneyItem'
import { copyBurstValue } from '../../app/copyBurstValue'
import Link from 'next/link'

const CardHolder = ({ children }) => (
  <div className="relative h-64 justify-center flex">{children}</div>
)

const InfoLine = ({ label, children }) => (
  <div className="h-full flex flex-col justify-start">
    <small className="text-xs text-gray-600">{label}</small>
    <div>{children}</div>
  </div>
)

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
            {data.patron !== '0' && (
              <Avatar
                name={convertNumericIdToAddress(data.patron)}
                badge="patron"
                size={32}
              />
            )}
          </div>
        </div>
        <div className="p-1 absolute left-0 top-1/3 w-full">
          <div className="flex flex-row justify-end">
            {data.lords.map((lord) => (
              <Avatar
                name={convertNumericIdToAddress(lord)}
                badge="lord"
                size={28}
              />
            ))}
          </div>
        </div>
        <div className="p-1 flex flex-col justify-between h-full relative">
          <InfoLine label="Highest Payout">
            <MoneyItem value={data.highestPayout} />
          </InfoLine>
          <InfoLine label="Lords ROI/day">
            <MoneyItem value={data.lordMaxROIperDay} />
          </InfoLine>
          <div
            className="h-full flex flex-row justify-end items-center w-full absolute right-0"
            style={{ top: '44px' }}
          >
            <IconButton
              iconSrc="/icon/castle.svg"
              tooltip="See Lord Details"
              size={30}
              onClick={() => {
                console.log('clicked')
              }}
            />
            <div className="w-2" />
            <Link href={`/farms/${data.farmLandId}`}>
              <IconButton
                iconSrc="/icon/greenhouse.svg"
                tooltip="See Farmland Details"
                size={32}
                onClick={() => {
                  console.log('clicked')
                }}
              />
            </Link>
            <div className="w-2" />
            <Popup
              trigger={() => (
                <IconButton
                  iconSrc="/icon/sow.svg"
                  tooltip="Go Farming"
                  size={48}
                  onClick={() => {}}
                />
              )}
              modal
            >
              {(close) => (
                <PaymentModal
                  value={copyBurstValue(data.farmValue).add(
                    BurstValue.fromBurst(0.5)
                  )}
                  recipientId={data.farmLandId}
                  title="Go Farming"
                  imageSrc="./img/farmland.small.png"
                  onClose={close}
                />
              )}
            </Popup>
          </div>
        </div>
      </Card>
    </CardHolder>
  )
}
