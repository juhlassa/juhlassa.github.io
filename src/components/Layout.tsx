import React, { useEffect, type FC } from 'react'
import { LayoutProps } from '../types'
import { navigation } from '../navigation'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { basicInfo } from '../util'

export const Layout: FC<LayoutProps> = ({
  pageTitle,
  content,
  description,
  mediaImage,
  track,
  footer
}) => {
  const [menuOpened, setMenuOpened] = React.useState(false)
  const trackPage = track && process.env.NODE_ENV !== 'development'
  const showFooter = footer !== false
  const router = useRouter()
  const {
    businessName,
    baseUrl,
    logo,
    address,
    areasServed,
    map,
    email,
    telephone,
    vatNumber,
    keywords,
    slogan,
    gtagId
  } = basicInfo
  const pageTitleWithSiteName = `${pageTitle} | ${businessName} / Seinäjoen seutu`
  const url = `${baseUrl}${router.pathname}${router.pathname.at(-1) === '/' ? '' : '/'}`

  useEffect(() => {
    if (!window.location.hash) {
      scrollTo(0, 0)
    }
  }, [])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: pageTitleWithSiteName,
    url,
    logo,
    image: mediaImage,
    description,
    areaServed: areasServed.join(', '),
    map,
    address,
    email,
    telephone,
    keywords,
    slogan,
    vatID: `FI${vatNumber.split('-')[0]}`
  }

  return (
    <>
      <Head>
        <title>{pageTitleWithSiteName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="robots"
          content={trackPage ? 'index, follow' : 'noindex, nofollow'}
        />
        <meta name="author" content="Pramiat Vadit" />
        <meta
          name="description"
          content={description ?? pageTitleWithSiteName}
        />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={pageTitleWithSiteName} />
        <meta
          property="og:description"
          content={description ?? pageTitleWithSiteName}
        />
        {mediaImage && (
          <meta property="og:image" content={`${baseUrl}${mediaImage}`} />
        )}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={url} />
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
      </Head>
      <div
        className="navigation"
        onClick={() =>
          menuOpened ? setMenuOpened(false) : window.location.assign('/')
        }
      >
        <div className="navigationContent"></div>
      </div>
      <div
        className="navigation-small sticky"
        onClick={() => setMenuOpened(false)}
      >
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
                  <a
                    key={item.route}
                    href={item.route}
                    className={
                      item.route.includes(router.route) && router.route !== '/'
                        ? 'item link selected'
                        : 'item link'
                    }
                  >
                    <span dangerouslySetInnerHTML={{ __html: item.name }} />
                  </a>
                )
            )}
          </div>
        </div>
      </div>

      <div className="container" onClick={() => setMenuOpened(false)}>
        <div className="content">
          <h1>{pageTitle}</h1>
          {content}
        </div>
        {showFooter && (
          <div className="footer">
            <span>
              Kysy lisää numerosta{' '}
              <a className="link" href={`tel:${telephone.replace(/\s/g, '')}`}>
                {telephone.replace(/\s/g, '\u00a0')}
              </a>
            </span>
            <span> tai sähköpostilla </span>
            <a className="link" href={`mailto:${email}`}>
              {email}
            </a>
            .
          </div>
        )}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
      {trackPage && (
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
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
  gtag('config', '${gtagId}');`
          }}
        />
      )}
    </>
  )
}
