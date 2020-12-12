import './global.css'
import { appContext, AppContext } from '../app/appContext'

export default function App({ Component, pageProps }) {
  return (
    <AppContext.Provider value={appContext}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
