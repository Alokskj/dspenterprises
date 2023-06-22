

import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
const client = createClient({
    projectId : `${process.env.SANITY_PROJECT_ID}`,
    dataset: 'production',
    apiVersion: '2021-08-31',
    useCdn: true,
    token : `${process.env.SANITY_PROJECT_TOKEN}`,
})
export default client
export async function getHomeInfo(){
   return client.fetch(
    `*[_type == 'home']{
      ...,
      testimonial[]->,
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
export async function getReviews(){
   return client.fetch(
    `*[_type == 'review' && published == true] | order(_createdAt desc){
      ...
      
    }`
   )
}
export async function createReview(data){
   return client.create(
    data
   )
   .then(data => {
    
   })
   .catch(err => console.log(err))
}

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
