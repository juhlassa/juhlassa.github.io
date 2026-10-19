import Head from 'next/head'
import { Layout } from './Layout'
import { LeftContentImage } from './ContentImage'
import type { ItemPage } from '../itemPages'
import { plainText } from '../util.ts'

// Link previews read this page's tags without running scripts, while
// visitors are sent straight on to the item on its group page
const ItemPageTemplate = ({ name, description, image, target }: ItemPage) => {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `location.replace(${JSON.stringify(target).replace(/</g, '\\u003c')})`
          }}
        />
      </Head>
      <Layout
        pageTitle={name}
        description={plainText(description)}
        mediaImage={image}
        track={false}
        content={
          <>
            {image && (
              <LeftContentImage className="size-xl" url={image} alt={name} />
            )}
            <p>
              <a className="link underlined" href={target}>
                Siirry tuotteeseen
              </a>
            </p>
          </>
        }
      />
    </>
  )
}

export default ItemPageTemplate
