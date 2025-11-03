'use client';
import React, { useState } from 'react'
import {  motion, AnimatePresence } from "motion/react"
import { Cinzel } from 'next/font/google';
import amaze from "../../public/amaze_logo.svg"
const cinzel = Cinzel({ subsets: ['latin'] });
interface NavBarItemProps {
    itemLabel: string;
    onClickHandler: () => void;
    mobile?: boolean;
}

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Smooth scroll to section
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsMenuOpen(false); // Close menu after navigation
    };

    function NavBarItem({ itemLabel, onClickHandler, mobile = false }: NavBarItemProps) {
        return (
            <div className={`flex flex-col items-center group relative ${mobile ? 'w-full py-4' : ''}`}>
                <motion.h1
                    className={`cursor-pointer text-white relative z-10 ${cinzel.className} ${mobile ? 'text-2xl' : ''}`}
                    onClick={onClickHandler}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {itemLabel}
                </motion.h1>
                <div className="h-0.5 w-full relative overflow-hidden">
                    <motion.div 
                        className='absolute inset-0 w-full h-0.5 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 origin-center transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300'
                    />
                </div>
            </div>
        )
    }

    return (
        <>
            {/* Desktop Navbar */}
            <div className='hidden md:flex justify-center absolute top-0 left-0 w-full p-4 z-20'>
                <div className="relative mt-4">
                    
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 4.5, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-full rounded-full"
                        style={{ zIndex: 5 }}
                    >
                        
                        <motion.div
                            style={{
                                position: 'absolute',
                                inset: "-1px", 
                                borderRadius: '9999px',
                                background: "linear-gradient(90deg, #FF3300, #FF5F00, #FF8000, #FF3300)",
                                backgroundSize: "300% 300%",
                                opacity: 0.7,
                            }}
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                                duration: 3, 
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        />
                      
                        <div className="absolute inset-[1px] bg-black/80 rounded-full" />
                    </motion.div>
                   
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 4.5, ease: "easeInOut" }}
                        className="rounded-full flex gap-x-20 p-5 px-6 items-center relative z-10"
                    >
                        <div className='flex items-center justify-center cursor-pointer' onClick={() => scrollToSection('home')}>
                            <img src={amaze.src} alt="Amaze Studios Logo" className="w-12 h-12 bg-white rounded-xl" />
                        </div>
                        <div className='flex gap-x-8'>
                            <NavBarItem itemLabel='Home' onClickHandler={() => scrollToSection('home')} />
                            <NavBarItem itemLabel='About' onClickHandler={() => scrollToSection('about')} />
                            <NavBarItem itemLabel='Trailer' onClickHandler={() => scrollToSection('trailer')} />
                            <NavBarItem itemLabel='Community' onClickHandler={() => scrollToSection('community')} />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className='md:hidden flex justify-between items-center absolute top-0 left-0 w-full p-4 z-20'>
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 4.5, ease: "easeInOut" }}
                    className='flex items-center justify-center cursor-pointer'
                    onClick={() => scrollToSection('home')}
                >
                    <img src={amaze.src} alt="Amaze Studios Logo" className="w-10 h-10 bg-white rounded-xl" />
                </motion.div>

                {/* Hamburger Button */}
                <motion.button
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 4.5, ease: "easeInOut" }}
                    className='relative z-30 w-10 h-10 flex flex-col justify-center items-center gap-1.5'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={{
                            rotate: isMenuOpen ? 45 : 0,
                            y: isMenuOpen ? 8 : 0,
                        }}
                        className='w-7 h-0.5 bg-white rounded-full'
                    />
                    <motion.span
                        animate={{
                            opacity: isMenuOpen ? 0 : 1,
                        }}
                        className='w-7 h-0.5 bg-white rounded-full'
                    />
                    <motion.span
                        animate={{
                            rotate: isMenuOpen ? -45 : 0,
                            y: isMenuOpen ? -8 : 0,
                        }}
                        className='w-7 h-0.5 bg-white rounded-full'
                    />
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className='md:hidden fixed top-0 right-0 w-full h-screen bg-black/95 backdrop-blur-lg z-20 flex flex-col items-center justify-center'
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                            className='absolute top-6 right-6 z-30 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors'
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>

                        {/* Logo at Top Center */}
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className='absolute top-16 left-1/2 -translate-x-1/2 cursor-pointer'
                            onClick={() => {
                                scrollToSection('home');
                                setIsMenuOpen(false);
                            }}
                        >
                            <img src={amaze.src} alt="Amaze Studios Logo" className="w-16 h-16 bg-white rounded-xl shadow-lg" />
                        </motion.div>

                        <div className="relative w-full h-full flex flex-col items-center justify-center gap-8 px-8 pt-24">
                            {/* Animated border */}
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    inset: "20px", 
                                    borderRadius: '20px',
                                    border: "2px solid transparent",
                                    background: "linear-gradient(90deg, #FF3300, #FF5F00, #FF8000, #FF3300)",
                                    backgroundSize: "300% 300%",
                                    opacity: 0.3,
                                    WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                transition={{
                                    duration: 3, 
                                    ease: "linear",
                                    repeat: Infinity,
                                }}
                            />
                            
                            <NavBarItem itemLabel='Home' onClickHandler={() => scrollToSection('home')} mobile />
                            <NavBarItem itemLabel='About' onClickHandler={() => scrollToSection('about')} mobile />
                            <NavBarItem itemLabel='Trailer' onClickHandler={() => scrollToSection('trailer')} mobile />
                            <NavBarItem itemLabel='Community' onClickHandler={() => scrollToSection('community')} mobile />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar;