import { useState } from 'react'
import React from 'react';

import BackgroundVideo from '../assets/bgvideo.mp4'


function HeroSection(){
    return(
        <>
            <div className='relative w-full h-screen overflow-hidden'>
                <video autoPlay loop muted playsInline className='absolute top-0 left-0 w-full h-full object-cover -z-10'>
                    <source src={BackgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='relative z-[1] text-center text-black flex flex-col justify-center items-center'>
                    <div className='mt-80'>
                        <h1 className='text-5xl text-black font-bold'>Praise Hill</h1>
                        <p className='text-lg text-center p-4 font-bold text-black'>A place of worship, love, faith, and transformation</p>
                        <div className='flex gap-2 flex-col'>
                            <p className='text-black'>Join us every Sunday at 9:00AM</p>
                            <p>12 Corner Road</p>
                        </div>
                        <div className='flex gap-4 flex-row p-4 justify-center items-center'>
                            {/* <button className='cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-2'>Join Us This Sunday</button> */}
                            <button className='cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-4 text-white'>Watch Sermons</button>
                            <button className='cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-4 text-white'>Give Online</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection