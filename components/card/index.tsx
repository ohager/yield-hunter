import React from 'react'

interface Props {
  width: string
  height: string
  image?: string
  title: string
}

export const Card: React.FC<Props> = (props) => {
  const { width, height, image = '', title, children } = props

  return (
    <div className="bg-white rounded-sm relative h-full container shadow-lg">
      <header className="p-1 h-1/2 w-full bg bg-cover bg-no-repeat bg-top">
        <h1>{title}</h1>
      </header>
      <div className="p-1">{children}</div>

      <style jsx>
        {`
          .container {
            height: ${height};
            width: ${width};
          }
          .bg {
            top: 0;
            background-image: url('${image}');
          }
        `}
      </style>
    </div>
  )
}
