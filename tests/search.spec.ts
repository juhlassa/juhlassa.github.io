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
})
