import React from 'react'
import { motion } from "motion/react"

interface ScrollIndicatorProps {
  width?: number;
  height?: number;
  color?: string;
  scrollLineColor?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  width = 30,
  height = 50,
  color = "#FF5F00",  // Default to orange
  scrollLineColor = "#FFFFFF"  // Default to white
}) => {
  return (
    <div className="flex flex-col items-center gap-2 mb-10">
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 30 50" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: "drop-shadow(0 0 3px rgba(255, 95, 0, 0.5))" }}
      >
        {/* Mouse outline with increased stroke width */}
        <rect 
          x="1" 
          y="1" 
          width="28" 
          height="48" 
          rx="14" 
          stroke={color} 
          strokeWidth="2.5" 
          fill="transparent" 
        />
        
        {/* Scroll wheel/line */}
        <motion.rect
          x="14"
          y="10"
          width="3"  // Slightly wider line
          height="14"  // Slightly longer line
          rx="1.5"
          fill={scrollLineColor}
          initial={{ y: 0, opacity: 1 }}
          animate={{ 
            y: [0, 15, 0],
            opacity: [1, 0.7, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
      
    </div>
  )
}

export default ScrollIndicator