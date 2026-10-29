import { RightContentImage } from './ContentImage'
import { ZoomedImage } from './ZoomedImage'
import { Group, type GroupedRentalItem, type RentalItem } from '../types'
import { useState } from 'react'
import { allRentalItemsByGroup, itemAnchor } from '../rentalItems'
import { groupPages } from '../navigation'
import { itemPagePath } from '../itemPages'
import { ShareButton } from './ShareButton'
import { FavouriteButton } from './FavouriteButton'
import { QuantityInput } from './QuantityInput'
import { favouritePath } from '../favourites'
import {
  formatPrice,
  humanReadableName,
  trackEvent,
  unitName,
  useEscKey
} from '../util'

export function RentalItemsTable({
  group,
  itemList,
  gapBeforeList,
  shareable = true,
  quantities = false,
  fixedQuantities
}: {
  group?: Group
  itemList?: GroupedRentalItem[]
  gapBeforeList?: boolean
  shareable?: boolean
  quantities?: boolean
  fixedQuantities?: Record<string, number>
}) {
  const [showItem, setShowItem] = useState<RentalItem | null>(null)
  const rentalItems: (RentalItem | GroupedRentalItem)[] = group
    ? allRentalItemsByGroup[group]
    : (itemList ?? [])

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

      <table className={`rental-items ${gapBeforeList ? 'gap-before' : ''}`}>
        <tbody>
          {rentalItems.map((item, index) => {
            // On a group page the name links to itself; in search results
            // it links to the item on its group page
            const anchor = itemAnchor(item.name)
            const itemLink = !anchor
              ? undefined
              : group
                ? `#${anchor}`
                : 'group' in item
                  ? `${groupPages[item.group]}#${anchor}`
                  : undefined
            const itemGroup =
              group ?? ('group' in item ? item.group : undefined)
            const sharePath = itemGroup && itemPagePath(itemGroup, item.name)
            const favourite = favouritePath(item.name)
            const itemDetails = [
              details('materiaali', item.material),
              details('leveys', item.width, 'cm'),
              details('pituus', item.length, 'cm'),
              details('korkeus', item.height, 'cm'),
              details('halkaisija', item.diameter, 'cm'),
              details('tilavuus', item.volume, 'l')
            ]
              .filter(Boolean)
              .join(' ')
            return (
              <tr key={index}>
                <td>
                  <div className="anchor" id={group ? anchor : undefined}>
                    {itemLink ? (
                      <a
                        href={itemLink}
                        dangerouslySetInnerHTML={{ __html: item.name }}
                      />
                    ) : (
                      <span dangerouslySetInnerHTML={{ __html: item.name }} />
                    )}
                    {favourite && !item.image && (
                      <FavouriteButton
                        path={favourite}
                        name={humanReadableName(item.name)!}
                      />
                    )}
                  </div>
                  {item.brand && !item.hideBrand && (
                    <div className="small-text">{item.brand}</div>
                  )}
                  {item.pcs !== undefined && item.pcs > 0 && (
                    <div>
                      Saatavana {item.pcs} {unitName(item.unit, item.pcs)}
                    </div>
                  )}
                  {item.price !== undefined && item.price > 0 && (
                    <div>
                      Hinta {formatPrice(item.price)} € /{' '}
                      {unitName(item.unit, 1)}
                    </div>
                  )}
                  {(quantities || fixedQuantities) && favourite && (
                    <QuantityInput
                      path={favourite}
                      item={item}
                      fixedQuantity={fixedQuantities?.[favourite]}
                    />
                  )}
                  {itemDetails && (
                    <div
                      className="small-text"
                      dangerouslySetInnerHTML={{ __html: itemDetails }}
                    />
                  )}
                  {item.description && (
                    <div
                      className="small-text"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  )}
                  {item.inspiration && (
                    <div>
                      <a
                        className="item link underlined"
                        href={item.inspiration}
                        target="_blank"
                      >
                        {item.inspirationLinkText
                          ? item.inspirationLinkText
                          : 'Katso vinkki!'}
                      </a>
                    </div>
                  )}
                  {shareable && sharePath && (
                    <ShareButton
                      path={sharePath}
                      name={humanReadableName(item.name)!}
                    />
                  )}
                </td>
                <td>
                  {item.image && (
                    <span className="rental-item-image">
                      <RightContentImage
                        className="rental-item-image"
                        url={item.image}
                        alt={item.name}
                        loading="lazy"
                        onActivate={() => {
                          trackEvent('zoom', {
                            group,
                            name: humanReadableName(item.name)
                          })
                          setShowItem(item)
                        }}
                      />
                      {/* Beside the image, not in it, so that it doesn't zoom */}
                      {favourite && (
                        <FavouriteButton
                          path={favourite}
                          name={humanReadableName(item.name)!}
                        />
                      )}
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

function details(
  text: string,
  value?: string | number,
  unit: string = '',
  bullet: boolean = true
) {
  return value === undefined
    ? undefined
    : `${bullet ? '●\u00a0' : ''}${text}:\u00a0${value}${unit ? `\u00a0${unit}` : ''}`
}
