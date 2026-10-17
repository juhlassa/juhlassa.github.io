import type { KeyboardEvent } from 'react'
import { humanReadableName } from '../util'

type ContentImageProps = {
  url: string
  alt?: string
  loading?: 'lazy' | 'eager'
  className?: string
  // Makes the image act as a button (click, Enter or Space)
  onActivate?: () => void
}

function activateProps(alt: string, onActivate?: () => void) {
  if (!onActivate) {
    return {}
  }
  return {
    role: 'button',
    tabIndex: 0,
    'aria-label': `Suurenna kuva: ${alt}`,
    onClick: onActivate,
    onKeyDown: (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onActivate()
      }
    }
  }
}

export const LeftContentImage = ({
  url,
  alt,
  loading,
  className,
  onActivate
}: ContentImageProps) => {
  const altText = humanReadableName(alt) ?? url
  return (
    <img
      className={`${className} content-image float-left`}
      src={url}
      alt={altText}
      loading={loading}
      {...activateProps(altText, onActivate)}
    />
  )
}

export const RightContentImage = ({
  url,
  alt,
  loading,
  className,
  onActivate
}: ContentImageProps) => {
  const altText = humanReadableName(alt) ?? url
  return (
    <img
      className={`content-image float-right ${className ?? ''}`}
      src={url}
      alt={altText}
      loading={loading}
      {...activateProps(altText, onActivate)}
    />
  )
}
