'use client'

import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

const images = [
  {
    src: "/hero-kitchen.jpeg",
    alt: "Luxury Kitchen Remodel",
    title: "Transform Your Kitchen",
    description: "Custom designs that blend luxury with functionality"
  },
  {
    src: "/hero-bath.jpeg",
    alt: "Modern Bathroom Design",
    title: "Luxury Bathroom Renovations",
    description: "Create your perfect spa-like retreat"
  },
  {
    src: "/hero-reno.webp",
    alt: "Custom Home Renovation",
    title: "Complete Home Remodeling",
    description: "Transforming homes in South Florida for over 25 years"
  },
  {
    src: "/hero-interior.jpeg",
    alt: "Interior Remodeling",
    title: "Expert Interior Design",
    description: "Award-winning craftsmanship and attention to detail"
  }
]

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-lg text-white text-center md:text-left mx-auto md:mx-0">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {image.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8">
                    {image.description}
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 hover:text-white transition-colors duration-200"
                  >
                    Get a Complimentary Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 