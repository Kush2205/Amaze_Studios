import React from 'react'
import {motion} from "motion/react"

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  icon?: React.ReactNode;
  initialOpacity?: number;
  animateOpacity?: number;
  transitionDuration?: number;
  transitionDelay?: number;
  hoverScale?: number;
}

function Button({ label, onClick, disabled, style, className, icon, initialOpacity, animateOpacity, transitionDuration, transitionDelay, hoverScale }: ButtonProps) {
  return (
    <motion.button
        initial={{ opacity: initialOpacity ?? 0, scale: 1 }}
        animate={{ opacity: animateOpacity ?? 1, scale: 1 }}
        whileHover={{ scale: hoverScale ?? 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ 
          opacity: { duration: transitionDuration ?? 0.5, delay: transitionDelay ?? 0 },
          scale: { duration: 0.2 }
        }}
        onClick={onClick}
        disabled={disabled}
        className={className}
    >
      {icon && <span className="icon">{icon}</span>}
      {label}
    </motion.button>
  )
}

export default Button;