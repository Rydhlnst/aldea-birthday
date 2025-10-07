 
"use client"

import { useEffect, useState } from "react"
import LoadingOverlay from "@/components/layout/LoadingOverlay"
import LockedScreen from "@/components/layout/LockedScreen"
import { HeroParallaxDemo } from "@/components/layout/MemoryGallery"
import QuizPage from "@/components/layout/QuestionPage"
import EyePage from "@/components/EyePage"
import WishesFromMe from "@/components/layout/WishesFromMe"
import HeroSection from "@/components/layout/HeroSection"
import BrutalismPassword from "@/components/layout/PasswordPage"
import CarouselForAldea from "@/components/layout/CarouselForAldea"
import FunFactKanbanCarousel from "@/components/layout/FunFactAboutAldea"

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [canAccess, setCanAccess] = useState(false)
  const [quizPassed, setQuizPassed] = useState(false) 


  // Simulasi loading & akses
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)

      const now = new Date()
      const targetDate = new Date("2025-10-08T00:00:00")
      if (now >= targetDate) setCanAccess(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  // Jika masih loading
  if (isLoading) return <LoadingOverlay />

  if(!canAccess) return <LockedScreen/>

  // Jika belum lolos quiz
  if (!quizPassed) return <QuizPage onSuccess={() => setQuizPassed(true)} />

  return (
    <main className="min-h-screen overflow-hidden">
      
      <section className="min-h-screen">
        <HeroSection />
      </section>

      <section className="min-h-screen" id="gallery">
        <HeroParallaxDemo />
      </section>

      <section className="h-full min-h-screen">
        <CarouselForAldea />
      </section>

      <section className="h-full min-h-screen" id="funfacts">
        <FunFactKanbanCarousel />
      </section>

      <section className="min-h-screen md:min-h-min h-full" id="wish">
        <WishesFromMe />
      </section>

      <section className="min-h-screen h-full">
        <EyePage />
      </section>

      <section className="min-h-screen h-full">
        <BrutalismPassword />
      </section>

      {/* <section className="h-screen relative border-y-4 border-b">
        <DiagonalBanner degree={93} top="170%" left="12.3%" className='hidden lg:block'/>
      </section> */}

    </main>
  )
}
