"use client"
import React from 'react'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Divider from './ui/divider'
import Trailer from './components/TrailerSection'
import Footer from './components/Footer'
function page() {
  return (
    <>
    <Navbar />
    <LandingPage />
    <Divider animate={true} width='80%' glowColor='#FF8000' glowIntensity={4} />
    <Trailer />
    <Divider animate={true} width='80%' glowColor='#FF8000' glowIntensity={4} />
    <Footer />
    </>
    
  )
}

export default page 