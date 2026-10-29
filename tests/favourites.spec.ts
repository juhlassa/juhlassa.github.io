import { test, expect, type Page } from '@playwright/test'
import { listParam } from '../src/favourites.ts'

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
      text:
        `${name}, 1 kpl - ${new URL(path, page.url()).href}\n\n` +
        `Koko lista: ${new URL(`/suosikit/?${listParam}=tarjoilu/kapea-kerrostarjotin-3-kerrosta:1`, page.url()).href}`
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

  test('quantities are limited to what is available and add up to the total price', async ({
    page
  }) => {
    const bowl = 'Mariskooli, kirkas, pieni'
    const bowlPath = '/tarjoilu/mariskooli-kirkas-pieni/'
    await page.addInitScript(
      (paths) => {
        if (!window.localStorage.getItem('favourites')) {
          window.localStorage.setItem('favourites', JSON.stringify(paths))
        }
        navigator.share = async (data) => {
          ;(window as unknown as { shared: ShareData }).shared = data!
        }
      },
      [path, bowlPath, '/muut/karkkibuffet/']
    )
    await page.goto('/suosikit/')
    const quantity = page.getByLabel(`Määrä: ${bowl}`)
    const total = page.getByText(/^Hinta yhteensä/)

    // Only one is available, or there is no price
    await expect(page.getByLabel(`Määrä: ${name}`)).toHaveCount(0)
    await expect(page.getByLabel('Määrä: Karkkibuffet')).toHaveCount(0)

    // 7,00 € + 3,00 €
    await expect(quantity).toHaveValue('1')
    await expect(quantity).toHaveAttribute('max', '8')
    await expect(total).toContainText('Hinta yhteensä 10,00 €')

    await quantity.fill('4')
    await expect(total).toContainText('Hinta yhteensä 19,00 €')

    // More than is available becomes what is available
    await quantity.fill('20')
    await quantity.blur()
    await expect(quantity).toHaveValue('8')
    await expect(total).toContainText('Hinta yhteensä 31,00 €')

    // Less than one becomes one
    await quantity.fill('0')
    await quantity.blur()
    await expect(quantity).toHaveValue('1')
    await quantity.fill('8')

    await page.reload()
    await expect(quantity).toHaveValue('8')

    await page.getByRole('button', { name: 'Jaa merkityt tuotteet' }).click()
    const shared = await page.waitForFunction(
      () => (window as unknown as { shared?: ShareData }).shared
    )
    expect(await shared.jsonValue()).toMatchObject({
      text:
        `${name}, 1 kpl - ${new URL(path, page.url()).href}\n` +
        `${bowl}, 8 kpl - ${new URL(bowlPath, page.url()).href}\n` +
        `Karkkibuffet - ${new URL('/muut/karkkibuffet/', page.url()).href}\n\n` +
        `Koko lista: ${new URL(`/suosikit/?${listParam}=tarjoilu/kapea-kerrostarjotin-3-kerrosta:1,tarjoilu/mariskooli-kirkas-pieni:8,muut/karkkibuffet:0`, page.url()).href}`
    })
  })

  test('favourites are stored as JSON with quantities', async ({ page }) => {
    const bowlPath = '/tarjoilu/mariskooli-kirkas-pieni/'
    // A list stored before quantities, with an item no longer for rent
    await page.addInitScript(
      (paths) => {
        if (!window.localStorage.getItem('favourites')) {
          window.localStorage.setItem('favourites', JSON.stringify(paths))
        }
      },
      [path, '/muut/poistettu/', bowlPath, '/muut/karkkibuffet/']
    )
    await page.goto('/suosikit/')
    await page.getByLabel('Määrä: Mariskooli, kirkas, pieni').fill('3')

    const stored = await page.evaluate(() =>
      JSON.parse(window.localStorage.getItem('favourites')!)
    )
    expect(stored).toEqual({
      version: 1,
      items: [
        { path, quantity: 1, price: 7 },
        { path: bowlPath, quantity: 3, price: 3 },
        { path: '/muut/karkkibuffet/', quantity: 0 }
      ]
    })
  })

  test('shared list link shows the list and saves it as own', async ({
    page
  }) => {
    const bowl = 'Mariskooli, kirkas, pieni'
    // An item no longer for rent is left out
    await page.goto(
      `/suosikit/?${listParam}=tarjoilu/mariskooli-kirkas-pieni:3,muut/karkkibuffet:0,muut/poistettu:2`
    )

    await expect(
      page.getByRole('heading', { name: 'Jaettu lista' })
    ).toBeVisible()
    await expect(page.getByText('Määrä 3 kpl')).toBeVisible()
    await expect(page.getByLabel(`Määrä: ${bowl}`)).toHaveCount(0)
    await expect(page.getByText(/^Hinta yhteensä/)).toContainText(
      'Hinta yhteensä 9,00 €'
    )
    await expect(page.getByRole('link', { name: 'Karkkibuffet' })).toBeVisible()

    // The own list is empty, so nothing is asked
    await page.getByRole('button', { name: 'Tallenna omaksi listaksi' }).click()
    await expect(page).toHaveURL(/\/suosikit\/$/)
    await expect(page.getByLabel(`Määrä: ${bowl}`)).toHaveValue('3')
    expect(
      await page.evaluate(() =>
        JSON.parse(window.localStorage.getItem('favourites')!)
      )
    ).toEqual({
      version: 1,
      items: [
        { path: '/tarjoilu/mariskooli-kirkas-pieni/', quantity: 3, price: 3 },
        { path: '/muut/karkkibuffet/', quantity: 0 }
      ]
    })

    // An own list is replaced only after confirming
    await page.goto(
      `/suosikit/?${listParam}=tarjoilu/kapea-kerrostarjotin-3-kerrosta:1`
    )
    page.once('dialog', (dialog) => dialog.dismiss())
    await page.getByRole('button', { name: 'Tallenna omaksi listaksi' }).click()
    await page.goto('/suosikit/')
    await expect(page.getByLabel(`Määrä: ${bowl}`)).toHaveValue('3')
  })
})
