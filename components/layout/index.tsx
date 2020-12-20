import styles from './layout.module.css'
import { Notification } from '../notification'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      {children}
      <Notification />
    </div>
  )
}
