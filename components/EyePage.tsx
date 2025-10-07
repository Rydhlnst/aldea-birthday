import React from 'react'
import { EyeCard } from './eyecard/EyeCard'
import { Deck, DeckCards, DeckEmpty, DeckItem } from './ui/kibo-ui/deck'
import Image from 'next/image'

const messages = [
  { id: 1, text: "HAHAHA, ya udah sampai sini aja ya. Pesannya singkat sih, tapi coba kamu geser-geser kartunya, aku jujur aja, ini tipis-tipis banget akwkwwk." },
  { id: 2, text: "UMMMMMMMMMMMMMMMMMM" },
  { id: 3, text: "SEBENARNYA DARI LAMA NIH, aku pengen banget dekat lagi sama kamu. Cuman gatauu dahh takut ganggu hubunganmu sih." },
  { id: 4, text: "Semoga kamu nggak keberatan yaa. MISALNYA aku ada gamon dikit? ga sihh jangan gitu" },
  { id: 5, text: "Ya, dan terakhirr kek tadi aku bilang 'Ternyata aku salahh' karena aku sering merhatiin repostanmu sihh, sebenarnya yaa aku hanya pengen coba validasi hasil temuan akuu dengan nanyai funfactmu AWOKWKWKKW dahla marah keknya ini, tapii kau tau pasti aku sering liat repostanmu dulunyaa" },
]


const colors = [
  'bg-yellow-300',
  'bg-pink-400',
  'bg-sky-400',
  'bg-emerald-400',
  'bg-orange-400',
]

const DeckComponent = () => (
  <Deck className="h-[600px] w-[400px]">
    <DeckCards>
      {messages.map((msg, index) => (
        <DeckItem className="p-0" key={msg.id}>
          <div
            className={`h-[600px] w-[400px] ${colors[index % colors.length]} border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] rounded-none flex items-center justify-center p-6 text-center text-xl font-extrabold text-black uppercase tracking-tight transform rotate-[-1deg]`}
          >
            {msg.text}
          </div>
        </DeckItem>
      ))}
    </DeckCards>
    <DeckEmpty />
  </Deck>
)


const EyePage = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 relative"
      style={{ backgroundColor: 'var(--cookie-monster-blue)' }}
    >
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 w-full max-w-screen-xl items-center sm:items-start justify-center">
        {/* Left side: Character */}
        <div className="flex justify-center w-full sm:w-1/2 relative">
          <Image
            src="/ExclamationMark.svg"
            alt="Mark"
            width={100}
            height={100}
            className="size-40 rotate-12 absolute -top-20 right-0 z-30 border-4 border-black shadow-[5px_5px_0px_black] bg-white p-2"
          />
          <EyeCard />
        </div>

        {/* Right side: Deck */}
        <div className="flex justify-center w-full sm:w-1/2">
          <DeckComponent />
        </div>
      </div>
    </div>
  )
}

export default EyePage
