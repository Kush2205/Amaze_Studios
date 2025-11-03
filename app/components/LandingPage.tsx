"use client";
import React, { useState, useEffect } from 'react'
import { motion } from "motion/react"
import { Cinzel } from 'next/font/google'
import Image from 'next/image'
import ParticleBackground from './ParticleBackground';
import Button from '../ui/button';
import xbox from "../../public/xbox2.svg"
import ps from "../../public/ps.svg"
import pc from "../../public/pc.svg"
import ScrollIndicator from '../ui/ScrollIndicator';
const cinzel = Cinzel({ subsets: ['latin'] })

function LandingPage() {
    const [wishlistCount, setWishlistCount] = useState(0)

    const fetchCount = () => {
        fetch('/api/wishlist')
            .then(res => res.json())
            .then(data => setWishlistCount(data.count || 0))
            .catch(err => console.error('Error fetching wishlist count:', err))
    }

    useEffect(() => {
        // Initial fetch
        fetchCount()

        // Listen for wishlist updates
        const handleWishlistUpdate = () => {
            fetchCount()
        }

        window.addEventListener('wishlistUpdated', handleWishlistUpdate)

        return () => {
            window.removeEventListener('wishlistUpdated', handleWishlistUpdate)
        }
    }, [])

    const scrollToCommunity = () => {
        const element = document.getElementById('community');
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    return (
        <div className='relative flex flex-col items-center justify-center h-screen text-white px-4 sm:px-6 md:px-8 overflow-hidden'>
            <ParticleBackground />
            
            {/* Game Poster Background with Overlay - Appears First */}
            <motion.div 
                className='absolute inset-0 z-0'
                initial={{ opacity: 1, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0, ease: "easeOut" }}
            >
                <Image
                    src="/Game_Poster.jpeg"
                    alt="The Tales of Annapurna Game Poster"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                <div className="absolute inset-0 bg-black/30" />
            </motion.div>

            {/* Game Logo - Appears Second */}
            <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.0, delay: 1.5, ease: "easeOut" }}
                className='relative z-10 mb-4 w-32 sm:w-40 md:w-48'
                style={{
                    filter: 'drop-shadow(0 0 15px rgba(255, 95, 0, 0.5)) drop-shadow(0 0 30px rgba(255, 128, 0, 0.3))'
                }}
            >
                <Image
                    src="/Game Logo.jpeg"
                    alt="The Tales of Annapurna Logo"
                    width={400}
                    height={200}
                    className="w-full h-auto"
                    priority
                />
            </motion.div>

            <div style={{ fontFamily: cinzel.style.fontFamily }} className='relative max-w-5xl z-10'>
                <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 2.5 }} className='text-white text-3xl sm:text-3xl md:text-3xl lg:text-7xl font-semibold animate-pulse-glow text-center'>The Tales of Annapurna</motion.h1>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.8, delay: 3.2, ease: "easeOut" }}
                    className='absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 origin-center'
                    style={{
                        width: '100%',
                        boxShadow: '0 0 10px #ff8c00, 0 0 20px #ff4500, 0 0 30px #dc143c'
                    }}
                />
            </div>
            <div style={{ fontFamily: cinzel.style.fontFamily }} className='relative z-10 flex flex-col sm:flex-row gap-2 sm:gap-x-5 mt-6 text-xl sm:text-2xl md:text-3xl items-center'>
                <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 4.2 }} >A myth reborn</motion.h3>
                <motion.span className='text-3xl sm:text-4xl animate-float hidden sm:inline' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 4.2 }}>•</motion.span>
                <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 4.2 }}>A city eternal</motion.h3>
            </div>
            
            {/* Wishlist Count */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.0 }}
                className='relative z-10 mt-4 text-orange-400 text-sm sm:text-base'
                style={{ fontFamily: cinzel.style.fontFamily }}
            >
                <motion.span
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    🔥 <motion.span
                        key={wishlistCount}
                        initial={{ scale: 1.5, color: '#ff8c00' }}
                        animate={{ scale: 1, color: '#fb923c' }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        {wishlistCount}
                    </motion.span> adventurers have already wishlisted!
                </motion.span>
            </motion.div>

            <Button
                label='Wishlist Now'
                className='relative z-10 px-6 py-2 mt-6 text-lg sm:text-xl bg-red-500 text-white rounded hover:bg-red-600 hover:cursor-pointer'
                initialOpacity={0}
                animateOpacity={1}
                transitionDuration={0.5}
                transitionDelay={3.4}
                onClick={scrollToCommunity}
            />
            <div className='relative z-10 flex flex-wrap justify-center mt-6 gap-3 sm:gap-4'>
                <Button
                    icon={<img src={pc.src} alt="PC Icon" className="w-5 h-5 sm:w-6 sm:h-6" />}
                    className='px-4 py-2 text-base sm:text-lg text-black rounded hover:cursor-pointer flex items-center bg-white'
                    initialOpacity={0}
                    animateOpacity={1}
                    transitionDuration={0.7}
                    transitionDelay={3.7}
                />
                <Button
                    icon={<img src={ps.src} alt="PlayStation Icon" className="w-5 h-5 sm:w-6 sm:h-6" />}
                    className='px-4 py-2 text-base sm:text-lg text-black rounded hover:cursor-pointer flex items-center bg-white'
                    initialOpacity={0}
                    animateOpacity={1}
                    transitionDuration={0.7}
                    transitionDelay={3.7}
                />
                <Button
                    icon={<img src={xbox.src} alt="Xbox Icon" className="w-5 h-5 sm:w-6 sm:h-6" />}
                    className='px-4 py-2 text-base sm:text-lg text-black bg-white rounded hover:cursor-pointer flex items-center'
                    initialOpacity={0}
                    animateOpacity={1}
                    transitionDuration={0.7}
                    transitionDelay={3.7}
                    hoverScale={1.1}
                />
            </div>
            
            <motion.div 
                className="absolute bottom-8 z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 4.5 }}
                style={{ filter: "drop-shadow(0 0 5px rgba(255, 95, 0, 0.7))" }}
            >
                <ScrollIndicator 
                    width={35} 
                    height={55} 
                    color="#FF5F00" 
                    scrollLineColor="#FFFFFF" 
                />
            </motion.div>
        </div>
    )
}

export default LandingPage;