import React from 'react'
import constimg from '../../assets/developer.jpg'
import rounded from '../../assets/rounded.png'
import './About.css'
import working from '../../assets/working-img.png'

export default function () {
  return (
    <div className='flex md:flex-row flex-col justify-center py-[5.5rem] gap-16' id='about'>
      <div className='md:w-[50%] flex md:justify-end justify-center relative'>
        <img src={constimg} alt="" className='rounded-2xl md:w-[65%] h-[50vh]' />
        <img src={rounded} alt="" className='absolute -bottom-16 -right-16 bg-white rounded-[50%] rounds hidden md:block' />
        <img src={working} alt="" className='absolute bottom-0 right-0 w-[30px] hidden md:block' />
      </div>
      <div className='md:w-[50%] w-[100%] flex md:justify-start justify-center items-center'>
        <div className='flex flex-col justify-center w-[80%] items-center md:items-start gap-4'>
          <h1 className=' font-bold text-blue-700 text-[20px]'>ABOUT ME</h1>
          <h2 className='flex flex-col gap-1 items-center md:items-start'>
            <div className='font-bold text-[20px] opacity-80'>Front-end Developer</div>
            <div className='font-bold text-[20px] opacity-80'>based in Gujrat, Pakistan</div><span className='hidden md:block'>📍</span>
            <div className='flex flex-col gap-3 mt-4 justify-center items-center text-center md:text-left'>
              <div>Hey, my name is Daud Mir, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.</div>
              <div>My main stack currently is ReactJS in combination with Tailwind CSS.</div>
            </div>
          </h2>
        </div>
      </div>
    </div>
  )
}
