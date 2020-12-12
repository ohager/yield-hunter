import React, { useContext } from 'react'

export interface ModalProps {
  title: string
  onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <div className="relative m-1.5">
      <div className="flex flex-row justify-between items-center">
        <h4 className="text-gray-600">{title}</h4>
        <div
          className="p-0.5 pr-1.5 cursor-pointer font-sans"
          onClick={onClose}
        >
          &#x2715;
        </div>
      </div>
      <hr className="mt-2 mb-2" />
      {children}
    </div>
  )
}
