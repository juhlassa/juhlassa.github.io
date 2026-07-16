import { test, expect } from '@playwright/test'

test.describe('Vanilja page', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('consent_state', 'denied')
    })
  })

  test('should display vanilja items', async ({ page }) => {
    await page.goto('/astiastot/vanilja')

    await expect(page.getByText(/kahvi.*kuppi/i).first()).toBeVisible()
    await expect(page.getByText(/kermakko/i).first()).toBeVisible()
    await expect(page.getByText(/kannu/i).first()).toBeVisible()
  })
})
