import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import NotFound from "./components/404"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Projects from "./sections/Projects"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

const Home = () => {
  const [isGoingUp, setIsGoingUp] = useState(true)
  const [isSelected, setIsSelected] = useState("")

  return (
    <>
      <Header
        isGoingUp={isGoingUp}
        setIsGoingUp={setIsGoingUp}
        isCardActive={isSelected !== ""}
      />
      <main>
        <About />
        <Projects
          setIsGoingUp={setIsGoingUp}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
