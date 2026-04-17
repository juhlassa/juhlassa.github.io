import {
  LinkedRentalItem,
  RentalItem,
  RentalOrLinkedRentalItem
} from '../types'
import { vanilja } from '../rentalItems/vanilja'
import { greenGate } from '../rentalItems/greengate'
import { glasses } from '../rentalItems/glasses'
import { tableClothings } from '../rentalItems/tableClothings'
import { other } from '../rentalItems/other'
import { serving } from '../rentalItems/serving'
import { decorating } from '../rentalItems/decorating'

const allRentalItems = vanilja()
  .concat(greenGate())
  .concat(serving())
  .concat(glasses())
  .concat(decorating())
  .concat(tableClothings())
  .concat(other())

function isLinkedItem(
  item: RentalOrLinkedRentalItem
): item is LinkedRentalItem {
  return 'linked' in item
}

function isRentalItem(item: RentalOrLinkedRentalItem): item is RentalItem {
  return 'id' in item
}

export function rentalItemsResolved(
  rentalItems: RentalOrLinkedRentalItem[]
): RentalItem[] {
  return rentalItems
    .map((item) => {
      if (isLinkedItem(item)) {
        return allRentalItems.find(
          (linkedItem) =>
            isRentalItem(linkedItem) && linkedItem.id === item.linked
        )
      }
      return item
    })
    .filter((item): item is RentalItem => Boolean(item))
}
