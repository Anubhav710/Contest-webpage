"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const Container = {
  visibal: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -40 },
}

const Navbar = () => {
  return (
    <div className="pt-4">
      <div className="flex items-center justify-between  ">
        {/* using div because i can't apply motion on components */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={196}
            height={20}
            priority={true}
          />
        </motion.div>
        <motion.ul
          initial="hidden"
          whileInView="visibal"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center lg:space-x-10 space-x-6 max-md:hidden"
          variants={Container}
          viewport={{ once: true }}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Performance</Link>
          </li>
          <li>
            <Link href="/">Booking</Link>
          </li>
          <li>
            <Link href="/">Store</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
        </motion.ul>
        <motion.div
          className="cursor-pointer"
          initial="hidden"
          whileInView="visibal"
          variants={Container}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <button className="lg:px-7 py-2 px-5 bg-white text-black">
            Sign In
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar
