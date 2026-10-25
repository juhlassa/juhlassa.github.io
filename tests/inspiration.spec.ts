import { test, expect } from '@playwright/test'
import { basicInfo } from '../src/util'
import { inspirationPages } from '../src/inspirationPages.ts'
import { inspirationMediaImage } from '../src/inspirationItems'

test('link preview of every inspiration page shows its first inspiration image', async ({
  request
}) => {
  for (const [slug, group] of Object.entries(inspirationPages)) {
    const html = await (await request.get(`/inspiraatio/${slug}/`)).text()
    const image = html.match(/<meta property="og:image" content="([^"]*)"/)?.[1]

    expect(inspirationMediaImage(group), slug).toMatch(
      /^\/kuvat\/inspiraatio\//
    )
    expect(image, slug).toBe(
      `${basicInfo.baseUrl}${inspirationMediaImage(group)}`
    )
  }
})
