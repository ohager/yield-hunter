import React, { useEffect, useState } from 'react'
import c from 'classnames'
import { useRecoilState } from 'recoil'
import { notificationState } from './state'

function getIconSrc(type: string) {
  switch (type) {
    case 'success':
      return './icon/sunflower.svg'
    case 'error':
    default:
      return './icon/scarecrow.svg'
  }
}

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
      // setTimeout(close, 5000)
    }
    return () => {
      // clearTimeout(timeout)
    }
  }, [isVisible])

  function close() {
    setNotification({
      message: '',
      type: 'none',
    })
  }

  return (
    <div className="flex justify-center">
      <div
        className={c([
          'flex flex-row justify-between rounded-sm shadow items-center p-1 shadow',
          'notification animation-fadeIn',
          { visible: isVisible },
          { success: type === 'success' },
          { error: type === 'error' },
        ])}
      >
        <img
          src={getIconSrc(type)}
          width={48}
          height={48}
          alt="notification-icon"
        />
        <span className="ml-4 mr-4"> {message}</span>
        <div className="p-0.5 pr-1.5 cursor-pointer font-sans" onClick={close}>
          &#x2715;
        </div>
        <style jsx>{`
          .notification {
            display: none;
            color: lightgray;
          }

          .notification.visible {
            display: flex;
          }

          .notification.error {
            background: rgba(224, 73, 85, 0.8);
          }

          .notification.success {
            background: rgba(72, 145, 96, 0.8);
          }
        `}</style>
      </div>
    </div>
  )
}
