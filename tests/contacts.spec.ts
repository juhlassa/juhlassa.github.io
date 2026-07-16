import { test, expect } from '@playwright/test'

test.describe('Contacts page', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('consent_state', 'denied')
    })
    await page.goto('/yhteystiedot')
  })

  test('should display correct contact information', async ({ page }) => {
    const content = page.locator('.content')
    await expect(
      content.getByRole('link', { name: 'pramiatvadit@gmail.com' })
    ).toBeVisible()
    await expect(content.getByText(/040.*524.*2071/i)).toBeVisible()
  })
})
