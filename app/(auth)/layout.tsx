import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

import '../globals.css'

// This is for SEO
export const metadata = {
  title: 'Threads', 
  description: 'A Next.js 13 Meta Threads Application'
}

// Below is how you define fonts using Google Fonts
const inter = Inter({ subsets: ['latin'] })

//Below you will see that the children object has its type defined has type ReactNode
export default function RootLayout({
  children
}: {
  children: React.ReactNode 
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className} bg-dark-1`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}