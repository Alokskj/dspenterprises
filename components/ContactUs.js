'use client'
import { EmailJSResponseStatus } from '@emailjs/browser';
import { config } from '@fortawesome/fontawesome-svg-core';
import React, { useRef, useState } from 'react';
import EmailTemplateUser from './utilities/EmailTemplateUser';
import EmailTemplateTeam from './utilities/EmailTemplateTeam';

const ContactUs = () => {
    const [isSubmit , setIsSubmit] = useState(false)
    const [formState, setFormState] = useState({
        name : '',
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
    <div
    data-aos='fade'
    className="services py-4 md:hidden bg-gray-100 dark:bg-gray-900  px-4 md:px-30 lg:px-40 xl:px-60">
      <div className="section-title flex my-8 poppins font-semibold justify-center items-center text-theme uppercase">
        <h4>Get in touch</h4>
      </div>
      <div className="section-title-paragraph text-center items-center space-y-3">
        <h1 className="text-2xl md:text-5xl  font-bold ">
          Fill in the form to start a conversation
        </h1>
      </div>
      <div className="form">
      <form  onSubmit={submitHander} className="p-6 flex flex-col justify-center">
                        <div
                        data-aos="fade"
                        data-aos-delay="100"
                        data-aos-duration="600"
                        className="flex flex-col">
                            <label htmlFor="name" className="hidden">Full Name</label>
                            <input required value={formState.name} onChange={changeHalder} type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div
                        data-aos="fade"
                        data-aos-delay="125"
                        data-aos-duration="600"
                        className="flex flex-col mt-2">
                            <label htmlFor="email" className="hidden">Email</label>
                            <input required value={formState.email} onChange={changeHalder} type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div
                        data-aos="fade"
                        data-aos-delay="150"
                        data-aos-duration="600"
                        className="flex flex-col mt-2">
                            <label htmlFor="message" className="hidden">Message</label>
                            <textarea required value={formState.message} onChange={changeHalder}  rows={3} name="message" id="message" placeholder="Enter your message" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></textarea>
                        </div>
                        
                        {isSubmit ?
                        
                        <button
                        data-aos="fade-up"
                        data-aos-delay="175"
                        data-aos-duration="600"
                        type="button" disabled  className="md:w-32 bg-gray-200  text-black font-bold py-3 px-6 rounded-lg mt-3  transition ease-in-out duration-300">
                            Thanks htmlFor contacting us
                        </button>
                        :
                        
                        <button
                        data-aos="fade-up"
                        data-aos-delay="175"
                        data-aos-duration="600"
                        type="submit" className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                           Submit
                        </button>
                        }
                        
     </form>
      </div>
    </div>


    {/* ///// */}
    <div className="relative hidden md:flex items-top justify-center bg-gray-200 py-20  dark:bg-gray-900 sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 mr-2  dark:bg-gray-800 sm:rounded-lg">
                        <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                            Get in touch
                        </h1>
                        <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                            Fill in the form to start a conversation
                        </p>

                        <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-theme">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                Dsp, Street, State,
                                Postal Code
                            </div>
                        </div>

                        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-theme">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                +91 1234567890
                            </div>
                        </div>

                        <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-theme">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                info@dspenterprises.net
                            </div>
                        </div>
                    </div>

                    <form onSubmit={submitHander} className="p-6 flex flex-col justify-center">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="hidden">Full Name</label>
                            <input type="name" required value={formState.name} onChange={changeHalder} name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div className="flex flex-col mt-2">
                            <label htmlFor="email" className="hidden">Email</label>
                            <input type="email" required value={formState.email} onChange={changeHalder} name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/>
                        </div>

                        <div className="flex flex-col mt-2">
                            
                            <label htmlFor="message" className="hidden">Message</label>
                            <textarea  type="text" required value={formState.message} onChange={changeHalder} name="message" id="message" placeholder="Enter your Message" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"></textarea>
                        </div>

                        {isSubmit ?
                        
                        <button  type="button" disabled  className="md:w-32 bg-gray-200  text-black font-bold py-3 px-6 rounded-lg mt-3  transition ease-in-out duration-300">
                            Thanks htmlFor contacting us
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
