import { test, expect } from '@playwright/test'

test.describe('Frontpage', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem('consent_state', 'denied')
    })
    await page.goto('/')
  })

  test('has title and welcome text', async ({ page }) => {
    await expect(page).toHaveTitle(
      'Vuokraa. Juhli. Palauta. | Pramiat vadit / Seinäjoen seutu'
    )
    await expect(
      page.getByText('Onnea! Koska vierailet sivustollamme')
    ).toBeVisible()
  })

  test('has correct metadata', async ({ page }) => {
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      'Astiavuokrausta Seinäjoen seudulla. Vuokraa astiat, kattaustarvikkeet ja koristeet helposti.'
    )
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      'content',
      'Vuokraa. Juhli. Palauta. | Pramiat vadit / Seinäjoen seutu'
    )
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      'index, follow'
    )
    await expect(page.locator('meta[name="author"]')).toHaveAttribute(
      'content',
      'Pramiat Vadit'
    )
    await expect(page.locator('meta[name="keywords"]')).toHaveAttribute(
      'content',
      'pramiatvadit astiavuokraus astiavuokraamo vuokra-astiat juhlavuokraus juhlat ilmajoki seinäjoki etelä-pohjanmaa virpi kupiainen'
    )
  })
})
