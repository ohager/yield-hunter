import React from 'react'
import { Hero } from '../../../components/hero'
import { Avatar } from '../../../components/avatar'
import { convertNumericIdToAddress } from '@burstjs/util'
import { FarmLandData } from '../../../types/FarmLandData'

interface Props {
  data: FarmLandData
}

export const FarmHeader: React.FC<Props> = ({ data }) => {
  if (!data) return null
  return (
    <Hero bg="/img/farmland.small.png">
      <div className="relative flex flex-col justify-between items-center h-full p-4">
        <section className="flex flex-row justify-between w-full">
          <h1>TBD</h1>
          {data.patron !== '0' && (
            <Avatar
              name={convertNumericIdToAddress(data.patron)}
              badge="patron"
              size={72}
            />
          )}
        </section>
        <section className="flex flex-row justify-between w-full">
          <small>{JSON.stringify(data, null, '\t')}</small>
        </section>
        <section className="flex flex-row justify-between w-full">
          <div className="flex flex-row">
            {data.farmers.map((farmer) => (
              <div key={farmer} className="mr-4">
                <Avatar name={convertNumericIdToAddress(farmer)} size={72} />
              </div>
            ))}
          </div>
          <div>
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
    </Hero>
  )
}
