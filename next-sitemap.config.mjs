// next-sitemap.config.mjs
import { readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const outDir = './dist'

// Pages marked noindex, such as the item share pages, are left out
function noindexPaths() {
  return (
    readdirSync(outDir, { recursive: true })
      .filter((file) => file.endsWith('index.html'))
      .filter((file) =>
        readFileSync(join(outDir, file), 'utf8').includes('noindex')
      )
      // Routes are matched without the trailing slash
      .map((file) => `/${relative('.', file).replace(/\/?index\.html$/, '')}`)
  )
}

export default {
  siteUrl: 'https://pramiatvadit.fi/',
  generateRobotsTxt: true,
  outDir,
  exclude: async () => noindexPaths()
}
