import { RightContentImage } from './ContentImage'
import { Group, type RentalItem } from '../types'
import { useEffect, useState } from 'react'
import { allRentalItemsByGroup } from '../rentalItems'

export function RentalItemsTable({
  group,
  gapBeforeList
}: {
  group: Group
  gapBeforeList?: boolean
}) {
  const [showItem, setShowItem] = useState<RentalItem | null>(null)
  const rentalItems = allRentalItemsByGroup[group]

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
      {showItem && (
        <div className="overlay" onClick={() => setShowItem(null)}>
          <img
            className="popup-image"
            alt={showItem.name}
            src={showItem.image}
          />
        </div>
      )}

      <table className={`rental-items ${gapBeforeList ? 'gap-before' : ''}`}>
        <tbody>
          {rentalItems.map((item, index) => {
            const itemNameHash = item.name.match(/<[^<]+>/)
              ? undefined
              : item.name
                  .replace(/([,/()]|&shy;|)/g, '')
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
                      <div className="rental-item-small-text">{item.brand}</div>
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
                      className="rental-item-small-text"
                      dangerouslySetInnerHTML={{ __html: itemDetails }}
                    />
                  )}
                  {item.description && (
                    <div
                      className="rental-item-small-text"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  )}
                </td>
                <td>
                  {item.image && (
                    <span
                      className="rental-item-image"
                      onClick={() => setShowItem(item)}
                    >
                      <RightContentImage
                        className="rental-item-image"
                        url={item.image}
                        alt={item.name}
                        loading="lazy"
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
