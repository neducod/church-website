import { useState } from 'react'
import HeroSection from "../components/home/HeroSection"
import ServiceTime from '../components/home/ServiceTime'

function Home() {
  return (
    <>
      <HeroSection />
      <ServiceTime/>
    </>
  );
}

export default Home;