import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'J.G. Remodeling',
  description: 'Professional remodeling and construction services in South Florida',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen antialiased`}>
        <Navigation />
        <div className="min-h-screen pt-16">
          {children}
        </div>
      </body>
    </html>
  )
} 