"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const navData = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Performance",
    href: "#performance",
  },
  {
    name: "Schedule",
    href: "#schedule",
  },
  {
    name: "Booking",
    href: "#booking",
  },
  {
    name: "About Us",
    href: "#footer",
  },
]

const Navbar = () => {
  const [active, setActive] = useState("")

  const handleClick = (link: string) => {
    setActive(link)
  }
  return (
    <div className="pt-4">
      <div className="flex items-center justify-between  ">
        {/* using div because i can't apply motion on components */}
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={196}
            height={20}
            priority={true}
          />
        </div>
        <ul className="flex items-center lg:space-x-10 space-x-6 max-md:hidden scroll-smooth">
          {navData.map((link) => (
            <Link
              scroll={true}
              href={link.href}
              onClick={() => handleClick(link.name)}
              key={link.name}
              className={`${
                active === link.name ? "text-yellow-400" : "text-white"
              } hover:text-yellow-400 hover:duration-300 hover:transition`}
            >
              {link.name}
            </Link>
          ))}
        </ul>
        <div className="cursor-pointer">
          <button className="lg:px-7 py-2 px-5 bg-white text-black">
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
