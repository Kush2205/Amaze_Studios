"use client"
import React from 'react'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Divider from './ui/divider'
import About from './components/AboutSection'
import Trailer from './components/Trailer'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      
      <main>
        <section id="home" aria-label="Home - Game Introduction">
          <LandingPage />
        </section>
        
        <Divider animate={true} width='80%' glowColor='#FF8000' glowIntensity={4} />
        
        <section id="about" aria-label="About The Game">
          <About />
        </section>
        
        <section id="trailer" aria-label="Game Trailer">
          <Trailer />
        </section>
        
        <Divider animate={true} width='80%' glowColor='#FF8000' glowIntensity={4} />
        
        <section id="community" aria-label="Community and Newsletter">
          <Footer />
        </section>
      </main>
    </>
  )
} 