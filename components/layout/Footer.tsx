'use client'

import Link from 'next/link'
const personalLinks = [
  { title: 'Galeri Kita', href: '#gallery' },
  { title: 'Sebuah Harapan', href: '#wish' },
]

export default function FooterSection() {
  return (
    <footer className="border-t-2 border-black bg-background py-16 md:py-24 text-foreground relative">
      {/* --- Pesan penutup yang lebih manis --- */}
      <h2 className="absolute -rotate-10 -top-10 left-1/2 -translate-x-1/2 text-3xl md:text-4xl font-extrabold uppercase tracking-tight shadow-[4px_4px_0px_black] inline-block px-4 py-2 border-2 border-black bg-white w-max">
        <span className="inline-block border-2 border-black bg-sky-400 px-4 py-1 text-background shadow-[6px_4px_0_rgba(0,0,0,1)]">
          Dibuat untukmu
        </span>
      </h2>
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* --- Navigasi personal, bukan link korporat --- */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-wide">
          {personalLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="border-2 border-black px-4 py-2 bg-white text-black hover:bg-primary hover:text-white shadow-[3px_3px_0px_black] transition"
            >
              {link.title}
            </Link>
          ))}
        </div>


        {/* --- Copyright diubah menjadi ucapan penutup yang hangat --- */}
        <div className="mt-10 text-sm text-muted-foreground space-y-1">
          <p>
            Selamat ulang tahun yang ke-19, Aldea!
          </p>
          <p className="font-semibold">
            Semoga semua do&apos;a dan harapan baikmu terwujud.
          </p>
          <p className="mt-4">
            With ..., [Riyann]
          </p>
        </div>
      </div>
    </footer>
  )
}