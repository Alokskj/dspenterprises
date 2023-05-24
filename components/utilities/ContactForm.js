'use client'
import React, { useState } from 'react'
import EmailTemplateTeam from './EmailTemplateTeam'
import EmailTemplateUser from './EmailTemplateUser'

const ContactForm = () => {

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
    <form onSubmit={submitHander}>
              
            <div className="grid grid-cols-1  gap-5 md:grid-cols-2 mt-12">
            <input
                data-aos='fade'
                data-aos-delay="100"      
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                onChange={changeHalder}
                value={formState.name}
                required
                placeholder="First Name*"
              />
              <input
                data-aos='fade'
                data-aos-delay="200"      

                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="lastName"
                onChange={changeHalder}
                value={formState.lastName}
                
                placeholder="Last Name"
                
              />
              <input
                data-aos='fade'
                data-aos-delay="300"      

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
                data-aos='fade'
                data-aos-delay="400"      

                placeholder="Message*"
                name="message"
                onChange={changeHalder}
                value={formState.message}
                required
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div
            data-aos='fade'
            className="my-2 w-1/2 lg:w-1/4">
            {isSubmit ?
                        
                        <button
                        
                        disabled
                className="uppercase text-sm font-bold tracking-wide bg-gray-200 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Thanks htmlFor Contacting
              </button>
                        :
                        
                        <button data-aos="fade-left" type="submit"
                        className="uppercase text-sm font-bold tracking-wide bg-theme text-gray-100 p-3 rounded-lg w-full 
                              focus:outline-none focus:shadow-outline"
                      >
                        Send Message
                      </button>
                        }  
              
            </div>
              </form>
  )
}

export default ContactForm