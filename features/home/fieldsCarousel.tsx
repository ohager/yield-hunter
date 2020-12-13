import React from 'react'
import Carousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { FarmCard } from '../../components/farmCard'
import { FarmLandData } from '../../types/FarmLandData'

interface Props {
  farmLands: FarmLandData[]
}

export const FieldsCarousel: React.FC<Props> = ({ farmLands }) => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1280: { items: 4 },
  }

  const farmItems = farmLands.map((f) => <FarmCard data={f} />)

  return (
    <Carousel
      items={farmItems}
      responsive={responsive}
      autoPlayInterval={3000}
      disableDotsControls
      disableButtonsControls
      touchTracking={false}
      autoPlay={farmItems.length > 3}
      infinite
    />
  )
}
