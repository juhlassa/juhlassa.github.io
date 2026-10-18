// Writes the width and height of every image under public/kuvat into
// src/image-sizes.json, so that pages can reserve space for images before
// they load. Run by predev and prebuild.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { imageSize } from 'image-size'

const publicDir = 'public'
const imageExtensions = /\.(jpe?g|png|webp|gif)$/i

const sizes: Record<string, { width: number; height: number }> = {}
for (const entry of readdirSync(join(publicDir, 'kuvat'), {
  recursive: true,
  withFileTypes: true
})) {
  if (!entry.isFile() || !imageExtensions.test(entry.name)) {
    continue
  }
  const path = join(entry.parentPath, entry.name)
  const { width, height, orientation } = imageSize(readFileSync(path))
  // EXIF orientations 5-8 are rotated by 90 degrees when shown
  const rotated = orientation !== undefined && orientation >= 5
  sizes[`/${relative(publicDir, path)}`] = rotated
    ? { width: height, height: width }
    : { width, height }
}

writeFileSync('src/image-sizes.json', JSON.stringify(sizes, null, 2) + '\n')
console.info(`Image sizes written for ${Object.keys(sizes).length} images`)
