import React from "react";

interface IProps {
    bg: string
}

export default function Hero<IProps>({bg, children}) {
    return (
        <div className='p-0 m-0 h-96 bg-cover bg-bottom bg-no-repeat container min-w-full'>
            {children}
            <style jsx>{`
    .container { 
        background-image: url('${bg}');
    }
      `}</style>
        </div>
    )
}

