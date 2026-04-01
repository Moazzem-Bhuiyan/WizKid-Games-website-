'use client'

import { motion } from "motion/react";
import logo from '../../assets/Logo/wizkid logo.svg'
import { useEffect, useState } from 'react'

export default function AnimatedLogo() {
  const [mounted, setMounted] = useState(false)

  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.92,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex justify-center items-center">
      <div
        className="relative flex items-center justify-center"
        style={{
          width: '80%',
        }}
      >
        <motion.img
          src={logo.src}
          alt="WizKid Games"
          variants={logoVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"} // ✅ hydration safe
          width={5500}
          height={5500}
          className="relative z-10 w-full"
          style={{
            willChange: 'transform, opacity', // 🔥 performance boost
            filter: `
              drop-shadow(0 0 12px rgba(201,168,76,0.55))
              drop-shadow(0 0 30px rgba(201,168,76,0.3))
              drop-shadow(0 0 60px rgba(201,168,76,0.15))
              drop-shadow(0 2px 8px rgba(0,0,0,0.8))
            `,
            animation:
              'logoFloat 5s ease-in-out infinite, logoGlowPulse 3.8s ease-in-out infinite',
            animationFillMode: 'both',
          }}
        />
      </div>

      <style>{`
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-7px); }
        }

        @keyframes logoGlowPulse {
          0%, 100% {
            filter:
              drop-shadow(0 0 12px rgba(201,168,76,0.55))
              drop-shadow(0 0 30px rgba(201,168,76,0.3))
              drop-shadow(0 0 60px rgba(201,168,76,0.15))
              drop-shadow(0 2px 8px rgba(0,0,0,0.8));
          }
          50% {
            filter:
              drop-shadow(0 0 20px rgba(201,168,76,0.85))
              drop-shadow(0 0 50px rgba(201,168,76,0.45))
              drop-shadow(0 0 90px rgba(201,168,76,0.2))
              drop-shadow(0 2px 8px rgba(0,0,0,0.8));
          }
        }
      `}</style>
    </div>
  )
}