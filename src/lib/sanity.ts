import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '86u2yalz',
  dataset: 'production',
  useCdn: true, // `false` wenn du immer die neuesten Daten brauchst
  apiVersion: '2024-01-01',
})
