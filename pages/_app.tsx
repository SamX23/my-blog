import { AppProps } from 'next/app'
import AppProvider from '../components/AppProvider/AppProvider'
import '../styles/global.css'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}