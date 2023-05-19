import { getHomeInfo } from '@/sanity/sanity-utils'
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const  AddressWidget = async () => {
  const data = await getHomeInfo()
  return (
    <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-theme rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">
                Drop in our office
              </h1>
              <p className="">
              We would love to hear from you! If you have any questions, inquiries, or would simply like to connect, please feel free to reach out to us using the contact details provided below
              </p>

              <div className="flex my-4 w-2/3 ">
                <div className="flex flex-col pt-2 pr-2">
                  
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="flex justify-start flex-col">
                  <h2 className="text-2xl">Main Office</h2>
                  <p className="">
                    {data?.address}
                  </p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 ">
                <div className="flex flex-col pt-2 pr-2">
                  <i className="fas fa-phone-alt " />
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="">Tel: {data.contactNumber}</p>
                  <p className="">Fax: {data.contactNumber}</p>
                </div>
              </div>

             
            </div>
          </div>
  )
}

export default AddressWidget