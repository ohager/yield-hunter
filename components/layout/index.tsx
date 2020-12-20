import styles from './layout.module.css'
import { Notification } from '../notification'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      {children}
      <div className="absolute top-2 left-1/4 w-1/2 z-50">
        <Notification />
      </div>
    </div>
  )
}
