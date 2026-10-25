import { test, expect, type Page } from '@playwright/test'

const name = 'Kapea kerrostarjotin, 3 kerrosta'
const path = '/tarjoilu/kapea-kerrostarjotin-3-kerrosta/'

function heart(page: Page) {
  return page.getByRole('button', { name: `Suosikki: ${name}`, exact: true })
}

test.describe('Favourites', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('consent_state', 'denied')
    })
  })

  test('heart on the image adds the item to the favourites and removes it', async ({
    page
  }) => {
    await page.goto('/tarjoilu/')
    await expect(heart(page)).toHaveAttribute('aria-pressed', 'false')
    await heart(page).click()
    await expect(heart(page)).toHaveAttribute('aria-pressed', 'true')
    // The heart is on the image but doesn't zoom it
    await expect(page.getByRole('dialog')).toHaveCount(0)

    await page.goto('/suosikit/')
    await expect(page.getByRole('link', { name, exact: true })).toBeVisible()

    await heart(page).click()
    await expect(
      page.getByText('Voit merkitä vuokrattavaksi aiotut tuotteet')
    ).toBeVisible()
  })

  test('favourites are shared with links to the item pages', async ({
    page
  }) => {
    await page.addInitScript((path) => {
      window.localStorage.setItem('favourites', JSON.stringify([path]))
      navigator.share = async (data) => {
        ;(window as unknown as { shared: ShareData }).shared = data!
      }
    }, path)
    await page.goto('/suosikit/')
    await page.getByRole('button', { name: 'Jaa merkityt tuotteet' }).click()

    const shared = await page.waitForFunction(
      () => (window as unknown as { shared?: ShareData }).shared
    )
    expect(await shared.jsonValue()).toEqual({
      title: 'Haluaisin vuokrata alla mainitut tuotteet\n',
      text: `${name} - ${new URL(path, page.url()).href}`
    })
  })

  test('list is emptied after confirming', async ({ page }) => {
    await page.addInitScript((path) => {
      if (!window.localStorage.getItem('favourites')) {
        window.localStorage.setItem('favourites', JSON.stringify([path]))
      }
    }, path)
    await page.goto('/suosikit/')
    const clear = page.getByRole('button', { name: 'Tyhjennä lista' })

    page.once('dialog', (dialog) => dialog.dismiss())
    await clear.click()
    await expect(page.getByRole('link', { name, exact: true })).toBeVisible()

    page.once('dialog', (dialog) => dialog.accept())
    await clear.click()
    await expect(
      page.getByText('Voit merkitä vuokrattavaksi aiotut tuotteet')
    ).toBeVisible()
    await page.reload()
    await expect(page.getByRole('link', { name, exact: true })).toBeHidden()
  })
})
