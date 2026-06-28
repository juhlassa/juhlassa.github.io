import allRentalItems from './rental-items.json'
import {
  Group,
  LinkedRentalItem,
  RentalItem,
  RentalOrLinkedRentalItem
} from './types'

const rentalItemsByGroup = allRentalItems satisfies Record<
  Group,
  RentalOrLinkedRentalItem[]
>

const rentalOrLinkedItems: RentalOrLinkedRentalItem[] =
  Object.values(rentalItemsByGroup).flat()

export const rentalItems = rentalOrLinkedItems.filter((item) =>
  isRentalItem(item)
)

function isLinkedItem(
  item: RentalOrLinkedRentalItem
): item is LinkedRentalItem {
  return 'linked' in item
}

function isRentalItem(item: RentalOrLinkedRentalItem): item is RentalItem {
  return !isLinkedItem(item)
}

function findLinkedItem(item: LinkedRentalItem): RentalItem {
  const rentalItem = rentalOrLinkedItems.find(
    (linkedItem) => isRentalItem(linkedItem) && linkedItem.id === item.linked
  )
  if (!rentalItem || isLinkedItem(rentalItem)) {
    throw new Error(`Linked item not found: ${item.linked}`)
  }
  return rentalItem
}

export const allRentalItemsByGroup = Object.entries(rentalItemsByGroup).reduce(
  (acc, [group, items]) => {
    const groupItems = {
      [group]: items.map((item) =>
        isLinkedItem(item) ? findLinkedItem(item) : (item as RentalItem)
      )
    }
    return { ...acc, ...groupItems }
  },
  {} as Record<Group, RentalItem[]>
)
