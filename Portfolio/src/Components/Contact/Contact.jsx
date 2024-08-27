import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion'

export default function Contact() {

  const phoneNumber = '+923097119974';
  const message = 'Hello, I visited your portfolio & want to talk to you.';


  return (
    <div className='flex flex-col gap-4 md:ml-32 justify-center items-center md:items-start' id='contact'>
      <motion.div
        initial={{ translateX: "-100%" }}
        whileInView={{ translateX: "0%" }}
        transition={{ duration: 0.5, ease: "linear" }}
      >
        <h1 className='font-bold text-[30px] text-blue-600'>Contact</h1>
      </motion.div>
      <motion.div
        initial={{ translateX: "10%" }}
        whileInView={{ translateX: "0%" }}
        transition={{ duration: 0.5, ease: "linear" }}
      >
        <h1 className='font-semibold text-[20px]'>Don't be shy! Hit me up! 👇</h1>
      </motion.div>
      <div className='flex md:flex-row flex-col items-center md:gap-16 gap-6 mt-6'>
        <motion.div
          initial={{ scale: 2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          <a href="mailto:daudmir3@gmail.com" target='blank'>
            <div className='flex md:flex-row flex-col items-center hover:text-blue-600 rounded-md md:w-[20%] gap-8 pr-4 py-4 hover:scale-110 duration-200'>
              <div><IoMailUnreadOutline className='w-12 h-12 shadow-2xl shadow-black rounded-[50%] p-2 text-blue-600' /></div>
              <div className='flex justify-center flex-col items-center md:items-start'>
                <div className='font-bold text-[20px] opacity-80 '>E-Mail</div>
                <div className=' opacity-60'>
                  daudmir3@gmail.com
                </div>
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ scale: 2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} target='blank'>
            <div className='flex md:flex-row flex-col items-center hover:text-blue-600 rounded-md md:w-[20%] gap-8 px-4 py-4 hover:scale-110 duration-200'>
              <div><FaWhatsapp className='w-12 h-12 shadow-2xl shadow-black rounded-[50%] p-2 text-green-500' /></div>
              <div className='flex flex-col gap-0.5 md:items-center items-start justify-center'>
                <div className='font-bold text-[20px] opacity-80 '>Whatsapp</div>
                <div className=' opacity-60'>
                  +923097119974
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
