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
        Password : `${process.env.NODEMAILER_PASSWORD}`,
        Host : 'smtp.elasticemail.com',
        Port : '2525',
        From : 'Ravi.chaudhary@dspenterprises.net',
        Subject : "Your Message Received - We're Here to Help!",
        Body : EmailTemplateUser(formState),
        To : formState.email
    }

    const config2 = {
        Username : 'Ravi.chaudhary@dspenterprises.net',
        Password : `${process.env.NODEMAILER_PASSWORD}`,
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
                    <ContactFormHome />

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