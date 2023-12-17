import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },
  client: {
    NEXT_PUBLIC_EMAIL_PUBLIC_KEY: z.string(),
    NEXT_PUBLIC_EMAIL_SERVICE_ID: z.string(),
    NEXT_PUBLIC_EMAIL_TEMPLATE: z.string(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_EMAIL_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
    NEXT_PUBLIC_EMAIL_SERVICE_ID: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
    NEXT_PUBLIC_EMAIL_TEMPLATE: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
  },
})
