import { createClient } from 'urql'

export const client = createClient({
  url: 'https://duetadmin.ddev.site/api',
})
