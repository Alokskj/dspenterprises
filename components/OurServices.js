'use client'
import { faBullhorn, faChartLine, faGlobe, faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { motion } from 'framer-motion'
const OurServices = () => {
  const animationVariants = {
    hidden : {opacity : 0, y: 100},
    visible : {opacity : 1, y: 0, transition : {duration : 0.25, delay: .25}}
  }

  return (
    <div className='services service relative min-h-screen  pt-8 flex flex-col items-center  px-4 md:px-30 lg:px-40 xl:px-60'>
    
     <div className="section-title  text-center text-lg poppins font-semibold text-theme uppercase mb-5">
        <h3>our services</h3>
     </div>
     <div className="section-title-paragraph text-center items-center space-y-3">
        <h1 className='text-3xl md:text-5xl  font-bold '>Take Your Business to the next Level</h1>
        <p className='text-gray-500 text-xs md:test-sm md:w-2/3 m-auto'>Lorem ipsum dolorvero reiciendis fugit quo, debitis dolorem autem facilis qui magni ratione!</p>
     </div>
     <div className="features grid grid-cols-1 md:grid-cols-2 my-8  gap-4 ">
         <motion.div
         variants={animationVariants}
         initial='hidden'
         whileInView='visible'
         viewport={{ once: true }}
         
         className="feature bg-white flex flex-col gap-4 p-4 md:p-10 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl">
            <div className="svg">
                <FontAwesomeIcon icon={faNetworkWired} size='2xl' color='var(--primary-color)'/>
            </div>
            <div className="title text-xl md:text-2xl font-bold capitalize">
                <h4>
                    digital strategy
                </h4>
            </div>
            <div className="paragraph text-gray-500 text-sm md:text-lg ">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod repellat, molestias ducimus iure repellendus.
                </p>
            </div>
         </motion.div>
         <motion.div 
          variants={animationVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
         className="feature bg-white flex flex-col gap-4 p-4 md:p-10 shadow-lg rounded-xl cursor-pointer hover:shadow-2xl">
            <div className="svg">
                <FontAwesomeIcon icon={faBullhorn} size='2xl' color='var(--primary-color)'/>
            </div>
            <div className="title text-xl md:text-2xl font-bold capitalize">
                <h4>
                    advertisment
                </h4>
            </div>
            <div className="paragraph text-gray-500 text-sm md:text-lg">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod repellat, molestias ducimus iure repellendus.
                </p>
            </div>
         </motion.div>
         <motion.div
          variants={animationVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
         className="feature bg-white flex flex-col gap-4 p-4 md:p-10 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl">
            <div className="svg">
                <FontAwesomeIcon icon={faGlobe} size='2xl' color='var(--primary-color)'/>
            </div>
            <div className="title text-xl md:text-2xl font-bold capitalize">
                <h4>
                    online marketing
                </h4>
            </div>
            <div className="paragraph text-gray-500 text-sm md:text-lg">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod repellat, molestias ducimus iure repellendus.
                </p>
            </div>
         </motion.div>
         <motion.div
          variants={animationVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
         className="feature bg-white flex flex-col gap-4 p-4 md:p-10 shadow-xl rounded-xl cursor-pointer hover:shadow-2xl">
            <div className="svg">
                <FontAwesomeIcon icon={faChartLine} size='2xl' color='var(--primary-color)'/>
            </div>
            <div className="title text-xl md:text-2xl font-bold capitalize">
                <h4>
                    search engine optmisation
                </h4>
            </div>
            <div className="paragraph text-gray-500 text-sm md:text-lg">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod repellat, molestias ducimus iure repellendus.
                </p>
            </div>
         </motion.div>
     </div>
    </div>
  )
}

export default OurServices