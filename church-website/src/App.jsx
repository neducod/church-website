import { useState } from 'react'
import './App.css'

import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import HeroSection from './components/home/HeroSection'
import ServiceTime from './components/home/ServiceTime'
import Ministry from './components/home/Ministry'
import Sermons from './components/home/Sermons'
import Cta from './components/home/Cta'
import TestimonialSlider from './components/home/Testimonials'

function App() {

  return (
    <>
      <NavBar/>
      <HeroSection/>
      <ServiceTime/>
      <Ministry/>
      <Sermons />
      <TestimonialSlider/>
      <Cta/>
      <Footer/>
    </>
  )
}

export default App;