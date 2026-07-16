import { test, expect } from '@playwright/test'

test.describe('Decorating page', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('consent_state', 'denied')
    })
  })

  test('should display decorating items', async ({ page }) => {
    await page.goto('/koristelu')

    await expect(page.getByText(/kynttelikkö/i).first()).toBeVisible()
    await expect(page.getByText(/helmi.*koristeet/i).first()).toBeVisible()
    await expect(page.getByText(/kynttilä.*mansetit/i).first()).toBeVisible()
  })
})
