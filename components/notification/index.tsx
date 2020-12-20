import React, { useEffect, useState } from 'react'
import c from 'classnames'
import { useRecoilState } from 'recoil'
import { notificationState } from './state'

export const Notification: React.FC = () => {
  const [notification, setNotification] = useRecoilState(notificationState)
  const [isVisible, setVisible] = useState(false)
  const { type, message } = notification

  useEffect(() => {
    setVisible(notification.type !== 'none')
  }, [notification])

  useEffect(() => {
    let timeout = null
    if (isVisible) {
      setTimeout(close, 5000)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [isVisible])

  function close() {
    setVisible(false)
    setNotification({
      message: '',
      type: 'none',
    })
  }

  return (
    <div
      className={c([
        'relative flex flex-row justify-between',
        { hidden: !isVisible },
      ])}
    >
      <span className="ml-1"> {message}</span>
      <div className="p-0.5 pr-1.5 cursor-pointer font-sans" onClick={close}>
        &#x2715;
      </div>
    </div>
  )
}
