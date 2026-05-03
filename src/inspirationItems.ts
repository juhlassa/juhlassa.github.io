import allInspirationItems from './inspiration-items.json'
import { RentalItem } from './types'

const inspirationItemsByGroup = allInspirationItems as Record<
  string,
  RentalItem[]
>

export function allInspirationItemsByGroup(group: string): RentalItem[] {
  return inspirationItemsByGroup[group] ?? []
}
