import type { AppProps } from 'next/app'
import '@fontsource/varela-round/index.css'
import '../assets/styles.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
