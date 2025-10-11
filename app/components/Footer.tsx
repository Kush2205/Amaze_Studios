import React from 'react'
import { motion } from "motion/react"
import { Cinzel } from 'next/font/google'
import Divider from '../ui/divider'
import NotifyForm from '../ui/NotifyForm'
import amaze from "../../public/amaze_logo.svg"

const cinzel = Cinzel({ subsets: ['latin'] })

function Footer() {
  // Function to handle the notification form submission
  const handleNotify = (name: string, email: string) => {
    // You would typically send this to your API or service
    console.log("Notification request:", { name, email })
  }

  // Get current year for copyright
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black text-white pb-8 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Top section with logo and divider */}
        <motion.div 
          className="flex justify-center pt-16 pb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center">
            <motion.img 
              src={amaze.src} 
              alt="Amaze Studios Logo" 
              className="w-16 h-16 bg-white rounded-xl mb-4"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.h2 
              className={`text-2xl ${cinzel.className} mb-1`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              AMAZE STUDIOS
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Divider width="240px" height={1} glowIntensity={4} />
            </motion.div>
          </div>
        </motion.div>

        {/* Main content section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Newsletter subscription */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <NotifyForm onSubmit={handleNotify} />
          </motion.div>

          {/* Social media and contact links */}
          <motion.div 
            className="flex flex-col items-center justify-center"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl mb-6 ${cinzel.className}`}>Connect With Us</h3>
            
            <div className="flex space-x-8">
              {/* Discord Icon */}
              <motion.a 
                href="https://discord.gg/kV3HMVfYde" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="text-white hover:text-[#5865F2]"
              >
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                  <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
                </svg>
              </motion.a>
              
              {/* Instagram Icon */}
              <motion.a 
                href="https://www.instagram.com/amaze.studios/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="text-white hover:text-[#E4405F]"
              >
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </motion.a>
              
              {/* LinkedIn Icon */}
              <motion.a 
                href="https://www.linkedin.com/company/amazestudioss/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="text-white hover:text-[#0A66C2]"
              >
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
              </motion.a>
              
              {/* YouTube Icon */}
              <motion.a 
                href="https://www.youtube.com/@AmazeStudioss" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="text-white hover:text-[#FF0000]"
              >
                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                </svg>
              </motion.a>
            </div>
            
            <motion.div 
              className="mt-8 text-center text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="mb-2">
                <a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a> • <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              </p>
              <p className="mb-2">
                <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a> • <a href="#" className="hover:text-orange-400 transition-colors">Support</a>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom copyright section */}
        <motion.div 
          className="text-center text-sm text-gray-500 pt-6 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} Amaze Studios. All rights reserved. <br className="md:hidden" />The Tales of Annapurna™ is a trademark of Amaze Studios.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer