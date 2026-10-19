import { useState } from 'react'
import { trackEvent } from '../util'

// Shares the item's own page, whose link preview shows the item's image.
// Uses the device's share menu when there is one, otherwise copies the link.
export function ShareButton({ path, name }: { path: string; name: string }) {
  const [message, setMessage] = useState('')

  function showMessage(text: string) {
    setMessage(text)
    setTimeout(() => setMessage(''), 2000)
  }

  async function share() {
    const url = `${window.location.origin}${path}`
    if (navigator.share) {
      try {
        await navigator.share({ title: name, url })
        trackEvent('share', { path })
        showMessage('jaettu')
      } catch {
        // Closing the share menu rejects too
        showMessage('ei jaettu')
      }
      return
    }
    await navigator.clipboard.writeText(url)
    trackEvent('copy', { path })
    showMessage('kopioitu')
  }

  return (
    <div>
      <button
        type="button"
        className="secondary small"
        onClick={share}
        aria-live="polite"
        disabled={!!message}
      >
        Jaa
      </button>
      {!!message && <span className="message small-text">{message}</span>}
    </div>
  )
}
