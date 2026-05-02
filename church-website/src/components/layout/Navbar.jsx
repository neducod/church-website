import { useState } from 'react'

import { FaBeer } from 'react-icons/fa';
// MENU FOR HAMBURGER
import { LuMenu } from "react-icons/lu";

function Navbar(){
    return(
        <>
            <div className='border-b-2 border-[#FFFFFF0D] bg-[#141516] flex justify-between items-center gap-14 p-4 fixed top-0 left-0 w-full z-50'>
                <h1 className='text-[#a1a1a2] p-6 font-bold'>PRAISE HILL.</h1>
                <LuMenu color='white' size='2rem'/>
            </div>
        </>
    )
}

export default Navbar