import styles from './layout.module.css'
import { Notification } from '../notification'
import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="w-full m-0 p-0">
      {children}
      <div className="absolute top-2 left-1/4 w-1/2 z-50">
        <Notification />
      </div>
    </div>
  )
}
