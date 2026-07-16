import { test, expect } from '@playwright/test'

test.describe('Serving page', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('consent_state', 'denied')
    })
  })

  test('should display serving items', async ({ page }) => {
    await page.goto('/tarjoilu')

    await expect(page.getByText(/kerros.*tarjotin/i).first()).toBeVisible()
    await expect(page.getByText(/cooleri/i).first()).toBeVisible()
    await expect(page.getByText(/juoma-astia/i).first()).toBeVisible()
  })
})
