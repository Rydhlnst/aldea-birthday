import Lottie from 'lottie-react'
import React, { useRef } from 'react'
import catHero from "@/public/animations/HeroCat.json"
import { Card } from '../ui/card'

const HeroSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lottieRef = useRef<any>(null)

const handleAnimationComplete = () => {
    lottieRef.current?.play()
  }

  return (
    <section className="h-screen flex pt-32 md:pt-32 justify-center relative">
        <div className="w-full h-1/2 grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center px-4">
          <div className="flex flex-col items-start text-start w-full md:w-fit">
            <Card className="border-none shadow-none max-w-sm sm:max-w-md lg:max-w-2xl mx-auto flex justify-center items-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight text-center">
                    <span className="bg-red-400 md:-rotate-3 -rotate-5 text-black px-3 py-1 mx-2 sm:mx-3 border-4 border-black shadow-[4px_4px_0px_black] transform inline-block">
                        Hai
                    </span> agen
                    <span className="bg-sky-400 text-black px-3 py-1 mx-2 sm:mx-3 border-4 border-black shadow-[4px_4px_0px_black] transform rotate-5 md:rotate-3 inline-block">
                        Aldea
                    </span>
                    <span className="bg-yellow-400 text-black px-3 py-1 mx-2 sm:mx-3 border-4 border-black shadow-[4px_4px_0px_black] transform -rotate-5 md:-rotate-3 inline-block">
                        misi kamu
                    </span> akan
                    <span className="bg-purple-400 text-black px-3 py-1 mx-2 sm:mx-3 border-4 border-black shadow-[4px_4px_0px_black] transform rotate-5 md:rotate-3 inline-block">
                        dimulai
                    </span>
                </h1>
            </Card>
            
          </div>

          <div className="text-lg md:text-xl max-w-xl mt-6 text-muted-foreground space-y-4 leading-relaxed">
            <p>
              Ciee nampaknya ini sudah waktunyaa yaa, Aku disini ingin memberi kamu sesuatuu, namun kamu harus baca semuanyaa nih, biar bisa bukaa treasurenyaa.
            </p>
            <p>
              Misi buatmuu: jelajahi halaman ini dengan saksama. Gulir ke bawah untuk membuka setiap petunjuk, mengumpulkan kepingan memori, dan mendekati hadiah utamanya.
            </p>
            <p>
              Di titik akhir, kamu akan ditampilkan sebuahh input buat masukii <span className="bg-purple-400 text-black font-black px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              &apos;kunci&apos;
            </span> untuk membuka small card darikuu. Siap?
            </p>
          </div>
        </div>

        <div className="w-full max-w-md mt-10 bottom-10 absolute md:flex flex-col items-start hidden">
          <Lottie
            animationData={catHero}
            lottieRef={lottieRef}
            onComplete={handleAnimationComplete}
            className="w-full h-auto"
            loop={true}
            autoplay
          />
        </div>

        <div className="absolute bottom-0 w-full md:w-1/2 h-10 bg-black md:rounded-t-2xl hidden md:flex" />
      </section>
  )
}

export default HeroSection
