import { RightContentImage } from './ContentImage'
import { ZoomedImage } from './ZoomedImage'
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
        <ZoomedImage
          name={showItem.name}
          image={showItem.image}
          onClose={() => setShowItem(null)}
        />
      )}
      <div className="inspiration-close">
        <a className="link underlined" href="#" onClick={() => window.close()}>
          Sulje
        </a>
      </div>
      <div>
        {inspirationItems.map((item, index) => (
          <div key={item.name || index} className="inspiration-item">
            <h2>{item.name}</h2>
            {item.image && (
              <span className="rental-item-image">
                <RightContentImage
                  className="size-xl"
                  url={item.image}
                  alt={item.name}
                  onActivate={() => {
                    trackEvent('zoom', {
                      group,
                      name: humanReadableName(item.name)
                    })
                    setShowItem(item)
                  }}
                />
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
