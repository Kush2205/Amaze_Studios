"use client"
import React from 'react'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Divider from './ui/divider'
import About from './components/AboutSection'
import Trailer from './components/Trailer'
import Footer from './components/Footer'
function page() {
  return (
    <>
    <Navbar />
    <section id="home">
      <LandingPage />
    </section>
    <Divider animate={true} width='80%' glowColor='#FF8000' glowIntensity={4} />
    <section id="about">
      <About />
    </section>
    <section id="trailer">
      <Trailer />
    </section>
    <Divider animate={true} width='80%' glowColor='#FF8000' glowIntensity={4} />
    <section id="community">
      <Footer />
    </section>
    </>
    
  )
}

export default page 