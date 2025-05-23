import React from 'react'
import constimg from '../../assets/images/developer.jpg'
import rounded from '../../assets/images/rounded.png'
import './About.css'
import working from '../../assets/images/working-img.png'

import { motion } from 'framer-motion'


export default function () {
  return (
    <div className='flex md:flex-row flex-col justify-center py-[5.5rem] gap-16' id='about'>
      <motion.div
        initial={{ translateY: "-50%" }}
        whileInView={{ translateY: "0%" }}
        transition={{ duration: 0.5, ease: "linear" }}
        className='md:w-[50%]'>
        <div className='flex md:justify-end justify-center relative'>
          <img src={constimg} alt="" className='rounded-2xl md:w-[65%] h-[50vh]' />
          <img src={rounded} alt="" className='absolute -bottom-8 -right-8 bg-white rounded-[50%] rounds hidden md:block w-40' />
          <img src={working} alt="" className='absolute bottom-6 right-8 w-[34px] hidden md:block' />
        </div>
      </motion.div>
      <motion.div
        initial={{ translateY: "100%" }}
        whileInView={{ translateY: "0%" }}
        transition={{ duration: 0.5, ease: "linear" }}
        className='md:w-[50%]'>
        <div className='flex md:justify-start justify-center items-center'>
          <div className='flex flex-col justify-center w-[80%] items-center md:items-start gap-4'>
            <h1 className=' font-bold text-blue-700 text-[20px]'>ABOUT ME</h1>
            <h2 className='flex flex-col gap-1 items-center md:items-start'>
              <div className='font-bold text-[20px] opacity-80'>Software Engineer</div>
              {/* <div className='font-bold text-[20px] opacity-80'>based in Gujrat, Pakistan📍</div> */}
              <div className='flex flex-col gap-3 mt-4 justify-center items-center text-center md:text-left'>
                <div className='text-justify'>I'm a self-taught Software Engineer specializing in the MERN stack, with a strong focus on frontend development. I love creating responsive, user-friendly web interfaces using modern tools like React.js and Tailwind CSS.Currently mentoring interns, I bring real-world development experience and clean coding practices to every project I work on.</div>
              </div>
            </h2>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
