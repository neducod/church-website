import { useState } from 'react'
import React from 'react';

import BackgroundVideo from '../assets/bgvideo.mp4'


function HeroSection(){
    return(
        <>
            {/* <div className='relative w-full h-screen overflow-hidden'>
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
                            
                            <button className='cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-4 text-white'>Watch Sermons</button>
                            <button className='cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-4 text-white'>Give Online</button>
                        </div>
                    </div>
                </div>
            </div> */}

<div className="relative w-full h-screen overflow-hidden">
  {/* Background Video with Dark Overlay for Readability */}
  <div className="absolute inset-0 z-0">
    <video 
      autoPlay loop muted playsInline 
      className="w-full h-full object-cover"
    >
      <source src={BackgroundVideo} type="video/mp4" />
    </video>
    {/* This gradient ensures text is legible regardless of video brightness */}
    <div className="absolute inset-0 bg-black/40" />
  </div>

  {/* Content Layer */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
    <header className="max-w-3xl space-y-6">
      <div className="space-y-2">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-md">
          Praise Hill
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-100 max-w-xl mx-auto leading-relaxed">
          A place of worship, love, faith, and transformation.
        </p>
      </div>

      <div className="py-4 space-y-1 bg-white/10 backdrop-blur-sm rounded-lg inline-block px-8 border border-white/20">
        <p className="font-semibold text-lg">Join us every Sunday at 9:00 AM</p>
        <p className="text-gray-200">12 Corner Road, Your City</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
        <button className="w-full sm:w-auto px-8 py-4 bg-lime-500 hover:bg-lime-400 text-lime-950 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
          Watch Sermons
        </button>
        <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black font-bold rounded-full transition-all duration-300">
          Give Online
        </button>
      </div>
    </header>
  </div>
</div>
        </>
    )
}

export default HeroSection