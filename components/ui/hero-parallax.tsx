"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 ">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        <span className="bg-sky-400 rotate-5 mb-3 text-black px-2 py-1 border-4 mr-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform inline-block">
               Belum Adaa
          </span>
         <br /> 
            <span className="bg-yellow-400 -rotate-2 text-black px-2 py-1 border-4 mr-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform inline-block">
              Kenangan Tersimpan
            </span>
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Sedih gaa kamuu? kita belum ada kenangan bareng sama sekalii hadehh, palingan <span className="bg-purple-400 text-black px-3 py-1 mx-1 border-4 border-black shadow-[4px_4px_0px_black] transform -rotate-1 inline-block">
                roblox
                </span> sihh ummmmm apa perluu aku masuki roblox??? tapi aku maunyaa yang nyataa
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail?: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -12,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0 
                 border-4 border-black rounded-none overflow-hidden 
                 shadow-[6px_6px_0px_black] bg-white transition-all duration-300"
    >
      <a href={product.link} className="block w-full h-full relative">
       
      </a>

      {/* Overlay hover */}
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-100 bg-pink-400/90 border-t-4 border-black pointer-events-none transition-opacity duration-300"></div>

      {/* Judul Produk */}
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 
                     text-black font-extrabold text-lg px-3 py-1 bg-white border-4 border-black shadow-[3px_3px_0px_black] 
                     transition-all duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};

