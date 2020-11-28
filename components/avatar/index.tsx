import React from "react";

interface Props {
    name: string
    size?: number
}
export const Avatar : React.FC<Props> = (props) => {

    const {name, size = 64} = props
    return <div className='container'>
        <img className='rounded-full flex items-center justify-center'
             src={`https://robohash.org/set_set5/bgset_bg1/${name}`} alt={`avatar-${name}`}/>
        <style jsx>{`
    .container {
        height: ${size}px; 
        width: ${size}px;
    }
      `}</style>
    </div>
}
