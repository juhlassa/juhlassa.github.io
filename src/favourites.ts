import { useSyncExternalStore } from 'react'
import { rentalItems } from './rentalItems'
import { itemPagePath } from './itemPages'
import type { GroupedRentalItem } from './types'

const storageKey = 'favourites'
const changeEvent = 'favourites-change'

// Favourites are kept as the items' share page paths. A linked item uses the
// path of its own group, so it is the same favourite on every group page.
export const favouriteItemsByPath = new Map<string, GroupedRentalItem>()
const favouritePathsByName = new Map<string, string>()
for (const item of rentalItems) {
  const path = itemPagePath(item.group, item.name)
  if (path && !favouritePathsByName.has(item.name)) {
    favouritePathsByName.set(item.name, path)
    favouriteItemsByPath.set(path, item)
  }
}

export function favouritePath(name: string) {
  return favouritePathsByName.get(name)
}

const noFavourites: string[] = []
let cachedJson: string | null = null
let cachedFavourites = noFavourites

function getFavourites(): string[] {
  let json: string | null = null
  try {
    json = localStorage.getItem(storageKey)
  } catch {
    // Storage can be blocked
  }
  if (json !== cachedJson) {
    cachedJson = json
    try {
      const parsed = JSON.parse(json ?? '[]')
      cachedFavourites = Array.isArray(parsed) ? parsed : noFavourites
    } catch {
      cachedFavourites = noFavourites
    }
  }
  return cachedFavourites
}

function subscribe(onChange: () => void) {
  // Other tabs change the storage too
  addEventListener('storage', onChange)
  addEventListener(changeEvent, onChange)
  return () => {
    removeEventListener('storage', onChange)
    removeEventListener(changeEvent, onChange)
  }
}

export function useFavourites(): string[] {
  return useSyncExternalStore(subscribe, getFavourites, () => noFavourites)
}

export function toggleFavourite(path: string) {
  const favourites = getFavourites()
  const updated = favourites.includes(path)
    ? favourites.filter((favourite) => favourite !== path)
    : [...favourites, path]
  saveFavourites(updated)
}

export function clearFavourites() {
  saveFavourites([])
}

function saveFavourites(favourites: string[]) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(favourites))
  } catch {
    // Storage can be blocked
  }
  dispatchEvent(new Event(changeEvent))
}
