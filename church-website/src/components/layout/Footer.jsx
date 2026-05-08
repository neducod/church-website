import { useState } from 'react'

// ICON FOR CHURCH LOGO
import { LuChurch } from "react-icons/lu";

import { FaInstagram } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";

import { LuYoutube } from "react-icons/lu";

import { FaWhatsapp } from "react-icons/fa";


import { IoLocationOutline } from "react-icons/io5";


import { FaPhoneAlt } from "react-icons/fa";

import { MdOutlineEmail } from "react-icons/md";


function Footer(){
    return(
        <>
            <footer className='mt-80 bg-[#141516] flex flex-col gap-10 p-6'>
                <div className='sm:p-6 sm:flex sm:gap-26 sm:flex-row'>
                    <div className='flex gap-2 flex-col'>
                        <LuChurch color='white' size='2rem' />
                        <h6 className='text-[#a1a1a2] font-bold text-xl'>PRAISE HILL.</h6>
                        <p className='text-[#a1a1a2] text-lg sm:w-80'>Raising lives, building faith, transforming destinies through Christ.</p>
                        <div className='flex flex-row gap-4'>
                            <FaFacebook color='white' size='2rem' />
                            <LuYoutube color='white' size='2rem' />
                            <FaWhatsapp color='white' size='2rem' />
                            <FaInstagram color='white' size='2rem'/>
                        </div>
                    </div>

                    <div className='sm:flex sm:flex-row sm:gap-16 sm:justify-center'>
                        <div>
                            <ul className='flex flex-col'>
                                <li className='text-[#a1a1a2] text-lg'>Home</li>
                                <li className='text-[#a1a1a2] text-lg'>About Us</li>
                                <li className='text-[#a1a1a2] text-lg'>Ministries</li>
                                <li className='text-[#a1a1a2] text-lg'>Sermons</li>
                                <li className='text-[#a1a1a2] text-lg'>Events</li>
                                <li className='text-[#a1a1a2] text-lg'>Contact</li>
                                <li className='text-[#a1a1a2] text-lg'>Give Online</li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-6'>
                            <h4 className='text-[#a1a1a2] text-xl'>Service Sundays</h4>
                            <div>
                                <h5 className='text-[#a1a1a2] text-lg'>Sunday Worship</h5>
                                <p className='text-[#a1a1a2] text-base'>9:00 AM</p>
                            </div>
                            <div>
                                <h5 className='text-[#a1a1a2] text-lg'>Midweek Service</h5>
                                <p className='text-[#a1a1a2] text-base'>Wednesday - 5:00PM</p>
                            </div>
                            <div>
                                <h5 className='text-[#a1a1a2] text-lg'>Prayer Meeting</h5>
                                <p className='text-[#a1a1a2] text-base'>Friday - 6:00PM</p>
                            </div>
                            <div>
                                <h5 className='text-[#a1a1a2] text-lg'>Youth Fellowship</h5>
                                <p className='text-[#a1a1a2] text-base'>Saturday - 4:00PM</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-6 mt-8 sm:mt-0'>
                            <div className='flex flex-row gap-2'>
                                < IoLocationOutline color='white' size='2rem' />
                                <p className='text-[#a1a1a2] text-lg'>12 Corner Road</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <FaPhoneAlt color='white' size='2rem'/>
                                <p className='text-[#a1a1a2] text-lg'>123 456 789</p>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <MdOutlineEmail color='white' size='2rem'/>
                                <p className='text-[#a1a1a2] text-lg'>sendyourprayers@gmail.com</p>
                            </div>
                            {/* MINI GOOGLE MAP */}
                        </div>
                    </div>
                </div>


 
 
                <div className='h-[3px] bg-green-400 w-full'></div>
                <div className='flex flex-col sm:justify-center sm:items-center sm:flex-row gap-8'>
                    <div>
                        <p className='text-[#a1a1a2] text-lg sm:text-sm'>@2026 Praise Hill. All rights reserved</p>
                    </div>
                    <div className='flex justify-center items-center p-4'>
                        <p className='text-[#a1a1a2] text-sm'>Designed and inspired by <a href="https://my-portfolio-jade-seven-80.vercel.app/">Josephine</a> </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer