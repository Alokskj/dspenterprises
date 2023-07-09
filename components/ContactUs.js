'use client'

import React, { useRef, useState } from 'react';
import EmailTemplateUser from './utilities/EmailTemplateUser';
import EmailTemplateTeam from './utilities/EmailTemplateTeam';
import ContactFormHome from './utilities/ContactFormHome';

const ContactUs = () => {
    
    const [isSubmit , setIsSubmit] = useState(false)
    const [formState, setFormState] = useState({
        name : '',
        email : '',
        message : '',
        mobileNumber: ''
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
        Password : 'F0F1ED2675D246DD4BCC56B25BD87D94802D',
        Host : 'smtp.elasticemail.com',
        Port : '2525',
        From : 'Ravi.chaudhary@dspenterprises.net',
        Subject : "Your Message Received - We're Here to Help!",
        Body : EmailTemplateUser(formState),
        To : formState.email
    }

    const config2 = {
        Username : 'Ravi.chaudhary@dspenterprises.net',
        Password : 'F0F1ED2675D246DD4BCC56B25BD87D94802D',
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
                message => { setFormState({
                    name : '',
                    email : '',
                    message : '',
                    mobileNumber: ""
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
    <div
    data-aos='fade'
    className="contact-home py-4 md:hidden bg-gray-100   px-4 md:px-30 lg:px-40 xl:px-60">
      <div className="section-title flex my-8 poppins font-semibold justify-center items-center text-theme uppercase">
        <h2 className="text-gradient">Get in touch</h2>
      </div>
      <div className="section-title-paragraph text-center items-center space-y-3">
        <h3  className="text-2xl md:text-5xl  font-bold ">
          Fill in the form to start a conversation
        </h3>
      </div>
      <div className="form">
      <form  onSubmit={submitHander} className="p-6 flex flex-col justify-center">
                        <div
                        data-aos="fade"
                        data-aos-delay="100"
                        data-aos-duration="600"
                        className="flex flex-col">
                            <label htmlFor="name" className="hidden">Full Name</label>
                            <input required value={formState.name} onChange={changeHalder} type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>
                        <div
                        data-aos="fade"
                        data-aos-delay="100"
                        data-aos-duration="600"
                        className="flex flex-col mt-2">
                            <label htmlFor="mobileNumber" className="hidden">Mobile Number</label>
                            <input required value={formState.mobileNumber} onChange={changeHalder} type="number" name="mobileNumber" id="mobileNumber" placeholder="Mobile Number" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div
                        data-aos="fade"
                        data-aos-delay="125"
                        data-aos-duration="600"
                        className="flex flex-col mt-2">
                            <label htmlFor="email" className="hidden">Email</label>
                            <input required value={formState.email} onChange={changeHalder} type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>
                        <div
                        
                        data-aos="fade"
                        data-aos-delay="150"
                        data-aos-duration="600"
                        className="flex flex-col mt-2">
                            <label htmlFor="message" className="hidden">Message</label>
                            <textarea required value={formState.message} onChange={changeHalder}  rows={3} name="message" id="message" placeholder="Enter your message" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></textarea>
                        </div>
                        
                        {isSubmit ?
                        
                        <button
                        data-aos-anchor-placement="top"
                        type="button" disabled  className="md:w-32 bg-gray-200  text-black font-bold py-3 px-6 rounded-lg mt-3  transition ease-in-out duration-300">
                            Thanks For contacting us
                        </button>
                        :
                        
                        <button
                        data-aos="fade-up"
                        data-aos-delay="175"
                        data-aos-duration="600"
                        data-aos-anchor-placement="top"
                        type="submit" className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                           Submit
                        </button>
                        }
                        
     </form>
      </div>
    </div>


    {/* ///// */}
    <div className=" hidden md:flex  items-top justify-center bg-gray-200 py-20   sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <ContactFormHome />

                    <form onSubmit={submitHander} className="p-6 flex flex-col justify-center">
                        <div className="grid grid-cols-1 gap-2">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="hidden">Full Name</label>
                            <input type="name" required value={formState.name} onChange={changeHalder} name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="mobileNumber" className="hidden">Mobile Number</label>
                            <input type="number" required value={formState.mobileNumber} onChange={changeHalder} name="mobileNumber" id="mobileNumber" placeholder="Mobile Number" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div className="flex md:col-span-2 flex-col ">
                            <label htmlFor="email" className="hidden">Email</label>
                            <input type="email" required value={formState.email} onChange={changeHalder} name="email" id="email" placeholder="Email" className="w-100  py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div className="flex md:col-span-2 flex-col ">
                            
                            <label htmlFor="message" className="hidden">Message</label>
                            <textarea rows={4} type="text" required value={formState.message} onChange={changeHalder} name="message" id="message" placeholder="Enter your Message" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400  text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></textarea>
                        </div>
                        </div>
                        {isSubmit ?
                        
                        <button  type="button" disabled  className="md:w-1/2  bg-gray-700  text-white font-bold py-3 px-6 rounded-lg mt-3  transition ease-in-out duration-300">
                            Thanks For contacting us
                        </button>
                        :
                        
                        <button  type="submit" className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                           Submit
                        </button>
                        }
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default ContactUs;
