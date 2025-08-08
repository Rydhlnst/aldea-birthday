"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Music2, X } from "lucide-react";
import { Button } from "./ui/button";
import AudioCarousel from "./AudioCarousel";

// Hook untuk deteksi ukuran layar
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener();
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export default function BrutalismMusicButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // Mulai dengan true untuk autoplay
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Autoplay saat komponen dimount
  useEffect(() => {
    // Set autoplay setelah komponen dimount
    setIsPlaying(true);
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleClose = () => {
    // Tutup player tapi jangan hentikan musik
    setIsOpen(false);
    // Musik tetap berjalan (isPlaying tetap true jika sedang play)
  };

  return (
    <div
      className={`fixed bottom-10 right-10 z-50 ${
        isMobile ? "flex flex-col-reverse items-end" : ""
      }`}
    >
      {/* AudioCarousel selalu dirender agar musik tetap jalan - tersembunyi */}
      <div className="pointer-events-none fixed bottom-0 left-0 w-0 h-0 overflow-hidden opacity-0">
        <AudioCarousel isPlaying={isPlaying} />
      </div>

      {/* Kontainer Button + Player */}
      <motion.div
        animate={
          isMobile
            ? {
                width: isOpen ? 320 : 64,
                height: isOpen ? 400 : 64,
              }
            : {
                width: isOpen ? 540 : 64,
                height: isOpen ? 300 : 64,
              }
        }
        transition={{ type: "spring", stiffness: 180, damping: 15 }}
        className="relative flex items-center justify-center border-4 border-black bg-pink-300 shadow-[6px_6px_0px_black] overflow-hidden rounded-none"
      >
        {/* Tombol awal - Tambahkan indikator jika sedang playing */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="w-full h-full flex items-center justify-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition relative"
          >
            <Music2 size={28} className="text-black" />
            {/* Indikator musik sedang playing */}
            {isPlaying && (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border-2 border-black rounded-full"
              />
            )}
          </button>
        )}

        {/* Player */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: isMobile ? 50 : 0, x: isMobile ? 0 : 50 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: isMobile ? 50 : 0, x: isMobile ? 0 : 50 }}
              transition={{ duration: 0.25 }}
              className={`p-4 w-full h-full flex ${
                isMobile
                  ? "flex-col justify-between"
                  : "flex-col justify-between"
              }`}
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <h2 className="font-black text-black text-lg uppercase tracking-tight">
                    Now Playing
                  </h2>
                  {/* Status indicator */}
                  {isPlaying && (
                    <motion.div
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="w-2 h-2 bg-green-500 border border-black rounded-full"
                    />
                  )}
                </div>
                <Button
                  size="icon"
                  onClick={handleClose}
                  className="bg-red-500 hover:bg-red-600 border-2 border-black shadow-[2px_2px_0px_black] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition"
                >
                  <X className="text-white size-4" />
                </Button>
              </div>

              {/* Audio Carousel - Hanya untuk tampilan UI */}
              <div className="flex-1 flex items-center justify-center px-2">
                <AudioCarousel isPlaying={isPlaying} />
              </div>

              {/* Kontrol */}
              <div className="flex justify-center gap-4">
                <Button
                  onClick={handlePlayPause}
                  className={`px-3 py-2 border-2 border-black font-bold shadow-[4px_4px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition ${
                    isPlaying 
                      ? "bg-red-400 hover:bg-red-500" 
                      : "bg-sky-400 hover:bg-sky-500"
                  }`}
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Mini player saat ditutup - hanya tampil jika sedang playing */}
      {!isOpen && isPlaying && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="mb-2 px-3 py-2 bg-black text-white text-sm font-bold border-2 border-white shadow-[3px_3px_0px_white] rounded-none"
        >
          ♪ Music Playing
        </motion.div>
      )}
    </div>
  );
}