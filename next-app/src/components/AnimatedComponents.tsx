"use client"
import type {HTMLMotionProps} from "motion/react"
import {motion} from "motion/react";
import {ReactNode} from "react";

type Props = {
  children: ReactNode | string
  className?: string,
  initialColor?: string,
  whileHoverColor?: string,
}

export function AnimatedButton({className, children, initialColor, whileHoverColor, ...props}: Props & HTMLMotionProps<"button">) {
  return (
      <motion.button
        initial={{scale: 1, color: initialColor ?? "var(--color-text-secondary)"}}
        whileHover={{scale: 1.1, color: whileHoverColor ?? "var(--color-accent-purple-glow)"}}
        whileTap={{scale: 0.95}}
        transition={{duration: 0.1}}
        className={`cursor-pointer ${className}`}
        {...props}>
        {children}
      </motion.button>
  )
}

export function AnimatedLink({className, children, initialColor, whileHoverColor, ...props}: Props & HTMLMotionProps<"a">) {
  return (
    <motion.a
      initial={{scale: 1, color: initialColor ?? "var(--color-text-secondary)"}}
      whileHover={{scale: 1.1, color: whileHoverColor ?? "var(--color-accent-purple-glow)"}}
      whileTap={{scale: 0.95}}
      transition={{duration: 0.1}}
      className={`cursor-pointer ${className}`}
      {...props}>
      {children}
    </motion.a>
  )
}