"use client"

import { Eye } from "./Eye"

function Eyes() {
  return (
    <div className="flex gap-8 items-center justify-center">
        <div className="bg-white rounded-xl">
            <Eye isRightEye={false} />
        </div>
        <div className="bg-white rounded-xl">
            <Eye isRightEye={true} />
        </div>
    </div>
  )
}

function BubbleChat() {
  return (
    <div className="absolute -top-10 -left-30 z-10">
      <p className="text-2xl font-bold uppercase">
        <span className="bg-sky-400 text-black px-4 py-2 ml-3 border-4 border-black shadow-[4px_4px_0px_black] transform -rotate-10 inline-block">
          Hmm… apa isinya ya?
        </span>

      </p>
    </div>
  )
}

function Monster() {
  return (
    <div
      className="bg-sky-300 relative shrink-0 h-[460px] w-full rounded-t-[32px] overflow-hidden"
      data-name="monster"
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className="px-6 py-16">
          <Eyes />
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return <div className="relative w-full text-center"></div>
}

export function EyeCard() {
  return (
    <div className="relative">
        <BubbleChat/>
        <div className="bg-yellow-50 border-4 rounded-[36px] shadow-xl overflow-hidden w-full max-w-[460px] relative">
            <div className="flex flex-col justify-center items-center p-6">
                <Monster />
                <Hero />
            </div>
        </div>
    </div>
  )
}
