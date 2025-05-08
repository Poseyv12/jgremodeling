'use client'

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef, useEffect } from "react"

const images = [
  {
    src: "https://images.unsplash.com/photo-1658280911730-467b4764c09c?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Luxury Kitchen Remodel",
    title: "Transform Your Kitchen",
    description: "Custom designs that blend luxury with functionality"
  },
  {
    src: "/project-1.jpg",
    alt: "Modern Bathroom Design",
    title: "Luxury Bathroom Renovations",
    description: "Create your perfect spa-like retreat"
  },
  {
    src: "/project-2.jpg",
    alt: "Custom Home Renovation",
    title: "Complete Home Remodeling",
    description: "Transforming homes in South Florida for over 25 years"
  },
  {
    src: "/interior-1.avif",
    alt: "Interior Remodeling",
    title: "Expert Interior Design",
    description: "Award-winning craftsmanship and attention to detail"
  }
]

export function HeroCarousel() {
  const autoplayRef = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false
    })
  )

  return (
    <section className="relative w-full" style={{ height: '100dvh' }}>
      <Carousel
        opts={{
          loop: true,
          align: "center"
        }}
        plugins={[autoplayRef.current]}
        className="w-full h-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full" style={{ height: '100dvh' }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover brightness-[0.85]"
                  priority={index === 0}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-lg text-white">
                      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        {image.title}
                      </h1>
                      <p className="text-lg md:text-xl text-gray-100">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Fixed Lead Form */}
      {/* <div className="absolute top-1/2 -translate-y-1/2 right-0 hidden md:block">
        <div className="w-[350px] mr-4 lg:mr-16 xl:mr-32">
          <LeadForm />
        </div>
      </div> */}
    </section>
  )
} 