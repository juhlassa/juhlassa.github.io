import { useSyncExternalStore } from 'react'

const storageKey = 'favourites-hint-hidden'
const changeEvent = 'favourites-hint-change'

export const hideFavouritesHintScript = `try{if(localStorage.getItem(${JSON.stringify(storageKey)})==='true')document.documentElement.classList.add('favourites-hint-hidden')}catch(e){}`

function isHidden() {
  try {
    return localStorage.getItem(storageKey) === 'true'
  } catch {
    // Storage can be blocked
    return false
  }
}

function hide() {
  try {
    localStorage.setItem(storageKey, 'true')
  } catch {
    // Storage can be blocked
  }
  dispatchEvent(new Event(changeEvent))
}

function subscribe(onChange: () => void) {
  // Other tabs change the storage too
  addEventListener('storage', onChange)
  addEventListener(changeEvent, onChange)
  return () => {
    removeEventListener('storage', onChange)
    removeEventListener(changeEvent, onChange)
  }
}

// Shown until the visitor hides it, also on later visits
export function FavouritesHint() {
  const hidden = useSyncExternalStore(subscribe, isHidden, () => false)
  if (hidden) {
    return null
  }
  return (
    <div className="hint favourites-hint">
      <p>
        Huom! Voit lisätä tuotteen keräilykoriin tai poistaa sen sieltä
        klikkaamalla tuotekuvassa olevaa sydäntä. Kaikki keräilykoriin valitut
        tuotteet näet valikon sydämestä.
      </p>
      <button type="button" className="secondary small" onClick={hide}>
        Älä näytä tätä ohjetta
      </button>
    </div>
  )
}
