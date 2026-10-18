import { test, expect } from '@playwright/test'

// Items whose links missed in Safari before the images had dimensions
const ids = [
  'jalallinen-sydäntarjotin',
  'tarjoilukorokkeet',
  'pöytäliina-valkoinen',
  'jäätelö-jälkiruokamalja-maljakko'
]

test.describe('Item links', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('consent_state', 'denied')
    })
    // External analytics would keep the network busy, see networkidle below
    await page.route(/googletagmanager\.com|google-analytics\.com/, (route) =>
      route.abort()
    )
  })

  for (const id of ids) {
    test(`shows ${id} right below the header`, async ({ page }) => {
      await page.goto(`/tarjoilu/#${id}`)
      // Let the images around the item load, which used to push it down
      await page.waitForLoadState('networkidle')

      const gap = await page.evaluate((id) => {
        // The name text, not the anchor box around it
        const name = document
          .getElementById(id)!
          .firstElementChild!.getBoundingClientRect()
        const header = document
          .querySelector('.navigation-small')!
          .getBoundingClientRect()
        return Math.round(name.top - header.bottom)
      }, id)
      // The text starts a few pixels below its line's top edge
      expect(gap).toBeGreaterThanOrEqual(0)
      expect(gap).toBeLessThanOrEqual(25)
    })
  }
})
