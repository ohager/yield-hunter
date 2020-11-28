import styles from './hero.module.css'
import React from "react";

interface IProps {
    bg: string
}

export default function Hero<IProps>({bg, children}) {
    return (
        <div className='container'>
            {children}
            <style jsx>{`
    .container { 
        height: 24rem;
        min-width: 100vw;
        max-width: 100vw;
        padding: 0;
        margin: 0;
        background: url('${bg}') no-repeat bottom;
        background-size: cover;
    }
      `}</style>
        </div>
    )
}

