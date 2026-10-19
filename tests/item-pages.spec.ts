import { test, expect } from '@playwright/test'
import { basicInfo } from '../src/util'
import { itemPages } from '../src/itemPages'

const path = '/tarjoilu/kapea-kerrostarjotin-3-kerrosta/'

test.describe('Item share pages', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('consent_state', 'denied')
    })
  })

  test('link preview shows the item', async ({ request }) => {
    const html = await (await request.get(path)).text()
    const meta = (property: string) =>
      html.match(
        new RegExp(`<meta property="${property}" content="([^"]*)"`)
      )?.[1]

    expect(meta('og:image')).toBe(
      `${basicInfo.baseUrl}/kuvat/tarjoilu/kapea_kerrostarjotin_3.jpg`
    )
    expect(meta('og:title')).toMatch(/^Kapea kerrostarjotin, 3 kerrosta \|/)
    expect(meta('og:url')).toBe(`${basicInfo.baseUrl}${path}`)
    expect(html).toContain('<meta name="robots" content="noindex, nofollow"/>')
  })

  test('sends visitors to the item on its group page', async ({ page }) => {
    await page.goto(path)

    await expect(page).toHaveURL(
      /\/tarjoilu\/#kapea-kerrostarjotin-3-kerrosta$/
    )
    await expect(
      page.locator('#kapea-kerrostarjotin-3-kerrosta')
    ).toBeInViewport()
  })

  test('share button shares the item page', async ({ page }) => {
    await page.addInitScript(() => {
      navigator.share = async (data) => {
        ;(window as unknown as { shared: ShareData }).shared = data!
      }
    })
    await page.goto('/tarjoilu/')
    const item = page.getByRole('row').filter({
      has: page.getByRole('link', {
        name: 'Kapea kerrostarjotin, 3 kerrosta',
        exact: true
      })
    })
    await item.getByRole('button', { name: 'Jaa' }).click()

    const shared = await page.waitForFunction(
      () => (window as unknown as { shared?: ShareData }).shared
    )
    expect(await shared.jsonValue()).toEqual({
      title: 'Kapea kerrostarjotin, 3 kerrosta',
      url: new URL(path, page.url()).href
    })
  })

  test('share button copies the link without a share menu', async ({
    page,
    context,
    browserName
  }) => {
    test.skip(browserName !== 'chromium', 'Clipboard permissions')
    await context.grantPermissions(['clipboard-read', 'clipboard-write'])
    await page.addInitScript(() => {
      delete (Navigator.prototype as Partial<Navigator>).share
    })
    await page.goto('/tarjoilu/')
    const item = page.getByRole('row').filter({
      has: page.getByRole('link', {
        name: 'Kapea kerrostarjotin, 3 kerrosta',
        exact: true
      })
    })
    await item.getByRole('button', { name: 'Jaa' }).click()

    await expect(item.locator('.message')).toBeVisible()
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
      new URL(path, page.url()).href
    )
  })
})

test('every item share page leads to its item', async ({ request }) => {
  const idsByPage = new Map<string, Set<string>>()
  const missing: string[] = []
  for (const [path, { target }] of Object.entries(itemPages)) {
    expect((await request.get(path)).ok(), path).toBe(true)

    const [page, anchor] = target.split('#')
    if (!idsByPage.has(page)) {
      const html = await (await request.get(page)).text()
      idsByPage.set(
        page,
        new Set([...html.matchAll(/ id="([^"]+)"/g)].map((match) => match[1]))
      )
    }
    if (!idsByPage.get(page)!.has(anchor)) {
      missing.push(target)
    }
  }
  expect(Object.keys(itemPages).length).toBeGreaterThan(100)
  expect(missing).toEqual([])
})

test('sitemap leaves out item share pages', async ({ request }) => {
  const sitemap = await (await request.get('/sitemap-0.xml')).text()
  expect(sitemap).toContain('/tarjoilu/</loc>')
  expect(sitemap).not.toContain(path)
})
