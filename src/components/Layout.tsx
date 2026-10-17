import React, { useEffect, type FC } from 'react'
import { LayoutProps } from '../types'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { basicInfo, useEscKey } from '../util'
import { CookieBanner } from './CookieBanner'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import Script from 'next/script'
import { Icons } from './Icons'

export const Layout: FC<LayoutProps> = ({
  showHeader = true,
  pageTitle,
  content,
  description,
  mediaImage,
  track
}) => {
  const [menuOpened, setMenuOpened] = React.useState(false)
  useEscKey(() => setMenuOpened(false))
  const router = useRouter()
  const { businessName, baseUrl, keywords } = basicInfo
  const pageTitleWithSiteName = `${pageTitle} | ${businessName} / Seinäjoen seutu`
  const path = router.asPath.split(/[?#]/)[0]
  const url = `${baseUrl}${path}${path.at(-1) === '/' ? '' : '/'}`

  useEffect(() => {
    if (!window.location.hash) {
      scrollTo(0, 0)
    }
  }, [])

  useEffect(() => {
    const consent = localStorage.getItem(basicInfo.consentStateKey)
    if (window.gtag && track && consent === 'granted') {
      window.gtag('js', new Date())
      window.gtag('config', basicInfo.gtagId)
    }
  }, [track])

  return (
    <>
      <Head>
        <title>{pageTitleWithSiteName}</title>
        <link rel="canonical" href={url} />
        <MetaTags />
        <Icons />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(storeJsonLd()).replace(/</g, '\\u003c')
          }}
        />
      </Head>
      {track && <CookieBanner />}
      {showHeader && (
        <Navigation menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      )}

      <div className="container" onClick={() => setMenuOpened(false)}>
        <div className="content">
          <h1>{pageTitle}</h1>
          {content}
        </div>
        <Footer />
      </div>
      <Scripts />
    </>
  )

  function MetaTags() {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="robots"
          content={track ? 'index, follow' : 'noindex, nofollow'}
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
      </>
    )
  }

  function Scripts() {
    const { gtagId, consentStateKey } = basicInfo

    return (
      <>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
        />
        <Script
          id="gtag"
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  const consent = localStorage.getItem('${consentStateKey}');
  const consentGranted = consent === 'granted'
  gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: consentGranted ? 'granted' : 'denied',
    wait_for_update: 500
  });
  gtag('js', new Date());
  gtag('config', '${gtagId}', {send_page_view: consentGranted});`
          }}
        />
      </>
    )
  }
}

function storeJsonLd() {
  const {
    businessName,
    baseUrl,
    description,
    logo,
    address,
    areasServed,
    email,
    telephone,
    vatNumber,
    keywords,
    slogan
  } = basicInfo
  const { streetAddress, postalCode, addressLocality } = address
  return {
    '@context': 'https://schema.org',
    '@type': 'Store',
    '@id': `${baseUrl}/#store`,
    name: businessName,
    url: `${baseUrl}/`,
    description,
    logo: `${baseUrl}${logo}`,
    image: `${baseUrl}/kuvat/juhlapoyta.jpg`,
    address: { '@type': 'PostalAddress', ...address },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${streetAddress}, ${postalCode} ${addressLocality}`
    )}`,
    areaServed: areasServed,
    email,
    telephone: `+358${telephone.replace(/\s/g, '').replace(/^0/, '')}`,
    keywords,
    slogan,
    vatID: `FI${vatNumber.replace('-', '')}`
  }
}
