import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Danish Sajjad — Web Developer & Designer",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
