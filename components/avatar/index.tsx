import React from "react";
import {AvatarBadge} from "./AvatarBagde";

type BadgeType = 'patron' | 'lord'

function getBadgeSource(badge: BadgeType) {
    const map = {
        'patron': 'icon/star.svg',
        'lord': 'icon/top-hat.svg'
    }
    return map[badge]
}

interface Props {
    name: string
    size?: number,
    badge?: BadgeType
}

export const Avatar: React.FC<Props> = (props) => {
    const {name, size = 64, badge} = props

    return <div className='container'>
        {badge && <AvatarBadge src={getBadgeSource(badge)} size={size}/>}
        <img className='rounded-full flex items-center justify-center'
             src={`https://robohash.org/set_set5/bgset_bg1/${name}`} alt={`avatar-${name}`}/>
        <style jsx>{`
    .container {
        position: relative;
        height: ${size}px; 
        width: ${size}px;
    }
      `}</style>
    </div>
}
