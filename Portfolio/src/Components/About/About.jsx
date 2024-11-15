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
          <img src={rounded} alt="" className='absolute -bottom-16 -right-16 bg-white rounded-[50%] rounds hidden md:block' />
          <img src={working} alt="" className='absolute bottom-0 right-0 w-[30px] hidden md:block' />
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
              <div className='font-bold text-[20px] opacity-80'>Front-end Developer</div>
              {/* <div className='font-bold text-[20px] opacity-80'>based in Gujrat, Pakistan📍</div> */}
              
              <div className='flex flex-col gap-3 mt-4 justify-center items-center text-center md:text-left'>
                <div className='text-justify'>Hi, I'm Daud Mir, a Front-end Developer from Gujrat, Pakistan, specializing in ReactJS and Tailwind CSS. I’m passionate about building responsive, user-friendly web applications with clean and intuitive UI/UX designs. My goal is to combine functionality and aesthetics to create seamless digital experiences.</div>
              </div>
            </h2>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
