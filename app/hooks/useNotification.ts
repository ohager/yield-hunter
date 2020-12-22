import { useSetRecoilState } from 'recoil'
import { notificationState } from '../../components/notification/state'

export function useNotification(type: 'success' | 'error') {
  const setNotificationState = useSetRecoilState(notificationState)

  function show(message: string) {
    setNotificationState({
      type,
      message,
    })
  }

  function close(message: string) {
    setNotificationState({
      type: 'none',
      message: '',
    })
  }

  return {
    show,
    close,
  }
}
