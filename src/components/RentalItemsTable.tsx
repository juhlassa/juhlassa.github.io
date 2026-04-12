import { ContentImage } from './ContentImage'
import { type RentalItem } from '../types'
import { useEffect, useState } from 'react'

export function RentalItemsTable({
  rentalItems,
  gapBeforeList
}: {
  rentalItems: RentalItem[]
  gapBeforeList?: boolean
}) {
  const [showImage, setShowImage] = useState<string>('')

  function handleEscapeKey(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      setShowImage('')
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

      {showImage && (
        <div className="overlay" onClick={() => setShowImage('')}>
          <img className="popup-image" src={showImage} />
        </div>
      )}

      <table style={{ width: '100%' }}>
        <tbody>
          {rentalItems.map((item, index) => {
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
                  <b style={{ fontSize: '120%' }}>
                    <span dangerouslySetInnerHTML={{ __html: item.name }} />
                  </b>
                  {item.brand && (
                    <>
                      <br />
                      <span style={{ fontSize: '75%' }}>{item.brand}</span>
                    </>
                  )}
                  <br />
                  Saatavana {item.pcs} {item.unit ?? 'kpl'}
                  <br />
                  {item.price > 0 && (
                    <span>
                      Hinta{' '}
                      {item.price.toLocaleString('fi', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}{' '}
                      € / {item.unit ?? 'kpl'}
                    </span>
                  )}
                  {itemDetails && (
                    <span style={{ fontSize: '75%' }}>
                      <br />
                      {itemDetails}
                    </span>
                  )}
                  {item.description && (
                    <span style={{ fontSize: '75%' }}>
                      <br />
                      <span
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </span>
                  )}
                </td>
                <td>
                  {item.image && (
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={() => setShowImage(item.image!)}
                    >
                      <ContentImage
                        url={item.image}
                        maxWidth={'100%'}
                        float={'right'}
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
