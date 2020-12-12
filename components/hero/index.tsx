import React from 'react'

interface IProps {
  bg: string
}

export const Hero: React.FC<IProps> = ({ bg, children }) => {
  return (
    <div className="p-0 m-0 h-96 bg-cover bg-bottom bg-no-repeat bg min-w-full relative">
      {children}
      <style jsx>{`
        .bg {
          background-image: url('${bg}');
        }
      `}</style>
    </div>
  )
}
