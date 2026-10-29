import { useState } from 'react'
import { setFavouriteQuantity, useFavourites } from '../favourites'
import { formatPrice, humanReadableName, unitName } from '../util'
import type { RentalItem } from '../types'

export function QuantityInput({
  path,
  item,
  fixedQuantity
}: {
  path: string
  item: RentalItem
  fixedQuantity?: number
}) {
  const ownQuantity = useFavourites().find(
    (favourite) => favourite.path === path
  )?.quantity
  const quantity = fixedQuantity ?? ownQuantity ?? 1
  // What is being typed, until it is a valid quantity or the field is left
  const [draft, setDraft] = useState<string | null>(null)
  const max = item.pcs || undefined

  if (max === 1 || !item.price) {
    return null
  }

  function isValid(value: number) {
    return Number.isInteger(value) && value >= 1 && (!max || value <= max)
  }

  return (
    <div className="quantity">
      {fixedQuantity !== undefined ? (
        <div>
          Määrä {quantity} {unitName(item.unit, quantity)}
        </div>
      ) : (
        <label>
          Määrä{' '}
          <input
            type="number"
            inputMode="numeric"
            min={1}
            max={max}
            step={1}
            value={draft ?? quantity}
            aria-label={`Määrä: ${humanReadableName(item.name)}`}
            onChange={(e) => {
              setDraft(e.target.value)
              const value = Number(e.target.value)
              if (e.target.value !== '' && isValid(value)) {
                setFavouriteQuantity(path, value)
              }
            }}
            onBlur={() => {
              // Too big or small a number is changed to the nearest allowed
              const value = Math.round(Number(draft))
              if (draft && Number.isFinite(value)) {
                setFavouriteQuantity(
                  path,
                  Math.max(1, Math.min(value, max ?? value))
                )
              }
              setDraft(null)
            }}
          />{' '}
          {unitName(item.unit, quantity)}
        </label>
      )}
      <div className="small-text">
        Yhteensä {formatPrice(item.price * quantity)} €
      </div>
    </div>
  )
}
