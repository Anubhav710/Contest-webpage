import Image from "next/image"
import React from "react"

const Footer = () => {
  return (
    <div className="text-black  bg-white p-14 min-w-[200px]   " id="footer">
      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-y-4">
            <Image src="/logo1.png" alt="" priority width={200} height={200} />
            <p>
              The biggest, extraordinary and spread out kpop music festival all
              around the world
            </p>
          </div>
          <p>2023 © Elegent</p>
        </div>
        <div className="flex flex-row gap-7">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-semibold ">Menu</h1>
            <ul>
              <li>Home</li>
              <li>Perfoemance</li>
              <li>Booking</li>
              <li>Store</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-semibold">Help</h1>
            <ul>
              <li>Privacy & Policy</li>
              <li>Term of Use</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-semibold">Social</h1>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
