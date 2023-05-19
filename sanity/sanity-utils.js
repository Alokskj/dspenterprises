

import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
const client = createClient({
    projectId : 'msuzgn24',
    dataset: 'production',
    apiVersion: '2021-08-31',
    useCdn: true
})

export async function getHomeInfo(){
   return client.fetch(
    `*[_type == 'home']{
      ...
    }`
   )
}
export async function getImages(){
   return client.fetch(
    `*[_type == 'gallery']{
      ...
      
    }`
   )
}

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
