'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Cinzel } from 'next/font/google'
import Divider from '../ui/divider'

const cinzel = Cinzel({ subsets: ['latin'] })

function Trailer() {
  return (
    <section className="w-full h-screen py-8 md:py-12 px-4 md:px-8 lg:px-16 flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="relative w-full max-w-6xl mx-auto z-10 h-full flex flex-col justify-center">
        
       
        <div className="flex flex-col items-center mb-6 md:mb-8 space-y-3 md:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold ${cinzel.className} text-white mb-2`}
              style={{ 
                textShadow: '0 0 30px rgba(255, 95, 0, 0.9), 0 0 60px rgba(255, 128, 0, 0.6), 0 4px 8px rgba(0, 0, 0, 0.8)'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Witness the Legend
            </motion.h2>
            
            <motion.p
              className={`text-lg md:text-xl text-orange-400 ${cinzel.className}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              style={{ textShadow: '0 0 10px rgba(255, 95, 0, 0.5)' }}
            >
              Experience the Awakening
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-full flex justify-center"
          >
            <Divider width="60%" height={2} glowIntensity={10} animate={true} />
          </motion.div>
        </div>
        
        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full max-w-4xl mx-auto"
        >
          {/* Glowing frame effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-2xl opacity-20 blur-xl animate-pulse" />
          
          <motion.div 
            className="relative rounded-xl overflow-hidden border-2 border-orange-500/40 shadow-2xl"
            style={{ 
              boxShadow: '0 0 40px rgba(255, 95, 0, 0.3), 0 0 80px rgba(255, 128, 0, 0.2), inset 0 0 60px rgba(255, 95, 0, 0.05)'
            }}
            whileHover={{ 
              scale: 1.01,
              boxShadow: '0 0 60px rgba(255, 95, 0, 0.5), 0 0 120px rgba(255, 128, 0, 0.3), inset 0 0 80px rgba(255, 95, 0, 0.08)'
            }}
            transition={{ duration: 0.4 }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent z-10" 
                 style={{ boxShadow: '0 0 10px rgba(255, 95, 0, 0.8)' }} />
            
            {/* Video embed - 16:9 aspect ratio */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0&modestbranding=1"
                title="Game Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: 'none' }}
              />
            </div>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent z-10" 
                 style={{ boxShadow: '0 0 10px rgba(255, 95, 0, 0.8)' }} />
          </motion.div>
        </motion.div>
        
        {/* Call to action text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-8 text-center"
        >
          <p className={`text-gray-400 text-base md:text-lg ${cinzel.className}`}>
            Embark on a journey where destiny meets divinity
          </p>
        </motion.div>
        
      </div>
    </section>
  )
}

export default Trailer
