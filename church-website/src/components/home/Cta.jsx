import { useState } from 'react'

import { FaCross } from "react-icons/fa6";
import { BiChurch } from "react-icons/bi";
import { FaBookBible } from "react-icons/fa6";

function Cta(){
    return(
        <>
            <div className='flex flex-col flex-wrap gap-4 p-4 mt-20'>
                <div className='flex justify-around'>
                    <FaCross size='2rem' />
                    <BiChurch size='2.5rem' />
                </div>
                <div className='flex gap-2 flex-col justify-center md:pl-8'>
                    <h2 className='text-3xl text-[#141516]'>SUPPORT THE WORK OF GOD </h2>
                    <p className='text-3xl font-extralight text-black p-2 italic'>Join us in serving God's coummunity.</p>
                </div>
                <div className='flex gap-4 justify-center items-center p-4'>
                    <button className='text-light-blue-light hover:text-black dark:text-gray-400 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0 bg-black'>Give now</button>
                    <button className='text-light-blue-light hover:text-black dark:text-gray-400 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0 bg-black'>Learn More</button>
                </div>
                <div className='flex justify-around'>
                    <BiChurch size='2.5rem'/>
                    <FaBookBible size='2rem'/>
                </div>
                {/* <button className='cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-4 text-white'>Give Now</button> */}
            </div>
        </>
    )
}

export default Cta