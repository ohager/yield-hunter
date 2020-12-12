import React from 'react'
import hash from '@sindresorhus/string-hash'

export const RadioButton: React.FC<React.InputHTMLAttributes<any>> = (
  props
) => {
  const { children, ...inputProps } = props
  const h = hash(`rb-${Date.now()}`)
  const id = `rb-${h}`
  return (
    <>
      <div className="flex items-center">
        <input
          id={id}
          type="radio"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          {...inputProps}
        />
        <label
          htmlFor={id}
          className="ml-3 block text-sm font-medium text-gray-700"
        >
          {children}
        </label>
      </div>
    </>
  )
}
