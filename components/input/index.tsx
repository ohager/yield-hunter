import React, { useEffect } from 'react'
import hash from '@sindresorhus/string-hash'

interface Props {
  label: string
  redact?: boolean
  startAdornment?: string | JSX.Element
}

export const Input: React.FC<Props & React.InputHTMLAttributes<any>> = (
  props
) => {
  const { label = '', startAdornment, redact, ...inputProps } = props

  const h = hash(`${label}.${Date.now()}`)
  const id = `${label}-${h}`

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-3">
        <label htmlFor={id} className="block text-xs text-gray-500 uppercase">
          {label}
        </label>
        <div className="p-0.5 mt-1 flex rounded-md text-lg">
          {startAdornment && (
            <span className="inline-flex items-center px-3 rounded-sm border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
              {startAdornment}
            </span>
          )}
          <input
            type={redact ? 'password' : 'text'}
            name={id}
            id={id}
            className="p-1 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-sm border border-gray-300"
            {...inputProps}
          />
        </div>
      </div>
    </div>
  )
}
