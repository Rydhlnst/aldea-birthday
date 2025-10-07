/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'
import { Gift, Clock, Cat } from 'phosphor-react'
import { Card } from '@/components/ui/card'

const formatTime = (time: number) => String(time).padStart(2, '0')

const noodleData = [
  { left: '10%', delay: 0.5, duration: 8 },
  { left: '30%', delay: 1.2, duration: 7 },
  { left: '50%', delay: 2.5, duration: 9 },
  { left: '70%', delay: 0.8, duration: 6.5 },
  { left: '90%', delay: 1.8, duration: 7.5 },
]

const LockedScreen = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-10-08T00:00:00') - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  })

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: ['easeOut'] } },
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-white text-black flex items-center justify-center overflow-hidden font-mono">
      {/* Falling Cats dengan efek lebih kasar dan opacity rendah */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {noodleData.map((cat, index) => (
          <motion.div
            key={index}
            className="absolute text-3xl opacity-10 blur-[0.5px] drop-shadow-[2px_2px_0_rgba(0,0,0,1)]"
            style={{ top: '-80px', left: cat.left }}
            animate={{
              y: '100vh',
              rotate: [0, 25, -25, 0],
              opacity: [0.1, 0.05, 0.1],
            }}
            transition={{
              repeat: Infinity,
              duration: cat.duration,
              delay: cat.delay,
              ease: 'linear',
            }}
          >
            <Cat weight="fill" />
          </motion.div>
        ))}
      </div>

      {/* Main Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md px-6"
      >
        <Card
          className="
            bg-white 
            border-8 border-black 
            rounded-none 
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
            p-8 
            text-center
            tracking-wide
            select-none
          "
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 w-24 h-24 mx-auto border-4 border-black rounded-none flex items-center justify-center bg-pink-400 text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            <Gift size={48} weight="fill" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl font-extrabold uppercase border-b-4 border-black pb-2 mb-4 tracking-widest"
          >
            A SPECIAL SURPRISE IS WAITING
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg font-semibold mb-6"
            style={{ letterSpacing: '0.12em' }}
          >
            Hang tight, <span className="underline decoration-black decoration-4">Aldeaa</span>. Something big is coming.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-6">
            <div className="flex justify-center items-center gap-2 mb-3 text-black font-bold uppercase tracking-widest">
              <Clock size={18} />
              <span>UNLOCKS IN</span>
            </div>

            <div className="flex justify-center items-center  gap-4 font-bold uppercase tracking-widest text-black">
              {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                <div
                  key={unit}
                  className="w-20 p-4 bg-white border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  <div className="text-3xl">{formatTime((timeLeft as any)[unit])}</div>
                  <div className="text-xs text-center">{unit}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm italic mt-6 text-black border-t-4 border-black pt-4 tracking-widest"
          >
            Good things come to those who wait...
          </motion.p>
        </Card>
      </motion.div>
    </div>
  )
}

export default LockedScreen
