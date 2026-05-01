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

const rentalItems: RentalOrLinkedRentalItem[] =
  Object.values(rentalItemsByGroup).flat()

function isRentalItem(item: RentalOrLinkedRentalItem): item is RentalItem {
  return 'id' in item
}

function isLinkedItem(
  item: RentalOrLinkedRentalItem
): item is LinkedRentalItem {
  return 'linked' in item
}

function findLinkedItem(item: LinkedRentalItem): RentalItem {
  const rentalItem = rentalItems.find(
    (linkedItem) => isRentalItem(linkedItem) && linkedItem.id === item.linked
  )
  if (!rentalItem || isLinkedItem(rentalItem)) {
    throw new Error(`Linked item not found: ${item.linked}`)
  }
  return rentalItem
}

export const allRentalItemsByGroup = Object.entries(rentalItemsByGroup).reduce(
  (acc, [group, items]) => {
    const t = {
      [group]: items.map((item) =>
        isLinkedItem(item) ? findLinkedItem(item) : (item as RentalItem)
      )
    }
    return { ...acc, ...t }
  },
  {} as Record<Group, RentalItem[]>
)
