import React from 'react'
import { easeIn, motion } from "motion/react"
import { Cinzel } from 'next/font/google';
import amaze from "../../public/amaze_logo.svg"
const cinzel = Cinzel({ subsets: ['latin'] });
interface NavBarItemProps {
    itemLabel: string;
    onClickHandler: () => void;
}

function Navbar() {

    function NavBarItem({ itemLabel, onClickHandler }: NavBarItemProps) {
        return (
            <div className='flex flex-col items-center group relative'>
                <motion.h1
                    className={`cursor-pointer text-white relative z-10 ${cinzel.className}`}
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
        <div className='flex justify-center absolute top-0 left-0 w-full p-4 z-20'>
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
                    <div className='flex items-center justify-center'>
                        <img src={amaze.src} alt="Amaze Studios Logo" className="w-12 h-12 bg-white rounded-xl" />
                    </div>
                    <div className='flex gap-x-8'>
                        <NavBarItem itemLabel='Home' onClickHandler={() => { }} />
                        <NavBarItem itemLabel='About' onClickHandler={() => { }} />
                        <NavBarItem itemLabel='Trailer' onClickHandler={() => { }} />
                        <NavBarItem itemLabel='Community' onClickHandler={() => { }} />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar;