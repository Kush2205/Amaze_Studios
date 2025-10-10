import React from 'react'
import { motion } from "motion/react"

interface DividerProps {
  width?: string;
  color?: string;
  height?: number;
  glowColor?: string;
  glowIntensity?: number;
  animate?: boolean;
}

function Divider({
  width = '80%',
  color = '#FF5F00',
  height = 1,
  glowColor = '#FF8000',
  glowIntensity = 4,
  animate = false
}: DividerProps) {
  return (
    <div className="flex justify-center w-full my-6">
      <motion.div 
        className="rounded-full"
        style={{
          width,
          height: `${height}px`,
          backgroundColor: color,
          boxShadow: `0 0 ${glowIntensity}px ${glowColor}`,
        }}
        initial={animate ? { width: "0%" } : {}}
        animate={animate ? { width } : {}}
        transition={animate ? { duration: 1.2, ease: "easeOut" } : {}}
      />
    </div>
  )
}

export default Divider