import { test, expect } from '@playwright/test'
import { basicInfo } from '../src/util'
import { categoryPages } from '../src/categoryPages'
import { inspirationPages } from '../src/inspirationPages'

const paths = [
  '/',
  '/astiastot/vanilja/',
  '/astiastot/greengate/',
  '/etsi/',
  '/vuokraehdot/',
  '/yhteystiedot/',
  '/tietosuojaseloste/',
  ...Object.keys(categoryPages).map((categoryPage) => `/${categoryPage}/`),
  ...Object.keys(inspirationPages).map(
    (inpirationsPage) => `/inspiraatio/${inpirationsPage}/`
  )
]

test.describe('Canonical URL', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('consent_state', 'denied')
    })
  })

  for (const path of paths) {
    test(`matches page address on ${path}`, async ({ page }) => {
      await page.goto(path)

      const url = `${basicInfo.baseUrl}${path}`
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        'href',
        url
      )
      await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
        'content',
        url
      )
    })
  }
})
