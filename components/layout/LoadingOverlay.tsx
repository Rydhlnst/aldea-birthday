"use client"

import { useEffect, useRef, useState } from "react"
import Lottie from "lottie-react"
import { gsap } from "gsap"
import catLoader from "@/public/animations/Loader cat.json"

export default function LoadingOverlay() {
  const [loading, setLoading] = useState(true)

  const overlayRef = useRef<HTMLDivElement>(null)
  const catRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (catRef.current) {
      gsap.from(catRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
      })
    }
    if (textRef.current) {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.5, 
        ease: "power2.out",
      })
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0,
          y: -50,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            setLoading(false)
          },
        })
      }
    }, 5000) 

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center h-screen w-screen flex-col"
    >
      <div ref={catRef}>
        <Lottie animationData={catLoader} className="w-lg h-lg md:w-xl md:h-xl" />
      </div>
      <p
        ref={textRef}
        className="text-lg font-medium text-gray-600 -mt-4"
      >
        It takes a moment...
      </p>
    </div>
  )
}