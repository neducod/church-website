import { useState } from 'react'

import { FaBeer } from 'react-icons/fa';
// MENU FOR HAMBURGER
import { LuMenu } from "react-icons/lu";

import {  LuX } from 'react-icons/lu';

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);


  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
  ];

    return(
        <>
  



    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#141516]/80 backdrop-blur-md px-6 py-4 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <h1 className="text-white font-bold text-xl tracking-tighter">
          PRAISE HILL<span className="text-blue-500">.</span>
        </h1>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#a1a1a2] hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all">
            Get Started
          </button>
        </div>

        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <LuX size="1.5rem" /> : <LuMenu size="1.5rem" />}
        </button>
      </div>

      <div className={`
        fixed inset-0 top-[72px]  bg-[#141516] z-40 flex flex-col p-8 gap-0 transition-transform duration-300 md:hidden items-center justfiy-center
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-2xl font-semibold text-white border-b border-white/5 pb-4 bg-[#141516]"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav> 








            {/* <div className='border-b-2 border-[#FFFFFF0D] bg-[#141516] flex justify-between items-center gap-14 p-4 fixed top-0 left-0 w-full z-50'>
                <h1 className='text-[#a1a1a2] p-6 font-bold'>PRAISE HILL.</h1>
                <LuMenu color='white' size='2rem'/>
            </div> */}
        </>
    )
}

export default Navbar