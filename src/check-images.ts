import { existsSync, statSync } from 'node:fs'
import type { Group, RentalOrLinkedRentalItem } from './types.ts'
import allRentalItems from './rental-items.json' with { type: 'json' }
import allInspirationItems from './inspiration-items.json' with { type: 'json' }
import { inspirationPages } from './inspirationPages.ts'
import { categoryPages } from './categoryPages.ts'

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
const mediaImages = (pages: Record<string, { mediaImage: string }>) =>
  Object.fromEntries(
    Object.entries(pages).map(([slug, page]) => [
      slug,
      [{ image: page.mediaImage } as RentalOrLinkedRentalItem]
    ])
  )
const p3 = imageCheck('inspiration pages', mediaImages(inspirationPages))
const p4 = imageCheck('category pages', mediaImages(categoryPages))
process.exit(p1 + p2 + p3 + p4 > 0 ? 1 : 0)
