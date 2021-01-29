import { atom } from 'recoil'

interface Props {
  message: string
  type: 'success' | 'error' | 'none'
}

export const notificationState = atom<Props>({
  key: '$notification',
  default: {
    message: '',
    type: 'none',
  },
})
