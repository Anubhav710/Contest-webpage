"use client"
import React from "react"

import { motion } from "framer-motion"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="w-full mt-28">
      <div className="flex flex-col items-center justify-center ">
        <motion.h1 className="text-white text-9xl pb-2 leading-snug max-lg:text-7xl max-md:text-5xl">
          Feel the Rhythm of{" "}
        </motion.h1>
        <motion.h1 className="text-white text-9xl pb-2 leading-snug max-lg:text-7xl max-md:text-5xl">
          Your Hear&apos;s Music
        </motion.h1>
        <motion.p className="mt-4 text-center text-xl w-10/12 tracking-widest text-neutral-400  max-lg:text-base max-md:text-sm">
          The biggest, extraordinary and spread out K-Pop music festival all
          around the world, in cooperation with all the famous k-pop industry
          agencies in korea and outstanding talents.
        </motion.p>
      </div>
      <div className="mt-28 text-white cursor-pointer">
        <div className="bg-black lg:h-[700px] md:h-[500px] h-[300px]     ">
          <div className="flex justify-between  bg-[url('/image4.webp')] -z-50 h-full opacity-50 bg-no-repeat bg-top bg-cover hover:opacity-95 transition-opacity duration-1000 px-4 py-1">
            <div className="flex flex-col justify-between ">
              <h1 className="text-4xl lg:text-6xl">Aespa</h1>
              <h1 className="text-xl md:text-[17px]">
                Aespa is a South Korean girls group formed by SM Entertainment
              </h1>
            </div>
            <div className="flex flex-col justify-between  ">
              <h1 className="text-4xl">Go and Buy the tickets</h1>
              <h1 className="text-end text-4xl">Seoul, December 12</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
