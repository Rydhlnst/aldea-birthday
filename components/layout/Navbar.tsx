'use client'

import React, { useState } from 'react'
import { Instagram, Gift } from 'lucide-react'
import { Button } from '@/components/ui/button'

const menuItems = [
  { label: 'Wishes', href: '/#wish', hoverColor: 'hover:bg-pink-400' },
  { label: 'Fun Facts', href: '/#funfacts', hoverColor: 'hover:bg-green-400' },
  { label: 'Gallery', href: '/#gallery', hoverColor: 'hover:bg-purple-400' },
]

const icon = [
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/', hoverColor: 'hover:bg-red-400' },
  { label: 'Gift', icon: Gift, href: '/#gifts', hoverColor: 'hover:bg-yellow-400' },
]

const NavbarBirthday = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const brutalistStyle =
    'border-2 border-black bg-white text-foreground shadow-[4px_4px_0px_black] rounded-none'

  return (
    <header className="w-full fixed top-0 left-0 z-[90] bg-white border-b-4 border-black">
      <div className="container mx-auto h-20 px-4 grid grid-cols-3  relative">

        {/* Center: Brand Title */}
        <h1 className="text-xl md:text-3xl font-extrabold uppercase tracking-tight text-black flex items-center gap-2 col-span-2">
            <span className="bg-yellow-400 text-black px-2 py-1 border-4 mr-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-5 inline-block">
            Aldea&apos;s</span> Day
        </h1>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-3 justify-self-end">
          {/* Menu Button */}
          <div className="relative">
            <Button
              type="button"
              variant="outline"
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-none px-4 py-2 border-2 group border-black text-sm font-bold text-black bg-white shadow-[2px_2px_0px_black] hover:bg-yellow-300 transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline uppercase tracking-wide">Menu</span>
                <div className="flex flex-col justify-center gap-[4px]">
                  <div className={`w-5 h-[2px] bg-black transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
                  <div className={`w-3 h-[2px] bg-black transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
                  <div className={`w-5 h-[2px] bg-black transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
                </div>
              </div>
            </Button>

            {/* Brutalist Dropdown Menu */}
            {menuOpen && (
              <div className={`absolute top-full right-0 mt-2 w-64 origin-top-right sm:w-72 ${brutalistStyle} p-2 z-[60] animate-in slide-in-from-top-2 duration-200`}>
                {/* Daftar Navigasi Utama */}
                <ul className="flex flex-col text-sm font-bold sm:text-base">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`block p-3 transition-all duration-200 ease-in-out border-2 border-transparent hover:border-black hover:shadow-[2px_2px_0px_black] hover:translate-x-[-1px] hover:translate-y-[-1px] ${item.hoverColor} hover:text-black`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-3 h-3 bg-black rounded-none inline-block" />
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Pemisah Visual */}
                <div className="my-3 border-t-4 border-black border-dotted" />

                {/* Bagian Ikon Sosial */}
                <div className="px-2 pb-2">
                  <h3 className="mb-3 px-1 text-xs font-bold uppercase tracking-wider text-gray-700 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 inline-block"></span>
                    Let&apos;s Celebrate
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {icon.map((item) => {
                      const IconComponent = item.icon

                      return (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            className={`flex items-center gap-2 p-3 text-black border-2 border-black shadow-[2px_2px_0_black] rounded-none transition-all duration-200 hover:shadow-[3px_3px_0_black] hover:translate-x-[-1px] hover:translate-y-[-1px] ${item.hoverColor} hover:text-black font-bold text-sm`}
                            aria-label={item.label}
                          >
                            <IconComponent size={18} />
                            <span className="hidden sm:inline text-black">{item.label}</span>
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavbarBirthday