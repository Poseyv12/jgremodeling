"use client"
import Link from "next/link"
import { useState, useEffect } from "react"

interface NavigationProps {
  optimusClass: string
}

export function Navigation({ optimusClass }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-green-900/80 backdrop-blur-sm' : 'bg-green-900'
      } text-white`}>
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <div className={`${optimusClass} text-[13px] sm:text-xl md:text-2xl lg:text-3xl`}>
              J.G. Remodeling
              <div className={`${optimusClass} text-[12px] sm:text-xl md:text-2xl lg:text-3xl`}>
                & Construction</div>
            </div>
            <div className="sm:block text-[8px] ml-2 max-w-[120px] text-center sm:max-w-none">
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
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <div className="text-right">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-lg font-medium hover:text-green-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/gallery" 
              className="text-lg font-medium hover:text-green-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/contact" 
              className="text-lg font-medium hover:text-green-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
          <div className="pt-4 border-t text-center border-green-800">
            <div className="text-sm">Phone:</div>
            <div className="font-bold text-lg">(561) 998-7711</div>
          </div>
        </div>
      </div>
    </>
  )
} 