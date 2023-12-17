import { type Metadata } from "next"

import "@/assets/style/base.css"
import "@/assets/style/tailwind.css"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Danish Sajjad — Web Developer & Designer",
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
