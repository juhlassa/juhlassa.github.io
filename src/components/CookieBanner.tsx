'use client'
import { useState, useEffect } from 'react'
import { basicInfo } from '../util'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(basicInfo.consentStateKey)
    if (!consent) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(basicInfo.consentStateKey, 'granted')

    window.gtag('consent', 'update', {
      analytics_storage: 'granted'
    })
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="overlay">
      <div className="popup">
        <h1>Tämä sivusto käyttää evästeitä</h1>
        <p>
          Tietoja käytetään sivuston käytön analysointiin ja palvelun
          kehittämiseen.
        </p>
        <button className="primary" onClick={accept}>
          Hyväksy
        </button>{' '}
        <button
          className="secondary"
          onClick={() => window.location.assign('/tietosuojaseloste/')}
        >
          Lisätietoja
        </button>
      </div>
    </div>
  )
}
