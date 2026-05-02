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
                <div className='relative z[1] text-center text-amber-300'></div>
            </div>
        </>
    )
}

export default HeroSection