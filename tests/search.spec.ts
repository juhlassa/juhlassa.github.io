import { test, expect } from '@playwright/test'
import { groupPages } from '../src/navigation'
import { itemAnchor, rentalItems } from '../src/rentalItems'

test.describe('Search page', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('consent_state', 'denied')
    })
    await page.goto('/etsi')
  })

  test('should find items when searching', async ({ page }) => {
    const input = page.locator('input.query')
    await input.fill('kerrostarjotin')

    await expect(
      page.getByText('Löytyi 10 osumaa', { exact: false })
    ).toBeVisible()
  })

  test('query is case-insensitive', async ({ page }) => {
    const input = page.locator('input.query')
    await input.fill('Kerrostarjotin')

    await expect(
      page.getByText('Löytyi 10 osumaa', { exact: false })
    ).toBeVisible()
  })

  test('query ignores leading and trailing whitespaces', async ({ page }) => {
    const input = page.locator('input.query')
    await input.fill('       kerrostarjotin        ')

    await expect(
      page.getByText('Löytyi 10 osumaa', { exact: false })
    ).toBeVisible()
  })

  test('should find items also querying text from description', async ({
    page
  }) => {
    const input = page.locator('input.query')
    await input.fill('led-valot')
    const checkbox = page.locator('input.fromDescription')
    await checkbox.check()

    await expect(
      page.getByText('Löytyi 1 osumaa.', { exact: false })
    ).toBeVisible()
  })

  test('keeps the search in the URL', async ({ page }) => {
    await page.locator('input.query').fill('kerrostarjotin')
    await expect(page).toHaveURL(/\/etsi\/\?q=kerrostarjotin$/)

    await page.locator('input.fromDescription').check()
    await expect(page).toHaveURL(/\/etsi\/\?q=kerrostarjotin&d=1$/)
  })

  test('restores the search from a shared link', async ({ page }) => {
    await page.goto('/etsi/?q=kerrostarjotin&d=1')

    await expect(page.locator('input.query')).toHaveValue('kerrostarjotin')
    await expect(page.locator('input.fromDescription')).toBeChecked()
    await expect(
      page.getByText('Löytyi 10 osumaa', { exact: false })
    ).toBeVisible()
  })

  test('item links to the item on its group page', async ({ page }) => {
    await page.locator('input.query').fill('minikerrostarjotin')
    const link = page.getByRole('link', {
      name: 'Minikerrostarjotin, 2 kerrosta'
    })
    await expect(link).toHaveAttribute(
      'href',
      '/tarjoilu/#minikerrostarjotin-2-kerrosta'
    )

    await link.click()
    await expect(page).toHaveURL(/\/tarjoilu\/#minikerrostarjotin-2-kerrosta$/)
    await expect(
      page.locator('#minikerrostarjotin-2-kerrosta')
    ).toBeInViewport()
  })
})

test('every item link from search finds its item', async ({ request }) => {
  const idsByPage = new Map<string, Set<string>>()
  for (const page of Object.values(groupPages)) {
    const html = await (await request.get(page)).text()
    idsByPage.set(
      page,
      new Set([...html.matchAll(/ id="([^"]+)"/g)].map((match) => match[1]))
    )
  }

  const missing = rentalItems
    .map((item) => ({
      page: groupPages[item.group],
      anchor: itemAnchor(item.name)
    }))
    .filter(({ page, anchor }) => anchor && !idsByPage.get(page)?.has(anchor))
  expect(missing).toEqual([])
})
