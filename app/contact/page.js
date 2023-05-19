'use client'
import AddressWidget from "@/components/utilities/AddressWidget";
import EmailTemplateTeam from "@/components/utilities/EmailTemplateTeam";
import EmailTemplateUser from "@/components/utilities/EmailTemplateUser";
import { faMapMarker, faMapMarkerAlt, faPhone, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const page = () => {

    const [isSubmit , setIsSubmit] = useState(false)
    const [formState, setFormState] = useState({
        name : '',
        lastName : '',
        email : '',
        message : ''
    })
    const changeHalder = (event) =>{
        setFormState((prevValue)=>{
            return {
                ...prevValue,
                [event.target.name] : event.target.value
            }
        })
    }
    const config = {
        Username : 'Ravi.chaudhary@dspenterprises.net',
        Password : '6F9EFE6F34FBFDAACEE42853CC7ED1992645',
        Host : 'smtp.elasticemail.com',
        Port : '2525',
        From : 'Ravi.chaudhary@dspenterprises.net',
        Subject : "Your Message Received - We're Here to Help!",
        Body : EmailTemplateUser(formState),
        To : formState.email
    }

    const config2 = {
        Username : 'Ravi.chaudhary@dspenterprises.net',
        Password : '6F9EFE6F34FBFDAACEE42853CC7ED1992645',
        Host : 'smtp.elasticemail.com',
        Port : '2525',
        From : 'Ravi.chaudhary@dspenterprises.net',
        Subject : 'New query has been recieved',
        Body : EmailTemplateTeam(formState),
        To : 'Ravi.chaudhary@dspenterprises.net'
    }

    const submitHander = (e) =>{
        e.preventDefault()
        setIsSubmit(true)
        
        if(window.Email && !isSubmit){
            window.Email.send(config)
            .then(
                message => {console.log(message); setFormState({
                    name : '',
                    email : '',
                    message : ''
                })}
              )
            .catch(error => console.log(error));  
            window.Email.send(config2)
            .then(
                message => console.log(message)
              )
            .catch(error => console.log(error))  
        }
        else{
            console.log('email client is not avaibale')
        }
    }
  return (
    <>
      <div className="flex justify-center items-center min-w-screen min-h-screen bg-white  ">
        <div className="container mx-auto my-4 px-4 md:px-30 lg:px-40 xl:px-60">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex theme-line flex-col gap-2">
              <h1 className="font-bold   uppercase text-2xl lg:text-3xl">
                Contact Us
              </h1>
            </div>
                <form onSubmit={submitHander}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="name"
                name="name"
                onChange={changeHalder}
                value={formState.name}
                required
                placeholder="First Name*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="lastName"
                onChange={changeHalder}
                value={formState.lastName}
                
                placeholder="Last Name"
                
              />
              <input
                className="w-full md:col-span-2 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                onChange={changeHalder}
                value={formState.email}
                required
                placeholder="Email*"
                
              />
              
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                name="message"
                onChange={changeHalder}
                value={formState.message}
                required
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
            {isSubmit ?
                        
                        <button type="submit"
                        disabled
                className="uppercase text-sm font-bold tracking-wide bg-gray-200 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Thanks for Contacting
              </button>
                        :
                        
                        <button type="submit"
                        className="uppercase text-sm font-bold tracking-wide bg-theme text-gray-100 p-3 rounded-lg w-full 
                              focus:outline-none focus:shadow-outline"
                      >
                        Send Message
                      </button>
                        }  
              
            </div>
              </form>
              
            
          </div>

          <AddressWidget />
        </div>
      </div>
    </>
  );
};

export default page;
