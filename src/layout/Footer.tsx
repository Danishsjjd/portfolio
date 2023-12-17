import Image from "next/image"

import Button from "../app/_components/Button"

import logo from "@/assets/images/logo.png"

const Footer = () => {
  return (
    <footer className="relative w-full border-t-2 border-t-gray-400 pb-8 pt-14">
      <div className="relative mx-auto flex max-w-3xl flex-col items-center justify-center gap-2">
        <Image src={logo} alt="Logo" className="w-20" />
        <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>back to top</Button>
        <p>© {new Date().getFullYear().toString()} Danish Sajjad. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
