import { test, expect } from '@playwright/test'

test.describe('Keyboard access', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('consent_state', 'denied')
    })
    await page.goto('/lasit/')
  })

  test('logo is a link to the front page', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'Pramiat vadit – etusivu' })
    ).toHaveAttribute('href', '/')
  })

  test('item name links to the item', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'Kuohuviinilasi', exact: true })
    ).toHaveAttribute('href', '#kuohuviinilasi')
  })

  test('image zoom opens with Enter and closes with Escape', async ({
    page
  }) => {
    const image = page.getByRole('button', {
      name: 'Suurenna kuva: Kuohuviinilasi'
    })
    await image.focus()
    await page.keyboard.press('Enter')

    const dialog = page.getByRole('dialog', { name: 'Kuohuviinilasi' })
    await expect(dialog).toBeVisible()
    await expect(dialog).toBeFocused()

    await page.keyboard.press('Escape')
    await expect(dialog).toBeHidden()
    await expect(image).toBeFocused()
  })

  test('menu opens with Enter and closes with Escape', async ({
    page,
    isMobile
  }) => {
    test.skip(!isMobile, 'Menu button is only shown on small screens')
    const menu = page.getByRole('button', { name: 'Valikko' })
    const lasit = page.locator('#menu-items').getByRole('link', {
      name: 'Lasit'
    })
    await expect(menu).toHaveAttribute('aria-expanded', 'false')

    await menu.focus()
    await page.keyboard.press('Enter')
    await expect(menu).toHaveAttribute('aria-expanded', 'true')
    await expect(lasit).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(menu).toHaveAttribute('aria-expanded', 'false')
    await expect(lasit).toBeHidden()
  })
})
