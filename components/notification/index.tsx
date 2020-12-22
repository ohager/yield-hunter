import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { notificationState } from './state'
import { CSSTransition } from 'react-transition-group'

function getNotificationAttributes(
  type: string
): { icon: string; bgCol: string } | null {
  switch (type) {
    case 'success':
      return {
        icon: './icon/sunflower.svg',
        bgCol: 'rgba(72, 145, 96, 0.8)',
      }
    case 'error':
      return {
        icon: './icon/scarecrow.svg',
        bgCol: 'rgba(224, 73, 85, 0.8)',
      }
    default:
      return null
  }
}

export const Notification: React.FC = () => {
  const [notification, setNotification] = useRecoilState(notificationState)
  const [isVisible, setVisible] = useState(false)
  const { type, message } = notification

  useEffect(() => {
    setVisible(notification.type !== 'none')
  }, [notification])

  function close() {
    setNotification({
      message: '',
      type: 'none',
    })
  }

  const attrs = getNotificationAttributes(type)
  return (
    <div className="flex justify-center">
      <CSSTransition
        in={isVisible}
        timeout={500}
        classNames="transition"
        onExited={close}
        unmountOnExit
      >
        <div className="flex flex-row justify-between rounded-sm shadow items-center p-1 shadow notification">
          <img
            src={attrs?.icon}
            width={48}
            height={48}
            alt="notification-icon"
          />
          <span className="ml-4 mr-4"> {message}</span>
          <div
            className="p-0.5 pr-1.5 cursor-pointer font-sans"
            onClick={() => {
              setVisible(false)
            }}
          >
            &#x2715;
          </div>
          <style jsx>{`
            .transition-enter {
              opacity: 0;
              transform: scale(0);
            }

            .transition-enter-active {
              opacity: 1;
              transform: scale(1);
              transition: all 500ms ease-out;
            }

            .transition-exit {
              opacity: 1;
              transform: scale(1);
            }

            .transition-exit-active {
              opacity: 0;
              transform: scale(0);
              transition: all 500ms ease-out;
            }

            .notification {
              color: lightgray;
              background: ${attrs?.bgCol};
            }
          `}</style>
        </div>
      </CSSTransition>
    </div>
  )
}
