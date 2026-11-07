import { Html, Head, Main, NextScript } from 'next/document'
import { hideFavouritesHintScript } from '../components/FavouritesHint'

export default function Document() {
  return (
    <Html lang="fi">
      <Head>
        <script
          dangerouslySetInnerHTML={{ __html: hideFavouritesHintScript }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
