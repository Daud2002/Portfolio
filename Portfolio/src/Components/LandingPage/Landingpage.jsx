import React from 'react'
import myimg from '../../assets/img.png'
import Resume from "../../File/Daud_Mir.pdf"

export default function Landingpage() {

    return (
        <div className='flex md:flex-row flex-col-reverse md:gap-0 gap-20'>
            <div className='flex items-center justify-center flex-col gap-4 md:w-[50%] md:shadow-none shadow-2xl mx-6 px-4 pb-4 mb-4 border-black md:border-none border-[1px] rounded'>
                <div className='text-[50px] font-semibold md:w-[70%] w-[100%]'>
                    Hi, I am Daud Mir
                </div>
                <div className='md:w-[70%] w-[100%]'>
                    I am a passionate web developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, commodi asperiores. Vel officia at reprehenderit minus laudantium eligendi, magnam itaque?
                </div>
                <div className='flex flex-row justify-around w-[100%] mt-8 gap-4'>
                    <a href={Resume} download="Daud_Mir's Resume"><button className='bg-white text-black border-[2px] border-black px-4 py-3 rounded hover:scale-110 duration-200 font-bold' >Download Resume</button></a>
                    <button className='bg-black text-white px-4 py-3 rounded hover:scale-110 duration-200 font-semibold border-[2px] border-black'>Contact Now</button>
                </div>
            </div>
            <div className='flex items-center justify-center md:w-[50%] w-[100%] p-4'>
                <img src={myimg} alt="" className=' drop-shadow-red' />
            </div>
        </div>
    )
}
