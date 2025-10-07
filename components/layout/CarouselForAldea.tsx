"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

// [Content Change] Data untuk setiap slide carousel
const specialThings = [
  {
    bgColor: "bg-green-300",
    title: "Your Voicee",
    description: "HAHAHHAAH, sama ajaa sih sebenarnyaa, aku dari awal emangg masih suka suaramuu, walaupun kadang orang sanaa pernah bilang aneh suaranyaa.",
  },
  {
    bgColor: "bg-lime-300",
    title: "APAAA YA",
    description: "UMMMMMMMMMMMM, mari ingatt2 orangnya pantang menyerah ga sihhhhh? aku suka deh sisimu ituu, yaa aku berharap kamu selalu tetap positiff",
  },
  // {
  //   bgColor: "bg-sky-300",
  //   title: "Your Quirky Sense of Humor",
  //   description: "From silly jokes to your heartfelt laughter, being with you is always fun. The world feels lighter and funnier with you in it.",
  // },
  {
    bgColor: "bg-fuchsia-300",
    title: "RAMAH KALI GATAU DAH mungkin iya",
    description: "GIMANAA YAA, akuu gatau ini kau hanya gabut aja apa gimanaa??? tapi aku senang bisa ngobrol amamu berjam2 yaa walaupun emang ga boleh berharap apaa2",
  },
  {
    bgColor: "bg-orange-300",
    title: "The Way You Make Me Feel",
    description: "Saat aku ngobrol amamuu, aku sebenarnya ngerasa bisa nyeritai semuanya ke kamuu. You feel like home. Tapii kadang aku takut kamu risihhh apalagi setelah hmmmmmm, dan apalagi ada kating2 tuhh.",
  },
];

const CarouselForAldea = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="mx-auto max-w-7xl w-full min-h-screen flex flex-col justify-center items-center gap-8 p-4 md:pt-12 ">
      
      {/* [UI Change] Tipografi dibuat lebih berani */}
      <Card className="border-none shadow-none max-w-sm sm:max-w-md lg:max-w-lg mx-auto flex justify-center items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight text-center">
          <span className="bg-red-400 text-black px-3 py-1 mx-2 sm:mx-3 border-4 border-black shadow-[4px_4px_0px_black] transform -rotate-1 inline-block">
            Things
          </span> that are
          <span className="bg-sky-400 text-black px-3 py-1 mx-2 sm:mx-3 border-4 border-black shadow-[4px_4px_0px_black] transform -rotate-1 inline-block">
            special
          </span>
          about
          <span className="bg-emerald-400 text-black px-3 py-1 ml-2 sm:ml-3 border-4 border-black shadow-[4px_4px_0px_black] transform rotate-1 inline-block">
            Aldea
          </span>
        </h1>
      </Card>
      
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {/* [Content Change] Mapping dari array specialThings */}
          {specialThings.map((thing, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                {/* [UI Change] Inilah inti dari gaya Colorful Brutalist:
                  - bg-...          : Warna latar solid yang cerah (berubah-ubah tiap slide)
                  - border-4        : Border tebal
                  - border-black    : Warna border hitam
                  - rounded-none    : Sudut tajam, tidak melengkung
                  - shadow-[...]    : Efek bayangan keras, tidak blur
                */}
                <Card className={`${thing.bgColor} border-4 border-black rounded-none shadow-[8px_8px_0px_#000]`}>
                  <CardContent className="flex flex-col gap-4 aspect-video items-center justify-center p-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-black">{thing.title}</h2>
                    <p className="text-lg md:text-xl font-medium text-black/80">{thing.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-4 border-black bg-white hover:bg-black hover:text-white transition-colors" />
        <CarouselNext className="border-4 border-black bg-white hover:bg-black hover:text-white transition-colors" />
      </Carousel>
      
      {/* [UI Change] Mengubah style teks counter */}
      <div className="text-black py-2 text-center text-lg font-bold">
        Slide {current} of {count}
      </div>
    </div>
  )
}

export default CarouselForAldea