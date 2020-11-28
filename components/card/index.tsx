import React from "react";
import cx from 'classnames'

export type ElevationType = 'off' | 'default' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type WidthType = 'sm' | 'md' | 'lg' | 'xl'

const mapElevationClass = (e: ElevationType): string => {
    if (e === 'off') return ''
    if (e === 'default') return 'shadow'
    return `shadow-${e}`
}

const mapWidthClass = (w: WidthType): string => {
    const map = {
        'sm': 48,
        'md': 64,
        'lg': 96,
        'xl': 128,
    }
    return `w-${map[w]}`
}

interface Props {
    elevation?: ElevationType
    width?: WidthType,
    image?: string,
    title: string,
}

export const Card: React.FC<Props> = (props) => {

    const {
        elevation = 'default',
        width = 'md',
        image = '',
        title,
        children
    } = props
    const containerStyle = cx(
        'bg-white rounded-sm relative h-full',
        mapWidthClass(width),
        mapElevationClass(elevation),
    )

    return (
        <div className={containerStyle}>
            <header className='p-1 h-1/3 w-full bg bg-cover bg-no-repeat bg-top'>
                <h1>{title}</h1>
            </header>
            <div className='p-1'>
                {children}
            </div>
            <style jsx>{`
    .bg { 
      top: 0;
      background-image: url('${image}');
    }
      `}</style>

        </div>
    )
}

