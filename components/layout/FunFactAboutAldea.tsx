"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const funFacts = [
  "SUKA PAP RANDOM GATAUU KENAPAA? tapi gapapa sih aku seneng2 ajaa",
  "anak akuntan",
  "Hobii jajann sih ini seharusnya yaa",
  "Aldeaa suka orang tinggi seharusnyaa, gatau yang sekarang",
  "Keknya suka Jude Bellingham, maaf kalau nebak",
  "Pnya ambisi yang geedee, buktinya bisa KL YES dia 23/24 laluu cie cie cie ciee",
  "warna favmuu apaan de? aku lupaa hmmmm, bilang aja biru moga benarr",
  "ada marga nasution",
  "sipit kek cina, kaga juga sihh tapi sipit",
  "tinggal di mencirim xD",
  "Suka dimsum yakann, kalau suka yang lain sih aku dah gatauu",
  "punya mantan ganteng namanya Riyadhul, maaf kepedean",
  "suka matematika tapi gasuka akuntansi? apa karena pembukuan??",
  "suka kating.",
  "aku gatau lagi suka dengeri lagu apaan? tapi yang aku taumah sekarang hindia yaa? dulu 1D, sisanya gatau dahh",
  "ngeghosting aku",
  "suka maksa",
  "gila kegiatan organisasi",
  "ntah gatau isi apaa ummm, username 2nd ignya deezdey",
  "Aldea lucuu",
  "Aldea juga cantikk",
  "Menurutkuu kamu juga manis AOWKKWKWKWKKW, tapi gausah baper",
  "suka buat orang bingung",
  "sejujurnya aku gatau banyak hal baru darimu sih de, soalnya dikit kali yang kamu ceritaii, jadinya makan ini",
]

const brutalistColors = [
  "bg-red-400 border-red-600",
  "bg-blue-400 border-blue-600",
  "bg-green-400 border-green-600",
  "bg-yellow-400 border-yellow-600",
  "bg-purple-400 border-purple-600",
  "bg-pink-400 border-pink-600",
  "bg-orange-400 border-orange-600",
  "bg-cyan-400 border-cyan-600",
  "bg-lime-400 border-lime-600",
  "bg-rose-400 border-rose-600",
  "bg-indigo-400 border-indigo-600",
  "bg-amber-400 border-amber-600",
]

export default function FunFactKanbanCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
        <Card className="border-none shadow-none max-w-sm sm:max-w-md lg:max-w-lg mx-auto flex justify-center items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight text-center">
                Fun
                <span className="bg-sky-400 text-black px-3 py-1 mx-2 sm:mx-3 border-4 border-black shadow-[4px_4px_0px_black] transform -rotate-1 inline-block">
                facts
                </span>
                about
                <span className="bg-emerald-400 text-black px-3 py-1 ml-2 sm:ml-3 border-4 border-black shadow-[4px_4px_0px_black] transform rotate-1 inline-block">
                Aldeaa
                </span>
            </h1>
        </Card>


      <Carousel className="w-full" opts={{ align: "start" }}>
        <CarouselContent className="">
          {funFacts.map((fact, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2">
              <FlipCard
                index={index + 1}
                back={fact}
                color={brutalistColors[index % brutalistColors.length]}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-4 border-black bg-white hover:bg-black hover:text-white transition-colors" />
        <CarouselNext className="border-4 border-black bg-white hover:bg-black hover:text-white transition-colors" />
      </Carousel>
    </div>
  )
}

function FlipCard({
  index,
  back,
  color,
}: {
  index: number
  back: string
  color: string
}) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="aspect-square perspective cursor-pointer p-8" onClick={() => setFlipped(!flipped)}>
      <div
        className="relative w-full h-full transition-transform duration-700 preserve-3d"
        style={{ 
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Front Side */}
        <Card
          className={cn(
            "absolute w-full h-full flex items-center justify-center text-center p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200",
            color,
            "backface-hidden"
          )}
        >
          <div className="text-8xl md:text-9xl font-black text-black">
            {index.toString().padStart(2, '0')}
          </div>
        </Card>

        {/* Back Side */}
        <Card
          className={cn(
            "absolute w-full h-full flex items-center justify-center text-center p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-200",
            color,
            "backface-hidden rotate-y-180"
          )}
        >
          <p className="text-lg md:text-xl font-bold text-black leading-relaxed">
            {back}
          </p>
        </Card>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}