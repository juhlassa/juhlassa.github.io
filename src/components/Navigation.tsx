import React from 'react'
import { useRouter } from 'next/router'
import { PrivacyPolicyLink } from '../components/PrivacyPolicyLink'
import { navigation } from '../navigation'
import { useFavourites } from '../favourites'
import { HeartIcon } from './HeartIcon'

export function Navigation({
  menuOpened,
  setMenuOpened
}: {
  menuOpened: boolean
  setMenuOpened: (opened: boolean) => void
}) {
  const router = useRouter()
  const path = router.asPath.split(/[?#]/)[0]
  const favouriteCount = useFavourites().length

  return (
    <>
      <a
        className="navigation"
        href="/"
        aria-label="Pramiat vadit – etusivu"
        onClick={(e) => {
          if (menuOpened) {
            e.preventDefault()
            setMenuOpened(false)
          }
        }}
      >
        <div className="navigationContent"></div>
      </a>
      <div
        className="navigation-small sticky"
        onClick={() => setMenuOpened(false)}
      >
        <div className="navigationContent">
          <button
            type="button"
            className="menu"
            aria-label="Valikko"
            aria-expanded={menuOpened}
            aria-controls="menu-items"
            onClick={(e) => {
              setMenuOpened(!menuOpened)
              e.stopPropagation()
            }}
          >
            &#9776;
          </button>
          <div
            id="menu-items"
            className={`menuItems ${menuOpened ? 'menuOpen' : 'menuClosed'}`}
          >
            {navigation.map(
              (item) =>
                !item.tableset && (
                  <a
                    key={item.route}
                    href={item.route}
                    className={
                      item.route.includes(path) && path !== '/'
                        ? 'item link selected'
                        : 'item link'
                    }
                  >
                    <span dangerouslySetInnerHTML={{ __html: item.name }} />
                  </a>
                )
            )}
            <a href="/etsi/">
              <img className="search" alt="Etsi" src="/kuvat/search.svg" />
            </a>
            <a
              href="/suosikit/"
              className="favourites-link"
              aria-label={`Suosikit (${favouriteCount})`}
            >
              <HeartIcon />
              {favouriteCount > 0 && <span> {favouriteCount}</span>}
            </a>
            <PrivacyPolicyLink />
          </div>
        </div>
      </div>
    </>
  )
}
