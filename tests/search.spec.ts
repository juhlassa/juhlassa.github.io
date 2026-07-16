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

    // Expect results to be displayed
    await expect(
      page.getByText('Löytyi 10 osumaa', { exact: false })
    ).toBeVisible()
  })
})
