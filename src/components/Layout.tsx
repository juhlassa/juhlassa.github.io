import React, { useEffect, type FC } from 'react'
import type { LayoutProps } from '../types.ts'
import { Link } from 'react-router'
import { navigation } from '../index.tsx'

export const Layout: FC<LayoutProps> = ({ pageTitle, content, footer }) => {
  const [menuOpened, setMenuOpened] = React.useState(false)
  const trackPage = false //track !== false && process.env.NODE_ENV === 'production'
  const showFooter = footer !== false

  useEffect(() => {
    document.title = `Pramiat vadit - ${pageTitle}`
  }, [])

  return (
    <>
      <div className="navigation" onClick={() => location.assign('#/')}>
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
                    to={item.route}
                    className={
                      item.name === pageTitle
                        ? 'item link selected'
                        : 'item link'
                    }
                  >
                    {item.name}
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
            src="https://www.googletagmanager.com/gtag/js?id=G-VYXNRYKDCQ"
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
  gtag('config', 'G-VYXNRYKDCQ');`
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
