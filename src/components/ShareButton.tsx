import { useState } from 'react'
import { trackEvent } from '../util'

// Shares the content with the device's share menu when there is one,
// otherwise, or when only copying, copies the text
export function ShareButton({
  label,
  share
}: {
  label: string
  share: () => {
    data: ShareData
    copyText: string
    params?: Record<string, unknown>
  }
}) {
  const [message, setMessage] = useState('')

  function showMessage(text: string) {
    setMessage(text)
    setTimeout(() => setMessage(''), 2000)
  }

  async function onClick() {
    const { data, copyText, params } = share()
    if (navigator.share) {
      try {
        await navigator.share(data)
        trackEvent('share', params)
        showMessage('jaettu')
      } catch {
        // Closing the share menu rejects too
        showMessage('ei jaettu')
      }
      return
    }
    await navigator.clipboard.writeText(copyText)
    trackEvent('copy', params)
    showMessage('kopioitu leikepöydälle')
  }

  return (
    <div className="sharing">
      <button
        type="button"
        className="secondary small"
        onClick={onClick}
        aria-live="polite"
        disabled={!!message}
      >
        {label}
      </button>
      {!!message && <span className="message small-text">{message}</span>}
    </div>
  )
}
