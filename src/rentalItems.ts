import allRentalItems from './rental-items.json' with { type: 'json' }
import {
  Group,
  GroupedRentalItem,
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

// Linked items are left out, so each item appears once, with its own group
export const rentalItems: GroupedRentalItem[] = Object.entries(
  rentalItemsByGroup as Record<Group, RentalOrLinkedRentalItem[]>
).flatMap(([group, items]) =>
  items.filter(isRentalItem).map((item) => ({ ...item, group: group as Group }))
)

// Anchor of the item on its group page, or undefined if the name contains HTML
export function itemAnchor(name: string): string | undefined {
  return name.match(/<[^<]+>/)
    ? undefined
    : name
        .replace(/([,/()"“”]|&shy;|)/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/[\s-]+/g, '-')
        .toLowerCase()
}

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
