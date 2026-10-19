import { allRentalItemsByGroup, itemAnchor } from './rentalItems'
import { groupPages } from './navigation'
import { humanReadableName } from './util'
import type { Group } from './types'

// A page for sharing a single item: link previews get the item's own image and
// name, and visitors are sent on to the item on its group page
export type ItemPage = {
  name: string
  description?: string
  image?: string
  target: string
}

// Path of the item's share page, e.g. /tarjoilu/kannu/
export function itemPagePath(group: Group, name: string): string | undefined {
  const anchor = itemAnchor(name)
  return anchor && `${groupPages[group]}${anchor}/`
}

// Keys are paths. Linked items get a page on each group page they appear on,
// and of items sharing a name only the first one, which the anchor finds.
export const itemPages: Record<string, ItemPage> = {}
for (const [group, items] of Object.entries(allRentalItemsByGroup)) {
  for (const item of items) {
    const path = itemPagePath(group as Group, item.name)
    if (!path || itemPages[path]) {
      continue
    }
    const description = plainText(item.description)
    itemPages[path] = {
      name: humanReadableName(item.name)!,
      // Page props can't contain undefined
      ...(description && { description }),
      ...(item.image && { image: item.image }),
      target: `${groupPages[group as Group]}#${itemAnchor(item.name)}`
    }
  }
}

// Paths of the share pages under a group page path, split into segments
export function itemPageParams(groupPath: string) {
  return Object.keys(itemPages)
    .filter((path) => path.startsWith(groupPath))
    .map((path) => path.split('/').filter(Boolean))
}

function plainText(html?: string) {
  return humanReadableName(html?.replace(/<[^>]+>/g, ''))
}
