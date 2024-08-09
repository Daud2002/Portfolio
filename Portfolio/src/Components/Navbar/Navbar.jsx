import React from 'react'
import { SiLinkedin } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    const nav_items = [
        {
            namez: 'Home',
            link: '/'
        },
        {
            namez: 'Portfolio',
            link: '/portfolio'
        },
        {
            namez: 'About',
            link: '/about'
        },
        {
            namez: 'Contact',
            link: '/contact'
        }
    ]
    return (
        <div className='border-b-2 border-black flex justify-evenly py-3 items-center sticky top-0 w-[100%] backdrop-blur-3xl h-[12vh]'>
            <div >
                <div className='flex border-[2px] border-black items-center rounded'>
                    <span className='font-bold my-2 px-1'>Daud's</span>
                    <span className='bg-black text-white py-2 px-1 font-bold'>Portfolio</span>
                </div>
            </div>
            <div className='md:flex flex-row gap-6 hidden'>
                {
                    nav_items.map((items, i) => {
                        return <NavLink to={items.link}><li className='hover:cursor-pointer font-bold list-none'>{items.namez}</li></NavLink>
                    })
                }
            </div>
            <div className='flex gap-4'>
               <a href="https://linkedin.com/in/ daud-mir-180902294" target='blank'> <SiLinkedin className='w-7 h-7 text-blue-600 hover:cursor-pointer hover:scale-110 duration-200' /></a>
                <FaWhatsapp className='w-7 h-7 text-green-700 hover:cursor-pointer hover:scale-110 duration-200'/>
                <a href="https://github.com/Daud2002" target='blank'><BsGithub className='w-7 h-7 hover:cursor-pointer hover:scale-110 duration-200'/></a>

            </div>
        </div>
    )
}
