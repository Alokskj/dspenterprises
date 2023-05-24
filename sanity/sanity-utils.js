

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
      ...,
      section1FeatureItem1{
        ...,
        page->{...}
	},
      section1FeatureItem2{
        ...,
        page->{...}
	},
      section1FeatureItem3{
        ...,
        page->{...}
	},
      section2FeatureItem1{
        ...,
        page->{...}
	},
      section2FeatureItem2{
        ...,
        page->{...}
	},
      section2FeatureItem3{
        ...,
        page->{...}
	},
      section2FeatureItem4{
        ...,
        page->{...}
	},
      section2FeatureItem5{
        ...,
        page->{...}
	},
      section2FeatureItem6{
        ...,
        page->{...}
	},
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
export async function getFeaturePage(slug){
   return client.fetch(
    `*[_type == 'featurePages' && slug.current == '${slug}']{
      ...
      
    }`
   )
}
export async function getFeaturePages(){
   return client.fetch(
    `*[_type == 'featurePages']{
      ...
      
    }`
   )
}

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
