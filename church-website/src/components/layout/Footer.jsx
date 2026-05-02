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
            <footer className='mt-80 bg-[#141516] flex flex-col gap-6'>
                <div>
                    <LuChurch color='white' size='2rem' />
                    <h6 className='text-[#a1a1a2] font-bold'>PRAISE HILL.</h6>
                    <p className='text-[#a1a1a2]'>Raising lives, building faith, transforming destinies through Christ.</p>
                    <div className='flex flex-row gap-2'>
                        <FaFacebook color='white' size='2rem' />
                        <LuYoutube color='white' size='2rem' />
                        <FaWhatsapp color='white' size='2rem' />
                        <FaInstagram color='white' size='2rem'/>
                    </div>
                </div>
                <div>
                    <ul>
                        <li className='text-[#a1a1a2]'>Home</li>
                        <li className='text-[#a1a1a2]'>About Us</li>
                        <li className='text-[#a1a1a2]'>Ministries</li>
                        <li className='text-[#a1a1a2]'>Sermons</li>
                        <li className='text-[#a1a1a2]'>Events</li>
                        <li className='text-[#a1a1a2]'>Contact</li>
                        <li className='text-[#a1a1a2]'>Give Online</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-[#a1a1a2]'>Service Sundays</h4>
                    <div>
                        <h5 className='text-[#a1a1a2]'>Sunday Worship</h5>
                        <p className='text-[#a1a1a2]'>9:00 AM</p>
                    </div>
                    <div>
                        <h5 className='text-[#a1a1a2]'>Midweek Service</h5>
                        <p className='text-[#a1a1a2]'>Wednesday - 5:00PM</p>
                    </div>
                    <div>
                        <h5 className='text-[#a1a1a2]'>Prayer Meeting</h5>
                        <p className='text-[#a1a1a2]'>Friday - 6:00PM</p>
                    </div>
                    <div>
                        <h5 className='text-[#a1a1a2]'>Youth Fellowship</h5>
                        <p className='text-[#a1a1a2]'>Saturday - 4:00PM</p>
                    </div>
                </div>
                <div>
                    <div>
                        < IoLocationOutline color='white' size='2rem' />
                        <p className='text-[#a1a1a2]'>12 Corner Road</p>
                    </div>
                    <div>
                        <FaPhoneAlt color='white' size='2rem'/>
                        <p className='text-[#a1a1a2]'>123 456 789</p>
                    </div>
                    <div>
                        <MdOutlineEmail color='white' size='2rem'/>
                        <p className='text-[#a1a1a2]'>sendyourprayers@gmail.com</p>
                    </div>
                    {/* MINI GOOGLE MAP */}
                </div>
                <div className='h-1 bg-green-400 w-full'></div>
                <div>
                    <div>
                        <p className='text-[#a1a1a2]'>@2026 Praise Hill. All rights reserved</p>
                    </div>
                    <div>
                        <p className='text-[#a1a1a2]'>Designed and inspired by Josephine</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer