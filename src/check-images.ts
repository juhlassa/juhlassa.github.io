import { existsSync, statSync } from 'node:fs'
import { Group, RentalOrLinkedRentalItem } from './types'
import allRentalItems from './rental-items.json' with { type: 'json' }
import allInspirationItems from './inspiration-items.json' with { type: 'json' }

function imageCheck(
  title: string,
  items: { [group: string]: RentalOrLinkedRentalItem[] }
) {
  let problemsFound = 0
  for (const group of Object.keys(items)) {
    for (const item of items[group as Group]) {
      if ('image' in item && item.image) {
        const path = `./public${item.image}`
        if (!existsSync(path)) {
          console.info(`${item.image} not found (${title})`)
          problemsFound++
        } else {
          const stats = statSync(path)
          if (stats.size > 500000) {
            console.info(`${item.image} size exceeded (${stats.size})`)
            problemsFound++
          }
        }
      }
    }
  }
  console.info(`Problems found ${problemsFound} (${title})`)
  return problemsFound
}

const p1 = imageCheck('rental', allRentalItems)
const p2 = imageCheck('inspiration', allInspirationItems)
process.exit(p1 + p2 > 0 ? 1 : 0)
