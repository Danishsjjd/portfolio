import { type Metadata } from "next"

import "@/assets/style/base.css"
import "@/assets/style/tailwind.css"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Danish Sajjad — Web Developer & Designer",
  description:
    "A Web Developer and Designer based in Pakistan with an eye for great design (UI) and even better user experience (UX).",
  authors: [{ name: "Danish sajjad", url: "https://danishsjjd.dev" }],
  keywords: [
    "HTML",
    " CSS",
    " JavaScript",
    " ReactJs",
    " React js",
    " react js",
    " landing page",
    " frontend",
    " web design",
  ],
  metadataBase: new URL("https://danishsjjd.dev"),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}
