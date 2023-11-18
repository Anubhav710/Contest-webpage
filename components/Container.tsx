import React from "react"

type ContainerProp = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProp) => {
  return (
    <div className=" max-w-[2480px] flex flex-col justify-evenly xl:px-20 md:px-10 sm:px-2 px-4 mx-auto">
      {children}
    </div>
  )
}

export default Container
