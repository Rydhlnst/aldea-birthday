"use client";

import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import { ImageSquare } from "phosphor-react"; // pastikan sudah install phosphor-react

export function HeroParallaxDemo() {
  return <HeroParallax products={emptyProducts} />;
}

const emptyProducts = Array.from({ length: 16 }).map((_, idx) => ({
  title: `Placeholder ${idx + 1}`,
  link: "#",
  thumbnail: "/",
  placeholder: true,
  renderThumbnail: () => (
    <div className="w-full aspect-square flex items-center justify-center bg-gray-100 border rounded-md">
      <ImageSquare size={32} className="text-gray-400" />
    </div>
  ),
}));