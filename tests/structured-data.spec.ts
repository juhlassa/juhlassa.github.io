import { test, expect } from '@playwright/test'
import { basicInfo } from '../src/util'

const paths = ['/', '/lasit/', '/astiastot/vanilja/', '/inspiraatio/kakkukupu/']

test.describe('Structured data', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('consent_state', 'denied')
    })
  })

  for (const path of paths) {
    test(`describes the store in static HTML on ${path}`, async ({
      request
    }) => {
      const html = await (await request.get(path)).text()
      const blocks = [
        ...html.matchAll(
          /<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs
        )
      ]
      expect(blocks).toHaveLength(1)

      const store = JSON.parse(blocks[0][1])
      expect(store['@type']).toBe('Store')
      expect(store.name).toBe(basicInfo.businessName)
      expect(store.url).toBe(`${basicInfo.baseUrl}/`)
      expect(store.vatID).toBe('FI26153996')
    })

    test(`has a single store block after hydration on ${path}`, async ({
      page
    }) => {
      await page.goto(path)

      await expect(
        page.locator('script[type="application/ld+json"]')
      ).toHaveCount(1)
    })
  }
})
