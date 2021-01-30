import React from 'react'
import { Hero } from '../../../components/hero'
import { Avatar } from '../../../components/avatar'
import { BurstValue, convertNumericIdToAddress } from '@burstjs/util'
import { FarmLandData } from '../../../types/FarmLandData'
import { MoneyItem } from '../../../components/moneyItem'
import { PaymentIconButton } from '../../../components/paymentIconButton'

interface Props {
  data: FarmLandData
}

export const FarmHeader: React.FC<Props> = ({ data }) => {
  if (!data) return null
  return (
    <Hero bg="/img/farmland.small.png">
      <div className="relative flex flex-col justify-between items-center h-full p-4 drop-shadow">
        <section className="flex flex-row justify-between w-full">
          <div className="flex flex-row">
            <h2 className="text-lg">Farming Power:</h2>
            <div className="ml-4" />
            <MoneyItem value={data.farmingPower} scale={1.3} />
          </div>
          <div>
            {data.patron !== '0' && (
              <Avatar
                name={convertNumericIdToAddress(data.patron)}
                badge="patron"
                size={72}
              />
            )}
          </div>
        </section>
        <section className="flex flex-row justify-center items-center w-full">
          <div className="flex flex-row justify-center">
            <MoneyItem value={data.farmValue} scale={2.3} />
            <div className="ml-20 relative">
              <div className="animate-ping absolute">
                <img
                  src={'/icon/sow.svg'}
                  width={48}
                  height={48}
                  alt="Go Farming"
                />
              </div>
              <PaymentIconButton
                tooltip="Go Farming"
                paymentValue={data.farmValue
                  .clone()
                  .add(BurstValue.fromBurst(0.5))}
                recipientId={data.farmLandId}
              />
            </div>
          </div>
        </section>
        <section className="flex flex-row justify-between w-full">
          <div className="flex flex-row">
            {data.farmers.map((farmer) => (
              <div key={farmer} className="mr-4">
                <Avatar name={convertNumericIdToAddress(farmer)} size={72} />
              </div>
            ))}
          </div>
          <div className="flex flex-row">
            {data.lords.map((lord) => (
              <Avatar
                name={convertNumericIdToAddress(lord)}
                badge="lord"
                size={72}
              />
            ))}
          </div>
        </section>
      </div>
      <style jsx>{`
        .drop-shadow {
          filter: drop-shadow(0 0 0.5rem white) !important;
        }
      `}</style>
    </Hero>
  )
}
