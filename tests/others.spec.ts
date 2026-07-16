import { test, expect } from '@playwright/test'

test.describe('Others page', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('consent_state', 'denied')
    })
  })

  test('should display other items', async ({ page }) => {
    await page.goto('/muut')

    await expect(page.getByText(/kukka.*seinä/i).first()).toBeVisible()
    await expect(page.getByText(/ilma.*pallo.*pumppu/i).first()).toBeVisible()
    await expect(page.getByText(/donitsi.*baari/i).first()).toBeVisible()
  })
})
