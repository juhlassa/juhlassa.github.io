import React, { useEffect, type FC } from 'react'
import { LayoutProps } from '../types'
import Link from 'next/link'
import { navigation } from '../navigation'
import Head from 'next/head'

export const Layout: FC<LayoutProps> = ({
  pageTitle,
  content,
  track,
  footer
}) => {
  const [menuOpened, setMenuOpened] = React.useState(false)
  const trackPage = !!track && process.env.NODE_ENV !== 'development'
  const showFooter = footer !== false

  useEffect(() => {
    if (!window.location.hash) {
      scrollTo(0, 0)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{`Pramiat vadit - ${pageTitle}`}</title>
        <meta charSet="UTF-8" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="navigation" onClick={() => window.location.assign('/')}>
        <div className="navigationContent"></div>
      </div>
      <div className="navigation-small sticky">
        <div className="navigationContent">
          <div
            className="menu"
            onClick={(e) => {
              setMenuOpened(!menuOpened)
              e.stopPropagation()
            }}
          >
            &#9776;
          </div>
          <div
            className={`menuItems ${menuOpened ? 'menuOpen' : 'menuClosed'}`}
          >
            {navigation.map(
              (item) =>
                !item.tableset && (
                  <Link
                    key={item.route}
                    href={item.route}
                    className={
                      item.name === pageTitle
                        ? 'item link selected'
                        : 'item link'
                    }
                  >
                    <span dangerouslySetInnerHTML={{ __html: item.name }} />
                  </Link>
                )
            )}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <h1>{pageTitle}</h1>
          {content}
        </div>
        {trackPage && (
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-Y0E9FK86YP"
          />
        )}
        {trackPage && (
          <script
            id="gtag"
            dangerouslySetInnerHTML={{
              __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-Y0E9FK86YP');`
            }}
          />
        )}
        {showFooter && (
          <div className="footer">
            <span>
              Kysy lisää numerosta{' '}
              <a className="link" href="tel:0405242071">
                040&nbsp;524&nbsp;2071
              </a>{' '}
            </span>
            <span> tai sähköpostilla </span>
            <a className="link" href="mailto:pramiatvadit@gmail.com">
              pramiatvadit@gmail.com
            </a>
            .
          </div>
        )}
      </div>
    </>
  )
}
