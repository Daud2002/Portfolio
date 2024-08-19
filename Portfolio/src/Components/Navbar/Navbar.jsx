import React, { useEffect, useState } from 'react'
import { SiLinkedin } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {

    const [menu, setMenu] = useState(false);



    const nav_items = [
        {
            namez: 'Home',
            link: '/'
        },
        {
            namez: 'About',
            link: '#about'
        },
        {
            namez: 'Projects',
            link: '#projects'
        },

        {
            namez: 'Contact',
            link: '#contact'
        }
    ]


    return (
        <div className='flex-wrap border-[1px] shadow-md sticky top-0 z-10 py-1.5 bg-white'>
            <div className='flex justify-between px-10 py-3 items-center w-[100%] bg-white h-[12vh]'>
                <div >
                    <Link to="/" className='flex border-[2px] border-black items-center rounded'>
                        <span className='font-bold my-2 px-1'>Daud's</span>
                        <span className='bg-black text-white py-2 px-1 font-bold'>Portfolio</span>

                    </Link>
                </div>
                <div className='md:flex flex-row gap-6 hidden items-center'>
                    {
                        nav_items.map((items, i) => {
                            return <a href={items.link} key={i}><li className='hover:cursor-pointer font-semibold list-none hover:text-blue-500'>{items.namez}</li></a>
                        })
                    }

                    <a download="Daud_Mir's Resume" className='ml-8'><button className=' text-[10px] bg-white text-black border-[2px] border-black rounded hover:scale-105 duration-200 font-bold py-2 px-2 animate-pulse hover:animate-none  hover:text-blue-600 hover:border-blue-600' >Download Resume</button></a>
                </div>

                <div className='md:hidden flex sticky'>

                    {
                        menu ? <div className=' flex-wrap'>
                            <RxCross1 className='w-10 h-10 duration-1000' onClick={() => setMenu(!menu)} />

                        </div>
                            :
                            <HiBars3 className='w-10 h-10 duration-1000' onClick={() => setMenu(!menu)} />
                    }
                </div>
            </div>
            {
                menu && (
                    <div className='flex flex-col'>
                        <div className='flex flex-row py-4 bg-white h-full transition-all duration-[6000ms] ease-in-out transform sticky'>
                            <div className=' flex flex-col basis-full gap-4 pl-4'>
                                {
                                    nav_items.map((items, i) => {
                                        return <a href={items.link} key={i}><li className='hover:cursor-pointer font-bold list-none text-[20px]'>{items.namez}</li></a>
                                    })
                                }
                            </div>
                            <div className='flex flex-col justify-center gap-6 mr-4'>
                                <a href="https://www.linkedin.com/in/daud-mir-180902294/" target='blank'> <SiLinkedin className='w-8 h-8 text-blue-600 hover:cursor-pointer hover:scale-110 duration-200' /></a>
                                <FaWhatsapp className='w-8 h-8 text-green-700 hover:cursor-pointer hover:scale-110 duration-200' />
                                <a href="https://github.com/Daud2002" target='blank'><BsGithub className='w-8 h-8 hover:cursor-pointer hover:scale-110 duration-200' /></a>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                        <a download="Daud_Mir's Resume" className='ml-8'><button className=' text-[10px] bg-white text-black border-[2px] border-black rounded hover:scale-105 duration-200 font-bold py-2 px-2 animate-pulse hover:animate-none hover:bg-black hover:text-white' >Download Resume</button></a>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
