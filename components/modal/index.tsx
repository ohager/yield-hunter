import React, { useContext } from 'react'

export interface ModalProps {
  title: string
  imageSrc?: string
  onClose: () => void
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { title, imageSrc, onClose, children } = props
  return (
    <div className="relative flex flex-row shadow-lg text-gray-600">
      {imageSrc && <div className="w-1/3 modal-img" />}
      <div className="flex flex-col p-2 w-full">
        <div className="flex flex-row justify-between items-center">
          <h4 className="text-lg">{title}</h4>
          <div
            className="p-0.5 pr-1.5 cursor-pointer font-sans"
            onClick={onClose}
          >
            &#x2715;
          </div>
        </div>
        <hr className="mt-2 mb-2" />
        <div className="flex flex-row">
          <div className="ml-2">{children}</div>
        </div>
      </div>
      <style jsx>{`
        .modal-img {
          background: url(${imageSrc});
          background-size: cover;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
      `}</style>
    </div>
  )
}
