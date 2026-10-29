import { useSyncExternalStore } from 'react'
import { rentalItems } from './rentalItems'
import { itemPagePath } from './itemPages'
import type { GroupedRentalItem } from './types'

const storageKey = 'favourites'
const changeEvent = 'favourites-change'

export type Favourite = { path: string; quantity: number; price?: number }
const version = 1

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

export function allowedQuantity(path: string, quantity?: unknown): number {
  const item = favouriteItemsByPath.get(path)
  if (!item?.price) {
    return 0
  }
  const available = item.pcs || Infinity
  return typeof quantity === 'number' && Number.isInteger(quantity)
    ? Math.max(1, Math.min(quantity, available))
    : 1
}

function favouriteOf(path: string, quantity?: unknown): Favourite {
  const price = favouriteItemsByPath.get(path)?.price
  return {
    path,
    quantity: allowedQuantity(path, quantity),
    ...(price && { price })
  }
}

// Favourites of items still for rent, with allowed quantities. Lists stored
// before quantities were plain arrays of paths.
function parseFavourites(value: unknown): Favourite[] {
  const stored: unknown[] = Array.isArray(value)
    ? value.map((path) => ({ path }))
    : typeof value === 'object' &&
        value !== null &&
        Array.isArray((value as { items?: unknown }).items)
      ? (value as { items: unknown[] }).items
      : []
  const favourites: Favourite[] = []
  for (const entry of stored) {
    const { path, quantity } = (entry ?? {}) as Record<string, unknown>
    if (
      typeof path === 'string' &&
      favouriteItemsByPath.has(path) &&
      !favourites.some((favourite) => favourite.path === path)
    ) {
      favourites.push(favouriteOf(path, quantity))
    }
  }
  return favourites
}

// The same list is returned until the stored JSON changes, as
// useSyncExternalStore requires
const noFavourites: Favourite[] = []
let cachedJson: string | null = null
let cachedFavourites = noFavourites

function getFavourites(): Favourite[] {
  let json: string | null = null
  try {
    json = localStorage.getItem(storageKey)
  } catch {
    // Storage can be blocked
  }
  if (json !== cachedJson) {
    cachedJson = json
    try {
      cachedFavourites = parseFavourites(JSON.parse(json ?? 'null'))
    } catch {
      cachedFavourites = noFavourites
    }
  }
  return cachedFavourites
}

export function favouritesJson(items: Favourite[]) {
  return JSON.stringify({ version, items })
}

function saveFavourites(items: Favourite[]) {
  try {
    localStorage.setItem(storageKey, favouritesJson(items))
  } catch {
    // Storage can be blocked
  }
  dispatchEvent(new Event(changeEvent))
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

export function useFavourites(): Favourite[] {
  return useSyncExternalStore(subscribe, getFavourites, () => noFavourites)
}

export function toggleFavourite(path: string) {
  const favourites = getFavourites()
  saveFavourites(
    favourites.some((favourite) => favourite.path === path)
      ? favourites.filter((favourite) => favourite.path !== path)
      : [...favourites, favouriteOf(path)]
  )
}

export function setFavouriteQuantity(path: string, quantity: number) {
  saveFavourites(
    getFavourites().map((favourite) =>
      favourite.path === path ? favouriteOf(path, quantity) : favourite
    )
  )
}

export function clearFavourites() {
  saveFavourites([])
}

// The list replaces the stored one, e.g. when a shared list is saved
export function replaceFavourites(favourites: Favourite[]) {
  saveFavourites(favourites)
}

export function totalPrice(favourites: Favourite[]) {
  return favourites.reduce(
    (sum, { quantity, price }) => sum + (price ?? 0) * quantity,
    0
  )
}

// Link to the whole list, which people and programs can both read, e.g.
// /suosikit/?vuokrattavat=tarjoilu/kannu:2,muut/karkkibuffet:0
export const listParam = 'vuokrattavat'
export const copyJsonParam = 'json'

export function favouritesListPath(favourites: Favourite[]) {
  const list = favourites
    .map(({ path, quantity }) => {
      const segments = path.split('/').filter(Boolean)
      return `${segments.map(encodeURIComponent).join('/')}:${quantity}`
    })
    .join(',')
  return `/suosikit/?${listParam}=${list}`
}

// The list of a link, already decoded, of items still for rent
export function parseFavouritesList(list: string): Favourite[] {
  return parseFavourites({
    items: list.split(',').map((entry) => {
      const [path, quantity] = entry.split(':')
      return { path: `/${path}/`, quantity: Number(quantity) }
    })
  })
}
