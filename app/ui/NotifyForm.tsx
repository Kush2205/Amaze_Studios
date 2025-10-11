import React, { useState } from 'react'
import { motion } from "motion/react"
import { Cinzel } from 'next/font/google'
import Divider from './divider'

const cinzel = Cinzel({ subsets: ['latin'] })

interface NotifyFormProps {
  onSubmit?: (name: string, email: string) => void
}

function NotifyForm({ onSubmit }: NotifyFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email) {
      setIsSubmitting(true)
      setError('')
      
      try {
        // Submit to Google Sheets via API
        const response = await fetch('/api/wishlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email }),
        })
        
        const data = await response.json()
        
        if (data.success) {
          if (onSubmit) onSubmit(name, email)
          setIsSubmitted(true)
          
          // Dispatch custom event to update wishlist count
          window.dispatchEvent(new CustomEvent('wishlistUpdated'))
          
          setTimeout(() => {
            setName('')
            setEmail('')
            setIsSubmitted(false)
          }, 3000)
        } else {
          setError('Failed to submit. Please try again.')
        }
      } catch (err) {
        console.error('Error submitting form:', err)
        setError('Failed to submit. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    }
  }
  
  return (
    <motion.div 
      className="w-full max-w-md mx-auto py-8 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 
        className={`text-3xl text-white text-center mb-2 ${cinzel.className}`}
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Stay Updated
      </motion.h2>
      
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Divider width="70%" height={1} glowIntensity={5} />
      </motion.div>
      
      <motion.p 
        className="text-gray-300 text-center mb-6 mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Be the first to know when The Tales of Annapurna releases
      </motion.p>
      
      {!isSubmitted ? (
        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-black/50 border-[1px] border-orange-500/50 focus:border-orange-400 text-white rounded-md outline-none"
              whileFocus={{ 
                boxShadow: "0 0 10px rgba(255, 95, 0, 0.6)",
                borderColor: "rgba(255, 95, 0, 0.8)" 
              }}
              required
            />
          </div>
          <div>
            <motion.input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-black/50 border-[1px] border-orange-500/50 focus:border-orange-400 text-white rounded-md outline-none"
              whileFocus={{ 
                boxShadow: "0 0 10px rgba(255, 95, 0, 0.6)",
                borderColor: "rgba(255, 95, 0, 0.8)" 
              }}
              required
            />
          </div>
          <div className="pt-2">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={ !isSubmitting ? { 
                scale: 1.02,
                boxShadow: "0 0 15px rgba(255, 95, 0, 0.7)" 
              } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {isSubmitting ? 'Submitting...' : 'Notify Me'}
            </motion.button>
          </div>
          {error && (
            <motion.p 
              className="text-red-400 text-sm text-center mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.p>
          )}
        </motion.form>
      ) : (
        <motion.div 
          className="bg-black/30 border border-green-500/50 rounded-md p-4 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          style={{ boxShadow: "0 0 15px rgba(34, 197, 94, 0.3)" }}
        >
          <svg className="w-10 h-10 text-green-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-white">Thank you! We&apos;ll keep you updated about the release.</p>
        </motion.div>
      )}
    </motion.div>
  )
}

export default NotifyForm