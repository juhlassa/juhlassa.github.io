import { test, expect } from '@playwright/test'

test.describe('GreenGate page', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('consent_state', 'denied')
    })
  })

  test('should display greengate items', async ({ page }) => {
    await page.goto('/astiastot/greengate')

    await expect(page.getByText(/lattemuki/i).first()).toBeVisible()
    await expect(page.getByText(/lautanen/i).first()).toBeVisible()
    await expect(page.getByText(/kermakko/i).first()).toBeVisible()
  })
})
