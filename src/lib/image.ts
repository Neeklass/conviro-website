import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanity'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types.js'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
