import { RightContentImage } from './ContentImage'
import { allInspirationItemsByGroup } from '../inspirationItems'
import { useState } from 'react'
import type { RentalItem } from '../types'
import { humanReadableName, trackEvent, useEscKey } from '../util'

export function InspirationItemsTable({
  group
}: {
  group: string
  gapBeforeList?: boolean
}) {
  const [showItem, setShowItem] = useState<RentalItem | null>(null)
  const inspirationItems = allInspirationItemsByGroup(group)

  useEscKey(() => setShowItem(null))

  return (
    <>
      {showItem && (
        <div className="overlay" onClick={() => setShowItem(null)}>
          <img
            className="popup popup-image"
            alt={showItem.name}
            src={showItem.image}
          />
        </div>
      )}
      <div className="inspiration-close">
        <a className="link underlined" href="#" onClick={() => window.close()}>
          Sulje
        </a>
      </div>
      <div>
        {inspirationItems.map((item) => (
          <div key={item.name} className="inspiration-item">
            <h2>{item.name}</h2>
            {item.image && (
              <span
                className="rental-item-image"
                onClick={() => {
                  trackEvent('zoom', {
                    group,
                    name: humanReadableName(item.name)
                  })
                  setShowItem(item)
                }}
              >
                <RightContentImage className="size-xl" url={item.image} />
              </span>
            )}
            {item.inspiration && (
              <div dangerouslySetInnerHTML={{ __html: item.inspiration }} />
            )}
            {item.description && (
              <div
                className="rental-item-small-text"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            )}
          </div>
        ))}
      </div>
    </>
  )
}
