import { test, expect } from '@playwright/test'

test('every content image has a width and height', async ({ request }) => {
  // The sitemap lists every page, so new pages are checked too
  const sitemap = await (await request.get('/sitemap-0.xml')).text()
  const paths = [
    ...sitemap.matchAll(/<loc>https?:\/\/[^/]+([^<]*)<\/loc>/g)
  ].map((match) => match[1])
  expect(paths.length).toBeGreaterThan(20)

  const withoutSize: string[] = []
  for (const path of paths) {
    const html = await (await request.get(path)).text()
    for (const [image] of html.matchAll(/<img[^>]*content-image[^>]*>/g)) {
      if (!/ width="\d+"/.test(image) || !/ height="\d+"/.test(image)) {
        withoutSize.push(`${path}: ${image.match(/src="([^"]*)"/)?.[1]}`)
      }
    }
  }
  expect(withoutSize).toEqual([])
})
