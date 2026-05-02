import { useState } from 'react'
import './App.css'

import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import HeroSection from './components/home/HeroSection'

function App() {

  return (
    <>
      <NavBar/>
      <HeroSection/>
      <Footer/>
    </>
  )
}

export default App;