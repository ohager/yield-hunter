import React from 'react'
import { AvatarBadge } from './AvatarBadge'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

type BadgeType = 'patron' | 'lord'

function getBadgeSource(badge: BadgeType) {
  const map = {
    patron: '/icon/star.svg',
    lord: '/icon/top-hat.svg',
  }
  return map[badge]
}

interface Props {
  name: string
  size?: number
  badge?: BadgeType
}

export const Avatar: React.FC<Props> = (props) => {
  const { name, size = 64, badge } = props

  return (
    <div className="container">
      {badge && <AvatarBadge src={getBadgeSource(badge)} size={size} />}
      <Popup
        trigger={(open) => (
          <img
            className="rounded-full flex items-center justify-center"
            src={`https://robohash.org/set_set5/bgset_bg1/${name}?size=128x128`}
            alt={`avatar-${name}`}
          />
        )}
        on={['hover']}
      >
        <span>{name}</span>
      </Popup>
      <style jsx>{`
        .container {
          position: relative;
          height: ${size}px;
          width: ${size}px;
        }
      `}</style>
    </div>
  )
}
