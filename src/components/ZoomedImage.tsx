import { useEffect, useRef } from 'react'
import { humanReadableName } from '../util'

export function ZoomedImage({
  name,
  image,
  onClose
}: {
  name: string
  image?: string
  onClose: () => void
}) {
  const overlay = useRef<HTMLDivElement>(null)

  // Move focus into the overlay, and back to whatever opened it on close
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null
    overlay.current?.focus()
    return () => opener?.focus()
  }, [])

  return (
    <div
      ref={overlay}
      className="overlay"
      role="dialog"
      aria-modal="true"
      aria-label={humanReadableName(name)}
      tabIndex={-1}
      onClick={onClose}
    >
      <img
        className="popup popup-image"
        alt={humanReadableName(name)}
        src={image}
      />
    </div>
  )
}
