import { test, expect } from '@playwright/test'

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

  test('item names are not links in search results', async ({ page }) => {
    await page.locator('input.query').fill('kerrostarjotin')
    await expect(
      page.getByText('Löytyi 10 osumaa', { exact: false })
    ).toBeVisible()

    await expect(page.locator('.anchor a')).toHaveCount(0)
  })
})
