"use client";
import React from 'react'
import { motion } from "motion/react"
import { Cinzel } from 'next/font/google'
import ParticleBackground from './ParticleBackground';
import Button from '../ui/button';
import xbox from "../../public/xbox2.svg"
import ps from "../../public/ps.svg"
import pc from "../../public/pc.svg"
import ScrollIndicator from '../ui/ScrollIndicator';
const cinzel = Cinzel({ subsets: ['latin'] })

function LandingPage() {
    return (
        <div className='flex flex-col items-center justify-center h-screen text-white'>
            <ParticleBackground />
            <div style={{ fontFamily: cinzel.style.fontFamily }} className='relative'>
                <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.5 }} className='text-white text-7xl font-semibold animate-pulse-glow'>The Tales of Annapurna</motion.h1>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.8, delay: 1.4, ease: "easeOut" }}
                    className='absolute  -bottom-2 left-0 h-0.5 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 origin-center'
                    style={{
                        width: '100%',
                        boxShadow: '0 0 10px #ff8c00, 0 0 20px #ff4500, 0 0 30px #dc143c'
                    }}
                />
            </div>
            <div style={{ fontFamily: cinzel.style.fontFamily }} className='flex gap-x-5 mt-4 text-3xl'>
                <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 3.0 }} >A myth reborn</motion.h3>
                <motion.span className='text-4xl animate-float' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 3.0 }}>•</motion.span>
                <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 3.0 }}>A city eternal</motion.h3>
            </div>
            <Button
                label='Wishlist Now'
                className='px-4 py-2 mt-5 text-xl bg-red-500 text-white rounded hover:bg-red-600 hover:cursor-pointer'
                initialOpacity={0}
                animateOpacity={1}
                transitionDuration={0.5}
                transitionDelay={3.9}
            />
            <div className='flex mt-6 gap-x-4'>
                <Button
                    icon={<img src={pc.src} alt="PC Icon" className="w-6 h-6" />}
                    className='px-4 py-2 mt-5 text-xl text-black rounded hover:cursor-pointer flex items-center bg-white'
                    initialOpacity={0}
                    animateOpacity={1}
                    transitionDuration={0.7}
                    transitionDelay={4.2}
                />
                <Button
                    icon={<img src={ps.src} alt="PlayStation Icon" className="w-6 h-6" />}
                    className='px-4 py-2 mt-5 text-xl text-black rounded hover:cursor-pointer flex items-center bg-white'
                    initialOpacity={0}
                    animateOpacity={1}
                    transitionDuration={0.7}
                    transitionDelay={4.2}
                />
                <Button
                    icon={<img src={xbox.src} alt="Xbox Icon" className="w-6 h-6" />}
                    className='px-4 py-2 mt-5 text-xl text-black bg-white rounded hover:cursor-pointer flex items-center'
                    initialOpacity={0}
                    animateOpacity={1}
                    transitionDuration={0.7}
                    transitionDelay={4.2}
                    hoverScale={1.1}
                />
            </div>
            
            <motion.div 
                className="absolute bottom-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 5.3 }}
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