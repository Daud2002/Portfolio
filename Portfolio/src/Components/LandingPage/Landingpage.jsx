import React from 'react'
import { motion } from 'framer-motion'
import './LandingPage.css'
import { SiLinkedin } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

export default function Landingpage() {

    const skill_logo = [
        {
            link: "https://skillicons.dev/icons?i=html",
            name: "HTML 5"
        },
        {
            link: "https://skillicons.dev/icons?i=css",
            name: "CSS 3"
        },
        {
            link: "https://skillicons.dev/icons?i=tailwindcss",
            name: "Tailwind CSS"
        },
        {
            link: "https://skillicons.dev/icons?i=js",
            name: "JavaScript"
        },
        {
            link: "https://skillicons.dev/icons?i=typescript",
            name: "TypeScript"
        },
        {
            link: "https://skillicons.dev/icons?i=react",
            name: "React JS"
        },
        {
            link: "https://skillicons.dev/icons?i=nextjs",
            name: "Next JS"
        },
        {
            link: "https://skillicons.dev/icons?i=expressjs",
            name: "Express"
        },
        {
            link: "https://skillicons.dev/icons?i=mongo",
            name: "MongoDB"
        },
        {
            link: "https://skillicons.dev/icons?i=git",
            name: "Git"
        }
    ]

    return (<>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            <div className='flex md:flex-row flex-col-reverse md:gap-0 gap-20 items-center justify-center h-[90vh] md:mt-0 mt-32'>
                <div className='flex items-end justify-end flex-col gap-4 md:w-[50%] px-4 pb-4 mb-4 rounded'>
                    <div className=' md:w-[80%] w-[100%] opacity-75 flex flex-col md:gap-4 gap-8 items-center text-left'>
                        <div className='md:text-[2.8rem] text-[2.5rem] font-bold text-justify w-full'>Software Engineer 👋🏻</div>
                        <div className='w-[90%] md:w-[100%] text-center md:text-justify'>
                            {/* <div>Hi, I'm Daud Mir — a self-taught and passionate Software Engineer specializing in the MERN stack, with a strong focus on building intuitive and responsive frontend experiences.</div>
                            <div className='mt-2'>I’m currently based in Lahore, Pakistan📍, and I love crafting user-friendly interfaces that bring ideas to life.</div> */}

                            <div>Hi, I'm Daud Mir — a self-taught and passionate Software Engineer specialize in the MERN stack, based in Lahore, Pakistan📍</div>
                        </div>
                        <div className='flex gap-6 md:justify-start md:w-[100%]'>
                            <a href="https://www.linkedin.com/in/daud-mir-180902294/" target='blank'> <SiLinkedin className='w-7 h-7 text-blue-600 hover:cursor-pointer hover:scale-110 duration-200' /></a>
                            <a href="https://github.com/Daud2002" target='blank'><BsGithub className='w-7 h-7 hover:cursor-pointer hover:scale-110 duration-200' /></a>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center md:w-[50%] w-[100%] p-4'>
                    <div className='hero-img'></div>
                </div>
            </div>
            <div className='flex md:flex-row flex-col justify-center md:items-end items-center gap-8 md:mt-0 mt-40 mb-16'>
                <motion.div
                    initial={{ translateX: '-100%' }}
                    whileInView={{ translateX: '0%' }}
                    transition={{ duration: 0.5, ease: "linear" }}
                >
                    <div className=' font-semibold text-[1.5rem] flex md:flex-row flex-col gap-6 items-center'>
                        <span>Tech Stack</span>
                        <hr className=' bg-black md:h-[5vh] md:w-[2px] h-[0.5vh] w-[80px] md:opacity-60' />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ translateX: '50%' }}
                    whileInView={{ translateX: '0%' }}
                    transition={{ duration: 0.5, ease: "linear" }}>

                    <div className='md:flex flex-row gap-4 hidden'>
                        {
                            skill_logo.map((item, i) => {
                                return (
                                    <div className=' flex flex-col gap-3 items-center group hover:duration-1000 group floatings' key={i}>
                                        <p className='font-semibold shadow-2xl shadow-black py-1 invisible text-[10px] group-hover:visible rounded-lg'>{item.name}</p>
                                        <img src={item.link} alt="" className=' hover:scale-110 duration-200 hover:cursor-pointer w-[50px] overflow-auto' />
                                    </div>
                                )
                            })
                        }
                    </div>
                </motion.div>
                <div className='md:hidden block'>
                    <motion.div
                        initial={{ translateY: '-50%' }}
                        whileInView={{ translateY: '0%' }}
                        transition={{ duration: 0.5, ease: "linear" }}
                    >
                        <div className='flex justify-center gap-4'>
                            {
                                skill_logo.slice(0, 4).map((items, i) => {
                                    return (
                                        <div className=' flex flex-col gap-3 items-center group hover:duration-1000 group floatings' key={i}>
                                            <p className='font-semibold shadow-2xl shadow-black py-1 invisible text-[10px] group-hover:visible rounded-lg'>{items.name}</p>
                                            <img src={items.link} alt="" className=' hover:scale-110 duration-200 hover:cursor-pointer w-[50px] overflow-auto' />
                                        </div>
                                    )
                                })

                            }
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ translateY: '50%' }}
                        whileInView={{ translateY: '0%' }}
                        transition={{ duration: 0.5, ease: "linear" }}
                    >
                        <div className='flex justify-center gap-4'>
                            {
                                skill_logo.slice(4).map((items, i) => {
                                    return (
                                        <div className=' flex flex-col gap-3 items-center group hover:duration-1000 group floatings' key={i}>
                                            <p className='font-semibold shadow-2xl shadow-black py-1 invisible text-[10px] group-hover:visible rounded-lg'>{items.name}</p>
                                            <img src={items.link} alt="" className=' hover:scale-110 duration-200 hover:cursor-pointer w-[50px] overflow-auto' />
                                        </div>
                                    )
                                })

                            }
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div >
    </>
    )
}
