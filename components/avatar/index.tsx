import React from "react";
type SizeType = 'sm' | 'md' | 'lg' | 'xl'

interface Props {
    name: string
    size: SizeType
}

const mapSizeClass = (size: SizeType): string => {
    const map = {
        'sm': 8,
        'md': 12,
        'lg': 18,
        'xl': 24
    }
    const s = map[size]
    return `h-${s} w-${s}`
}


export const Avatar : React.FC<Props> = (props) => {
    const {name, size = 'md'} = props
    const sizeClass = mapSizeClass(size)
    return <div className={sizeClass}>
        <img className='rounded-full flex items-center justify-center'
             src={`https://robohash.org/set_set5/bgset_bg1/${name}`} alt={`avatar-${name}`}/>
    </div>
}
