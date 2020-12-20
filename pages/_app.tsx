import './global.css'
import { appContext, AppContext } from '../app/appContext'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AppContext.Provider value={appContext}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </RecoilRoot>
  )
}
