import React, { useEffect, useState } from 'react'
import { SiLinkedin } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
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
        <div className='flex-wrap border-[1px] border-b-black sticky top-0 z-10'>
            <div className='flex md:justify-evenly justify-around py-3 items-center w-[100%] bg-white h-[12vh]'>
                <div >
                    <Link to="/" className='flex border-[2px] border-black items-center rounded'>
                        <span className='font-bold my-2 px-1'>Daud's</span>
                        <span className='bg-black text-white py-2 px-1 font-bold'>Portfolio</span>

                    </Link>
                </div>
                <div className='md:flex flex-row gap-6 hidden'>
                    {
                        nav_items.map((items, i) => {
                            return <NavLink to={items.link} key={i}><li className='hover:cursor-pointer font-bold list-none'>{items.namez}</li></NavLink>
                        })
                    }
                </div>
                <div className='md:flex gap-4 hidden'>
                    <a href="https://linkedin.com/in/ daud-mir-180902294" target='blank'> <SiLinkedin className='w-7 h-7 text-blue-600 hover:cursor-pointer hover:scale-110 duration-200' /></a>
                    <FaWhatsapp className='w-7 h-7 text-green-700 hover:cursor-pointer hover:scale-110 duration-200' />
                    <a href="https://github.com/Daud2002" target='blank'><BsGithub className='w-7 h-7 hover:cursor-pointer hover:scale-110 duration-200' /></a>
                </div>
                <div className='md:hidden flex'>

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
                    <div className='flex flex-row py-4 bg-white h-full'>
                        <div className=' flex flex-col basis-full gap-4 pl-4'>
                            {
                                nav_items.map((items, i) => {
                                    return <NavLink to={items.link} key={i}><li className='hover:cursor-pointer font-bold list-none text-[20px]'>{items.namez}</li></NavLink>
                                })
                            }
                        </div>
                        <div className='flex flex-col justify-center gap-6 mr-4'>
                            <a href="https://linkedin.com/in/ daud-mir-180902294" target='blank'> <SiLinkedin className='w-8 h-8 text-blue-600 hover:cursor-pointer hover:scale-110 duration-200' /></a>
                            <FaWhatsapp className='w-8 h-8 text-green-700 hover:cursor-pointer hover:scale-110 duration-200' />
                            <a href="https://github.com/Daud2002" target='blank'><BsGithub className='w-8 h-8 hover:cursor-pointer hover:scale-110 duration-200' /></a>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
