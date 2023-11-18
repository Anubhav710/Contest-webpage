"use client"
import Container from "@/components/Container"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import { Viaoda_Libre } from "next/font/google"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Schedule from "@/components/Schedule"
import Footer from "@/components/Footer"
import { useEffect } from "react"

const viaodaLibre = Viaoda_Libre({ weight: ["400"], subsets: ["latin"] })
export default function Home() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll: any = (await import("locomotive-scroll")).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    <main className={`${viaodaLibre.className} h-full w-full `}>
      <Container>
        <div className="relative">
          <div className="bg-[url('/heroBackground.svg')] -z-10 h-full absolute top-0 left-0 right-0 bottom-0  opacity-20 bg-no-repeat bg-center bg-cover" />
          <Navbar />
          <Hero />
        </div>
        <About />
        <Schedule />
      </Container>
      <Footer />
    </main>
  )
}
