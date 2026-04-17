import type { AppProps } from 'next/app'
import '@fontsource/varela-round/index.css'
import '../assets/styles.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <html lang="fi">
      <body>
        <Component {...pageProps} />
      </body>
    </html>
  )
}

export default App
