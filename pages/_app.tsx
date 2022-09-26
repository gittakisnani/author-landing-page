import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  typeof document !== "undefined" && document.documentElement.setAttribute('lang', 'en');
  return <Component {...pageProps} />
}

export default MyApp
