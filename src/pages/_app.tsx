import type { AppProps } from 'next/app'
import '@styles/global.css'
import { Provider } from 'react-redux'
import { store } from 'store/store'
 
const App = ({ Component, pageProps }: AppProps) => {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default App