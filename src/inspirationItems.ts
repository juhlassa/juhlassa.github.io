import allInspirationItems from './inspiration-items.json' with { type: 'json' }
import { RentalItem } from './types'

const inspirationItemsByGroup = allInspirationItems as Record<
  string,
  RentalItem[]
>

export function allInspirationItemsByGroup(group: string): RentalItem[] {
  return inspirationItemsByGroup[group] ?? []
}

// The first inspiration image, shown in link previews of the page
export function inspirationMediaImage(group: string): string | undefined {
  return allInspirationItemsByGroup(group).find((item) => item.image)?.image
}
