import React, { use } from 'react'
import Card from '../ui/Card'
import { useRef } from 'react'
import { useScroll, motion, useTransform } from 'motion/react'

function TrailerSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  
  const x = useTransform(scrollYProgress, [0, 0.7, 1], ['0%', '-66.67%', '-66.77%'])
  
  const dividerWidth = useTransform(scrollYProgress, [0, 0.7], ['0%', '80%'])
  
  return (
    <div ref={ref} className='w-full h-[300vh]'>
      <div className='sticky top-0 h-screen overflow-hidden flex flex-col py-4 md:py-0'>
        
        <div className="flex-1 overflow-hidden flex items-center">
          <motion.div 
            style={{ x }} 
            className='w-[300vw] h-full flex items-center'
          >
            <div className="w-screen h-full flex items-center justify-center">
              <Card title='Enter the Eternal City'
                description='The Tales of Annapurna by Amaze Studios is a cinematic action-adventure set in Kashi, where myth and legend awaken. Built with scanned real-world assets, every ghat, alley, and temple immerses you in the soul of the eternal city.'
              />
            </div>
            <div className="w-screen h-full flex items-center justify-center">
              <Card title='Awaken Your Destiny'
                description='When shadows rise and Rakshasas return, the balance of the world hangs by a thread. You step into the journey of Sati, a common girl, unaware of her divine destiny. Through her eyes, you will face demons born of ancient tales and uncover truths hidden in sacred myths.'
              />
            </div>
            <div className="w-screen h-full flex items-center justify-center">
              <Card title='Master Ancient Combat'
                description='Combat flows with the grace and power of Kalarippayattu, an ancient martial art brought to life with unprecedented intensity. Every battle, every choice, draws you closer to the divine spark waiting within. This is not just an adventure—it is a myth reborn, a story of destiny unfolding in the heart of India eternal city.'
              />
            </div>
          </motion.div>
        </div>
        
        
        <div className="w-full py-6 flex justify-center items-center z-10 mb-10 px-8">
          <motion.div
            style={{ 
              width: dividerWidth,
              boxShadow: '0 0 10px rgba(255, 95, 0, 0.7), 0 0 20px rgba(255, 128, 0, 0.4)'
            }}
            className="rounded-full h-[2px] bg-orange-500"
          />
        </div>
      </div>
    </div>
  )
}

export default TrailerSection