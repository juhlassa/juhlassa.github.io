import { test, expect } from '@playwright/test'

test.describe('Glasses page', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('consent_state', 'denied')
    })
  })

  test('should display glass items', async ({ page }) => {
    await page.goto('/lasit')

    await expect(page.getByText(/kuohu.*viini.*lasi/i).first()).toBeVisible()
    await expect(page.getByText(/sydän.*lasi/i).first()).toBeVisible()
    await expect(page.getByText(/verna/i).first()).toBeVisible()
  })
})
