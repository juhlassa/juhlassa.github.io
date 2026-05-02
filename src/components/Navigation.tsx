import React from 'react'
import { useRouter } from 'next/router'
import { PrivacyPolicyLink } from '../components/PrivacyPolicyLink'
import { navigation } from '../navigation'

export function Navigation({
  menuOpened,
  setMenuOpened
}: {
  menuOpened: boolean
  setMenuOpened: (opened: boolean) => void
}) {
  const router = useRouter()

  return (
    <>
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
            <PrivacyPolicyLink />
          </div>
        </div>
      </div>
    </>
  )
}
