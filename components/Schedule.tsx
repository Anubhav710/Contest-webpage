"use client"
import Image from "next/image"
import React, { useState } from "react"
import Button from "./Button"

const popSingers = [
  {
    id: 1,
    name: "MAMAMOO",
    img: "/mamamoo.webp",
  },
  {
    id: 2,
    name: "EXO",
    img: "/exo.jpg",
  },
  {
    id: 3,
    name: "NEWJEFANS",
    img: "/newjeans.jpeg",
  },
  {
    id: 4,
    name: "MOMOLAND",
    img: "/momoland..avif",
  },
  {
    id: 5,
    name: "STRAYKIDS",
    img: "/straykid.png",
  },
  {
    id: 6,
    name: "AESPA",
    img: "/aespa.jpg",
  },
  {
    id: 7,
    name: "RED VELVAT",
    img: "/redvelvet.jpg",
  },
  {
    id: 8,
    name: "TWICE",
    img: "/twice.jpg",
  },
  {
    id: 9,
    name: "ITZY",
    img: "/itzy.jpg",
  },
  {
    id: 10,
    name: "GIRLSGENERA",
    img: "/girlgeneration.jpg",
  },
]

const Schedule = () => {
  const [isActive, setIsActive] = useState("NEWJEFANS")

  const handleClick = (link: string) => {
    setIsActive(link)
  }

  return (
    <div className="mt-28" id="schedule">
      <div className="flex flex-col space-y-14 ">
        <div className="text-center space-y-2">
          <h1 className="text-white md:text-4xl lg:text-6xl">Schedule</h1>
          <p className="lg:text-2xl text-base  text-center w-6/12 max-md:w-10/12 mx-auto text-neutral-400">
            Discover the schedule of your favourite idols and support them at an
            incredibly grand concert
          </p>
        </div>
        <div className="flex space-x-7 justify-center mt-4  ">
          {popSingers.map((item) => (
            <div key={item.name}>
              <button
                className={` hover:text-yellow-600 transition-all duration-150 text-3xl cursor-pointer ease-in ${
                  isActive === item.name
                    ? "text-yellow-500 scale-125"
                    : "text-neutral-500"
                } `}
                onClick={() => setIsActive(item.name)}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-center justify-center">
            {popSingers.map(
              (items) =>
                items.name === isActive && (
                  <div
                    className="relative w-full h-[600px]  overflow-hidden "
                    key={items.name}
                  >
                    <Image
                      src={items.img}
                      alt="image"
                      width={10000}
                      height={10000}
                      priority
                      className=" opacity-70  absolute top-0 left-0 min-w-full min-h-full "
                    />
                  </div>
                )
            )}
          </div>
          <div className="flex justify-center items-center mt-24">
            <Button />
          </div>
          <div
            className="cursor-pointer flex justify-center relative items-center md:mt-24 h-[500px] w-full overflow-hidden "
            id="booking"
          >
            <Image
              src="/concert.png"
              alt="BookingPic"
              priority
              width={1000}
              height={1000}
              className="min-w-full min-h-full opacity-20 hover:opacity-40 transition duration-500"
            />
            <div className="absolute flex flex-col  p-2 gap-y-20 pt-10">
              <div className="text-center space-y-4">
                <h1 className="text-4xl">GET YOUR TICKETS NOW</h1>
                <h3 className="text-xl">
                  Get a 40% discount on first purchase
                </h3>
              </div>
              <div className="flex justify-center items-center">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
