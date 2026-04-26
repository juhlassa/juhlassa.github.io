import { RightContentImage } from './ContentImage'
import { type RentalItem } from '../types'
import { useEffect, useState } from 'react'

export function RentalItemsTable({
  rentalItems,
  gapBeforeList
}: {
  rentalItems: RentalItem[]
  gapBeforeList?: boolean
}) {
  const [showItem, setShowItem] = useState<RentalItem | null>(null)

  function handleEscapeKey(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      setShowItem(null)
    }
  }

  useEffect(() => {
    addEventListener('keydown', handleEscapeKey)
    return () => {
      removeEventListener('keydown', handleEscapeKey)
    }
  }, [])

  return (
    <>
      {gapBeforeList && (
        <>
          <p>{'\u00a0'}</p>
          <p>{'\u00a0'}</p>
        </>
      )}

      {showItem && (
        <div className="overlay" onClick={() => setShowItem(null)}>
          <img
            className="popup-image"
            alt={showItem.name}
            src={showItem.image}
          />
        </div>
      )}

      <table style={{ width: '100%' }}>
        <tbody>
          {rentalItems.map((item, index) => {
            const itemNameHash = item.name.match(/<[^<]+>/)
              ? undefined
              : item.name
                  .replace(/(,|&shy;|\/)/g, '')
                  .replace(/&nbsp;/g, ' ')
                  .replace(/[\s-]+/g, '-')
                  .toLowerCase()
            const itemDetails = [
              details('materiaali', item.material),
              details('leveys', item.width, 'cm'),
              details('pituus', item.length, 'cm'),
              details('korkeus', item.height, 'cm'),
              details('halkaisija', item.diameter, 'cm'),
              details('tilavuus', item.volume, 'l')
            ]
              .filter(Boolean)
              .join(', ')
            return (
              <tr key={index}>
                <td>
                  <div
                    className="anchor"
                    id={itemNameHash}
                    dangerouslySetInnerHTML={{ __html: item.name }}
                    onClick={() =>
                      itemNameHash
                        ? (window.location.hash = itemNameHash)
                        : undefined
                    }
                  />
                  {item.brand && (
                    <>
                      <div style={{ fontSize: '75%' }}>{item.brand}</div>
                    </>
                  )}
                  {item.pcs > 0 && (
                    <div>
                      Saatavana {item.pcs} {item.unit ?? 'kpl'}
                    </div>
                  )}
                  {item.price > 0 && (
                    <div>
                      Hinta{' '}
                      {item.price.toLocaleString('fi', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}{' '}
                      € / {item.unit ?? 'kpl'}
                    </div>
                  )}
                  {itemDetails && (
                    <div
                      style={{ fontSize: '75%' }}
                      dangerouslySetInnerHTML={{ __html: itemDetails }}
                    />
                  )}
                  {item.description && (
                    <div
                      style={{ fontSize: '75%' }}
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  )}
                </td>
                <td>
                  {item.image && (
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => setShowItem(item)}
                    >
                      <RightContentImage
                        url={item.image}
                        alt={item.name}
                        loading="lazy"
                        styles={{ maxWidth: '100%' }}
                      />
                    </span>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

function details(text: string, value?: string | number, unit: string = '') {
  return value === undefined
    ? undefined
    : `${text}:\u00a0${value}${unit ? `\u00a0${unit}` : ''}`
}
