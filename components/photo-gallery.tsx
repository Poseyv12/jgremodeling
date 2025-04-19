'use client'

import Image from "next/image"
import { useState } from "react"

const photos = [
  {
    src: "/project-1.jpg",
    alt: "Luxury Kitchen Remodel",
    category: "Kitchen"
  },
  {
    src: "/project-1.jpg",
    alt: "Modern Bathroom Design",
    category: "Bathroom"
  },
  {
    src: "/project-2.jpg",
    alt: "Custom Home Renovation",
    category: "Home"
  },
  {
    src: "/interior-1.avif",
    alt: "Interior Design",
    category: "Interior"
  },
  {
    src: "/project-1.jpg",
    alt: "Contemporary Kitchen",
    category: "Kitchen"
  },
  {
    src: "/project-1.jpg",
    alt: "Spa Bathroom",
    category: "Bathroom"
  },
  // Add more photos to fill out rows
  {
    src: "/project-2.jpg",
    alt: "Modern Living Room",
    category: "Interior"
  },
  {
    src: "/Master_Bedroom.webp",
    alt: "Custom Cabinetry",
    category: "Kitchen"
  },
  {
    src: "/project-1.jpg",
    alt: "Master Bathroom",
    category: "Bathroom"
  },
  {
    src: "/project-1.jpg",
    alt: "Home Exterior",
    category: "Home"
  },
  {
    src: "/project-2.jpg",
    alt: "Kitchen Design",
    category: "Kitchen"
  },
  {
    src: "/Master_Bedroom.webp",
    alt: "Bathroom Renovation",
    category: "Bathroom"
  }
]

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {photos.map((photo, index) => (
          <div 
            key={index} 
            className="relative aspect-square group cursor-pointer"
            onClick={() => setSelectedPhoto(index)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-all duration-300 group-hover:brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-white text-center p-4">
                <div className="font-semibold">{photo.category}</div>
                <div className="text-sm">{photo.alt}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for selected photo */}
      {selectedPhoto !== null && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative w-full max-w-4xl mx-4">
            <Image
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].alt}
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
              <div className="font-semibold">{photos[selectedPhoto].category}</div>
              <div className="text-sm">{photos[selectedPhoto].alt}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 