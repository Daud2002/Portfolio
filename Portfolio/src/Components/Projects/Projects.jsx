import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import projects from '../../assets/Data/Projects_Data.jsx';


export default function Projects() {
  return (
    <div className='w-[100%] flex flex-col justify-center items-center py-[5.5rem] gap-16' id='projects'>
      <h1 className='text-blue-600 font-bold text-[3rem]'>Projects</h1>
      <div className='flex flex-col md:gap-16 gap-32'>
        {
          projects.map((items, i) => {
            return (
              <div className='flex md:flex-row flex-col md:gap-0 gap-8' key={i}>
                <div className='md:w-[50%] w-[100%] flex md:justify-end justify-center'>
                  <img src={items.image} alt={items.name} className='md:w-96 w-[90%] h-56 shadow-lg rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-110 hover:cursor-pointer' />
                </div>
                <div className='md:w-[50%] w-[100%] flex flex-col justify-center items-center gap-4'>
                  <div className='md:w-[60%] w-[90%] flex flex-col md:items-start items-center gap-4'>
                    <h1 className='font-bold opacity-70 text-[25px]'>{items.name}</h1>
                    <p className='font-light text-[15px] text-justify'>{items.des}</p>
                    <a href={items.link} target='blank'><button className='flex flex-row items-center gap-2 text-[10px]'><FaExternalLinkAlt className='bg-white text-[20px] text-blue-600' /> </button></a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
