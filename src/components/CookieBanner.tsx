'use client'
import { useState, useSyncExternalStore } from 'react'
import { basicInfo } from '../util'

const subscribe = () => () => {}
const hasStoredConsent = () =>
  localStorage.getItem(basicInfo.consentStateKey) !== null
// On the server and during hydration the banner is hidden
const hasStoredConsentOnServer = () => true

export function CookieBanner() {
  const [accepted, setAccepted] = useState(false)
  const storedConsent = useSyncExternalStore(
    subscribe,
    hasStoredConsent,
    hasStoredConsentOnServer
  )

  if (storedConsent || accepted) return null

  const accept = () => {
    localStorage.setItem(basicInfo.consentStateKey, 'granted')

    window.gtag('consent', 'update', {
      analytics_storage: 'granted'
    })
    setAccepted(true)
  }

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
