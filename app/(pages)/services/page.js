import ImageSlider from '@/components/utilities/ImageSlider'
import { getFeaturePages, urlFor } from '@/sanity/sanity-utils'
import React from 'react'
export const metadata = {
    title: 'Services',
}
const page = async () => {
    const data = await getFeaturePages()
    
  return (
    <div className="min-h-screen justify-between flex flex-col mb-8 px-4 md:px-30 lg:px-40 xl:px-60 ">
      {data.map((item)=>{
        
        return (<>
         <div className="flex">
          <div className="flex flex-col w-full md:w-3/5">
          <div className="font-bold text-2xl my-8">
            <h4 className="theme-line flex flex-col gap-2">{item?.title}</h4>
          </div>
          <div data-aos='fade' className="paragraphs md:pr-8 flex flex-col gap-10">
            <div
            data-aos='fade'
            className="paragraph-1 ">
              <p>{item?.paragraph1}</p>
            </div>
            <div className="images md:hidden">
              <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-10  md:gap-16">
                {item?.images.map((image) => {
                  return (
                    <div
                    data-aos='fade'
                    className=" image w-full h-full max-h-96">
                      <img
                        className="h-full w-full object-cover object-center rounded-lg shadow-md transform duration-300 transition-all hover:scale-110 hover:shadow-lg"
                        src={urlFor(image).url()}
                        alt='feature image'
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            {item.paragraph2 && 
            <div
            data-aos='fade'
            className="paragraph-2">
              <p>{item.paragraph2}</p>
            </div>
            }
            {item.paragraph3 && 
            <div
            data-aos='fade'
            className="paragraph-3">
              <p>{item.paragraph3}</p>
            </div>
      }
          </div>
        </div>
        <div 
        data-aos='fade'
        className="feaute hidden md:flex w-2/5 image mt-20  flex-col h-full">
         <ImageSlider image={item?.images}/>
        </div>
        </div>
        </>)
      })} 
    
    </div>
  )
}

export default page