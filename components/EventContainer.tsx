import Image from "next/image"
import React from "react"
import Button from "./Button"

const EventContainer = () => {
  return (
    <div className="grid grid-cols-2 ">
      <Image src="/redvelvet.jpg" alt="poster2" width={850} height={500} />
      <h1 className="text-neutral-600 md:text-7xl flex items-center ">
        ELEGANT
      </h1>
      <div className="mt-12 space-y-4">
        <h1 className="text-4xl">RED VELVET</h1>
        <h3 className="text-neutral-500 text-2xl">SM Entertainment</h3>
        <p className="text-neutral-500">
          Red Velvet is a south korean girl group formed by SM entertainments in
          2014 and consists of five member, namely Irene, Seulgi, Wendy, Yeri
          and Joy. They started their career n August 1, 2014 with the release f
          the digital single &apos;Happiness&apos;
        </p>
        <Button />
      </div>
      <div className="mt-10">
        <Image src="/blackpink.jpg" alt="poster3" width={850} height={500} />
      </div>

      <h1 className="text-neutral-600 md:text-7xl flex items-center ">
        EVENTS
      </h1>

      <div className="mt-12 space-y-4">
        <h1 className="text-4xl">BLACK PINK</h1>
        <h3 className="text-neutral-500 text-2xl">SM Entertainment</h3>
        <p className="text-neutral-500">
          Red Velvet is a south korean girl group formed by SM entertainments in
          2014 and consists of five member, namely Irene, Seulgi, Wendy, Yeri
          and Joy. They started their career n August 1, 2014 with the release f
          the digital single &apos;Happiness&apos;
        </p>
        <Button />
      </div>
      <div>
        <Image src="/twice.jpg" alt="poster2" width={850} height={500} />
      </div>
      <h1 className="text-neutral-600 md:text-7xl flex items-center ">
        ELEGANT EVENTS
      </h1>
      <div className="mt-12 space-y-4">
        <h1 className="text-4xl">TWICE</h1>
        <h3 className="text-neutral-500 text-2xl">SM Entertainment</h3>
        <p className="text-neutral-500">
          Red Velvet is a south korean girl group formed by SM entertainments in
          2014 and consists of five member, namely Irene, Seulgi, Wendy, Yeri
          and Joy. They started their career n August 1, 2014 with the release f
          the digital single &apos;Happiness&apos;
        </p>
        <Button />
      </div>
    </div>
  )
}

export default EventContainer
