"use client"

import { useEffect, useState } from "react"

import { useRouter } from "next/navigation"

const NotFound = () => {
  const [navigateTime, setNavigateTime] = useState(4)
  const router = useRouter()

  useEffect(() => {
    let time: ReturnType<typeof setTimeout>
    if (navigateTime >= 1) {
      time = setTimeout(() => {
        setNavigateTime((pre) => pre - 1)
      }, 1000)
    } else {
      router.replace("/")
    }

    return () => {
      time && clearTimeout(time)
    }
  }, [navigateTime, router])

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 text-2xl font-medium text-zinc-300">
      <span>404 (Not Found)</span>
      <span>
        You&apos;ll be redirected in: <span className="font-bold">{navigateTime}</span>
      </span>
    </div>
  )
}

export default NotFound
