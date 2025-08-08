"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Confetti from "react-confetti" // Library untuk efek confetti

// Passwordnya adalah nama dari gaya desain ini
const CLUE_PASSWORD = "kunci roblox tawa 31 oktober"

export default function BrutalismPassword() {
  const [input, setInput] = useState("")
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState("")
  const [isShaking, setIsShaking] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.toUpperCase() === CLUE_PASSWORD) {
      setUnlocked(true)
      setError("")
    } else {
      setError("Password salah! Coba perhatikan lagi petunjuknya.")
      // Trigger animasi shake
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500) // Durasi animasi 500ms
    }
  }

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-8 space-y-10 relative overflow-hidden">
      {/* --- Elemen Hiasan Latar --- */}
      {unlocked && <Confetti recycle={false} numberOfPieces={200} />}
      <Image src="/smile.svg" alt="smile" width={150} height={150} className="absolute top-10 left-10 -rotate-12 opacity-80" />
      <Image src="/heart.svg" alt="star" width={80} height={80} className="absolute bottom-20 right-10 rotate-12 opacity-80" />
      <Image src="/scribble.svg" alt="scribble" width={120} height={120} className="absolute bottom-1/4 left-20 -rotate-45 opacity-70" />
      <Image src="/jempol.svg" alt="scribble" width={120} height={120} className="absolute top-1/4 right-20 -rotate-45 opacity-70" />

      {/* --- Clue Section yang lebih interaktif --- */}
      <div className="max-w-xl text-center font-mono text-sm sm:text-base leading-relaxed text-gray-800 select-none z-10">
        <p className="bg-white/80 backdrop-blur-sm p-4 border-2 border-dashed border-gray-400">
          Hai Naila! Clue untuk jawaban ini ada di halaman website inii lhoo, coba kamu carii
          <br />
          <span className="font-bold mt-2 block">Kira-kira, apa saja gabungan katanyaa? dan ditambahh ama tanggal lahirkuu {"(kata kata kata tanggal lahir bulan lahir)"} dah yaa dah cukup, gampang sih iniii, aku gamau kamu kesusahan wlee</span>
        </p>
      </div>

      {/* --- Input form dengan animasi shake --- */}
      {!unlocked && (
        <Card
          className={cn(
            "w-full max-w-sm rounded-none border-4 border-black shadow-[8px_8px_0px_black] bg-white relative transition-transform duration-500",
            isShaking && "animate-shake"
          )}
        >
          <div className="absolute -top-10 -right-10 md:-right-16 z-10">
              <span className="bg-sky-400 text-black px-4 py-2 border-4 border-black shadow-[4px_4px_0px_black] transform rotate-12 inline-block font-bold uppercase text-lg md:text-xl">
                CARI TAU!
              </span>
          </div>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full">
              <label htmlFor="password" className="block text-black font-extrabold tracking-widest text-lg">
                Masukkan Password
              </label>
              <Input
                id="password"
                type="password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ketik jawabanmu di sini..."
                className="w-full text-center rounded-none border-4 border-black px-4 py-3 font-mono text-lg shadow-[4px_4px_0px_black] focus:outline-none focus:ring-4 focus:ring-pink-400 transition placeholder:text-gray-500"
              />
              {error && (
                <p className="text-red-600 bg-red-100 border-2 border-red-600 px-3 py-1 font-bold tracking-wide animate-pulse">{error}</p>
              )}
              <Button
                type="submit"
                className="w-full mt-2 rounded-none border-4 border-black bg-yellow-400 text-black font-bold shadow-[6px_6px_0px_black] hover:bg-pink-500 hover:text-white transition-all duration-200 active:shadow-none active:translate-x-[6px] active:translate-y-[6px]"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* --- Card sukses dengan animasi dan confetti --- */}
      {unlocked && (
        <Card className="w-full max-w-md rounded-none border-4 border-black shadow-[8px_8px_0px_black] bg-white animate-in fade-in zoom-in-95 duration-500 relative">
            <div className="absolute -top-10 -left-20 bg-white border-black border-4 -rotate-10 p-2 z-10 shadow-[8px_8px_0px_black]">
                <Image src={"/100.svg"} alt="100" width={70} height={70}/>
            </div>
          <CardHeader className="items-center text-center !pb-2">
            <CardTitle className="text-3xl font-extrabold tracking-wide text-sky-400">
              <span className="bg-pink-400 text-black px-3 py-1 mr-2 border-4 border-black shadow-[4px_4px_0px_black] transform -rotate-1 inline-block">
                BENAR
                </span>
                <span className="bg-blue-400 text-black px-3 py-1 border-4 border-black shadow-[4px_4px_0px_black] transform -rotate-1 inline-block">
                SEKALIII
                </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-lg font-semibold space-y-4">
            <p>
              Kamu berhasil! Jawabannya adalah  <span className="bg-green-400 text-black px-3 py-1 border-4 border-black shadow-[4px_4px_0px_black] transform -rotate-1 inline-block">
                kunci roblox tawa 31 oktober
                </span>
            </p>
            <Button
              onClick={() => (window.location.href = "/kejutan-selanjutnya")} // Ganti dengan link halaman selanjutnya
              className="w-full mt-2 rounded-none border-4 border-black bg-pink-500 text-white font-bold shadow-[6px_6px_0px_black] hover:bg-pink-600 transition-all duration-200 active:shadow-none active:translate-x-[6px] active:translate-y-[6px]"
            >
              Lihat Kejutanmu!
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}