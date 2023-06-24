
import ContactForm from "@/components/utilities/ContactForm";
import { getHomeInfo } from "@/sanity/sanity-utils";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



import React from "react";
export const metadata = {
  title: 'Contact',
}
const page = async () => {
  const info = await getHomeInfo()
  const data = info[0]
  return (
    <>
   
      <div
      data-aos='fade'
      className="flex justify-center items-center min-w-screen min-h-screen bg-white  ">
        <div className="container mx-auto md:py-12 px-4 md:px-30 lg:px-40 xl:px-60">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex theme-line flex-col gap-2">
              <h1 className="font-bold   uppercase text-2xl lg:text-3xl">
                Contact Us
              </h1>
            </div>
                <ContactForm />
              
            
          </div>

          <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-theme rounded-2xl">
            <div className="flex flex-col text-white">
              <h1
              data-aos='fade'
              className="font-bold uppercase text-4xl my-4">
                Drop in our office
              </h1>
              <p
              data-aos='fade'
              className="">
              We would love to hear from you! If you have any questions, inquiries, or would simply like to connect, please feel free to reach out to us using the contact details provided below
              </p>

              <div
              data-aos='fade-left'
              data-aos-anchor-placement="top"
              className="flex my-4 w-2/3 ">
                <div className="flex flex-col pt-2 pr-2">
                  
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="flex justify-start flex-col">
                  <h2 className="text-2xl">Main Office</h2>
                  <p className="">
                    {data.address}
                  </p>
                </div>
              </div>

              <div
              data-aos='fade-left'
              data-aos-anchor-placement="top"

              className="flex my-4 w-2/3 ">
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
        </div>
      </div>
    </>
  );
};

export default page;
