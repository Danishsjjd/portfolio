"use client"

import { useState } from "react"

import About from "@/app/_sections/About"
import Contact from "@/app/_sections/Contact"
import Projects from "@/app/_sections/Projects"
import "@/assets/style/tailwind.css"
import Footer from "@/layout/Footer"
import Header from "@/layout/Header"

const Page = () => {
  return <Home />
}

const Home = () => {
  const [isGoingUp, setIsGoingUp] = useState(true)
  const [isSelected, setIsSelected] = useState("")

  return (
    <>
      <Header isGoingUp={isGoingUp} setIsGoingUp={setIsGoingUp} isCardActive={isSelected !== ""} />
      <main>
        <About />
        <Projects setIsGoingUp={setIsGoingUp} isSelected={isSelected} setIsSelected={setIsSelected} />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default Page
