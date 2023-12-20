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
  icons: "/favicon.ico",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#ffc40d" />
      <meta name="theme-color" content="#ffffff" /> */}
      <body>
        <div id="root">{children}</div>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  )
}
