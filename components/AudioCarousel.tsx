"use client";

import * as React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const songs = [
  {
    title: "Taylor Swift - So High School",
    src: "/Taylor.mp3",
  },
];

export default function AudioCarousel({ isPlaying }: { isPlaying: boolean }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((err) => console.log("Autoplay blocked:", err));
    } else {
      audio.pause();
    }
  }, [isPlaying, currentIndex]);

  return (
    <div className="relative w-full max-w-sm md:max-w-sm sm:max-w-full mx-auto flex flex-col items-center">
      {/* Card */}
      <Card className="border-4 border-black shadow-[6px_6px_0px_black] bg-red-400 w-full sm:w-[260px] md:w-[340px]">
        <CardHeader className="px-4 py-3">
          <CardTitle className="text-black text-base md:text-lg font-bold tracking-tight text-center">
            {songs[currentIndex].title}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <audio
            ref={audioRef}
            controls
            src={songs[currentIndex].src}
            className="w-full rounded-lg h-10 md:h-auto"
            style={{
              background: "#f9f9f9",
              border: "1px solid #ddd",
            }}
          />
        </CardContent>
      </Card>

      {/* Tombol Navigasi */}
      {/* Mobile → atas & bawah, Desktop → kiri & kanan */}
      <div className="hidden md:block">
        <Button
          variant="secondary"
          size="icon"
          onClick={prevSlide}
          className="absolute -left-12 top-1/2 -translate-y-1/2 border-4 border-black bg-sky-400 shadow-[4px_4px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition"
        >
          <ChevronLeft className="h-5 w-5 text-black" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={nextSlide}
          className="absolute -right-12 top-1/2 -translate-y-1/2 border-4 border-black bg-sky-400 shadow-[4px_4px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition"
        >
          <ChevronRight className="h-5 w-5 text-black" />
        </Button>
      </div>

      <div className="flex md:hidden gap-4 mt-3">
        <Button
          variant="secondary"
          size="icon"
          onClick={prevSlide}
          className="border-4 border-black bg-sky-400 shadow-[4px_4px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition"
        >
          <ChevronLeft className="h-5 w-5 text-black" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={nextSlide}
          className="border-4 border-black bg-sky-400 shadow-[4px_4px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition"
        >
          <ChevronRight className="h-5 w-5 text-black" />
        </Button>
      </div>
    </div>
  );
}
