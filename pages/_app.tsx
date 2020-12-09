import './global.css'
import {appContext, AppContext} from '../app/appContext'
import {store} from '../app/store'
import {Provider as StoreProvider} from "react-redux";
import {ClientInitializer} from "../components/clientInitializer";

export default function App({Component, pageProps}) {
    return (
        <StoreProvider store={store}>
            <AppContext.Provider value={appContext}>
                <Component {...pageProps} />
            </AppContext.Provider>
        </StoreProvider>
    )
}
