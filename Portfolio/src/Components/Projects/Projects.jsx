import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import projects from '../../assets/Data/Projects_Data.jsx';
import './Projects.css'


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
                    <div className='flex flex-row gap-4'>
                      {items.link.map((links, index) => {
                        return (
                          <div className="relative flex flex-row gap-4 group" key={index}>
                            <img src={links.link} alt="" className="w-8 h-8" />
                            <span className="absolute bottom-full mb-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                              {links.name}
                            </span>
                          </div>
                        )})}
                    </div>
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
