import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  return (
    <header className="bg-green-700 text-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-serif">
            J.G. Remodeling
            <div className="text-sm font-sans">and Construction, Inc.</div>
          </div>
          <div className="hidden md:block text-sm ml-4">
            Jeff Grossman Certified Residential Contractor
            <div>License # CRC058526</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="font-medium">Home</Link>
          <Link href="/gallery" className="font-medium">Gallery</Link>
          <Link href="/contact" className="font-medium">Contact Us</Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="text-right hidden md:block">
            <div className="text-sm">Phone:</div>
            <div className="font-bold">(561) 998-7711</div>
          </div>
        </div>
      </div>
    </header>
  )
} 