import React from 'react'
import { Cinzel } from 'next/font/google';
import Divider from './divider';
import { motion } from 'motion/react';
import Image from 'next/image';

const cinzel = Cinzel({ subsets: ['latin'] });

interface CardProps {
    title?: string;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
    reverse?: boolean;
    className?: string;
    children?: React.ReactNode;
}

function Card({ title, description, imageSrc, imageAlt, reverse = false, className, children }: CardProps) {
  return (
    <motion.div 
      className={`w-[100vw] snap-center px-6 md:px-12 lg:px-16 py-8 flex items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col space-y-8">
          
         
          <div className="w-full flex flex-col justify-center space-y-4">
            {title && (
              <motion.h2 
                className={`text-3xl md:text-4xl lg:text-5xl text-center font-bold ${cinzel.className} text-white leading-tight`}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{ 
                  textShadow: '0 0 20px rgba(255, 95, 0, 0.8), 0 0 40px rgba(255, 128, 0, 0.5)'
                }}
              >
                {title}
              </motion.h2>
            )}
            
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Divider width="80%" height={2} glowIntensity={8} animate={false} />
            </motion.div>
            
            {description && (
              <motion.p 
                className={`text-gray-300 text-center text-base md:text-lg lg:text-xl ${cinzel.className} leading-relaxed max-w-3xl mx-auto px-4`}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {description}
              </motion.p>
            )}
          </div>
          
         
          <motion.div 
            className="w-full h-[40vh] md:h-[40vh] relative overflow-hidden rounded-xl border border-orange-500/30"
            style={{ 
              boxShadow: '0 0 30px rgba(255, 95, 0, 0.2), 0 0 60px rgba(255, 128, 0, 0.1)'
            }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              boxShadow: '0 0 40px rgba(255, 95, 0, 0.3), 0 0 80px rgba(255, 128, 0, 0.15)',
              scale: 1.02
            }}
          >
            {imageSrc ? (
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img 
                  src={imageSrc} 
                  alt={imageAlt || title || 'Card image'} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ) : (
              <div className="w-full h-full bg-black/60 flex items-center justify-center">
                <span className={`text-white/40 text-2xl ${cinzel.className}`}>Image Placeholder</span>
              </div>
            )}
            
            
            <div className="absolute inset-0 bg-black/10" />
            
            
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent" 
                 style={{ boxShadow: '0 0 10px rgba(255, 95, 0, 0.6)' }} />
          </motion.div>
          
          {children && (
            <motion.div 
              className="w-full"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Card