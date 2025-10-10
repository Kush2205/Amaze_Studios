import React from 'react'
import { motion } from "motion/react"
import { Cinzel } from 'next/font/google'
import Divider from '../ui/divider'
const cinzel = Cinzel({ subsets: ['latin'] })

function Trailer() {

  const youtubeVideoId = "dQw4w9WgXcQ";

  return (
    <motion.div
      className='w-full  justify-center items-center flex gap-x-10 bg-black text-white p-10 overflow-hidden'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: false }}
        className='w-[50%] h-full flex flex-col items-center gap-y-8'
      >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <h1 style={{ fontFamily: cinzel.style.fontFamily }} className='text-5xl font-semibold mb-4'>Enter the Eternal City</h1>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Divider width='100%' color='#FF5F00' height={2} glowColor='#FF8000' glowIntensity={6} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: false }}
        >
          <p className='text-lg text-center' style={{ fontFamily: cinzel.style.fontFamily }}>
            The Tales of Annapurna by Amaze Studios is a cinematic action-adventure set in Kashi, where myth and legend awaken. Journey through breathtaking photogrammetry environments, face legendary Rakshasas, and uncover the divine within.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className='w-[50%] h-full relative overflow-hidden rounded-lg shadow-lg'
        initial={{ x: 100, opacity: 0, scale: 0.9 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
        viewport={{ once: false }}
      >
        <div className="relative w-full h-0 pb-[56.25%]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: false }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0&mute=0&controls=1&rel=0&modestbranding=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-0 border-2 border-[#FF5F00] rounded-lg pointer-events-none"
          style={{ boxShadow: "0 0 15px rgba(255, 95, 0, 0.5)" }}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            boxShadow: [
              "0 0 15px rgba(255, 95, 0, 0.5)",
              "0 0 20px rgba(255, 95, 0, 0.7)",
              "0 0 15px rgba(255, 95, 0, 0.5)"
            ]
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.9 },
            scale: { duration: 0.8, delay: 0.9 },
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default Trailer