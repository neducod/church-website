import { useState } from 'react'
import './App.css'

import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import HeroSection from './components/home/HeroSection'
import ServiceTime from './components/home/ServiceTime'
import Ministry from './components/home/Ministry'

function App() {

  return (
    <>
      <NavBar/>
      <HeroSection/>
      <ServiceTime/>
      <Ministry/>
      <Footer/>
    </>
  )
}

export default App;