import { useState } from 'react'
import './App.css'

import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import HeroSection from './components/home/HeroSection'
import ServiceTime from './components/home/ServiceTime'


function App() {

  return (
    <>
      <NavBar/>
      <HeroSection/>
      <ServiceTime/>
      <Footer/>
    </>
  )
}

export default App;