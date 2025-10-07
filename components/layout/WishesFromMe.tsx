"use client"
import { Card } from "@/components/ui/card"


export default function WishesFromMe() {
  return (
    <section className="w-full min-h-full flex items-center justify-center px-6 py-16 ">
        <Card className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto justify-items-center gap-8 rounded-none p-8 border-4 border-black shadow-[6px_6px_0px_black] bg-white">
            
            <div className="flex flex-col items-start justify-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase leading-tight">
                My
                <span className="bg-blue-400 text-black px-3 py-1 mx-3 border-4 border-black shadow-[4px_4px_0px_black] transform -rotate-1 inline-block">
                Wishes
                </span>
                for
                <span className="bg-red-400 text-black px-3 py-1 ml-3 border-4 border-black shadow-[4px_4px_0px_black] transform rotate-1 inline-block">
                Aldea
                </span>
            </h1>

            <p className="text-lg font-bold max-w-md">
                Sedikit kata dari hati terdalam nii, jangan nyakiti orang lain awokwkkwkwkwkwkkwkw, dahla marah nanti.
            </p>
            </div>

            {/* Right: Content Box */}
            <div className="w-full h-full flex items-center justify-center">
            <div className="bg-pink-300 border-4 border-black shadow-[4px_4px_0px_black] p-6 w-full md:w-[90%] rounded-none">
                <p className="text-lg md:text-xl font-semibold leading-relaxed">
                Hai Aldea,  
                Semoga ulang tahunmu penuh <span className="bg-purple-400 text-black px-3 py-1 mx-1 border-4 border-black shadow-[4px_4px_0px_black] transform -rotate-1 inline-block">
                tawa
                </span>, kebahagiaan, dan segala hal baik yang kamu impikan!  
                Tetaplah menjadi pribadi yang hangat dan menginspirasi. duh GPT kali yaa xD, semogaa kamu selalu jadi orang positif dah
                </p>
            </div>
            </div>
        </Card>
        </section>

  )
}