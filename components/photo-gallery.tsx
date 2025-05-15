'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Default photos to use if none are provided via props
const defaultPhotos = [
  {
    src: "/image-gallery/gallery-kitchen.jpeg",
    alt: "Luxury Kitchen Remodel",
    category: "Kitchen"
  },
  {
    src: "/image-gallery/gallery-bath.jpeg",
    alt: "Modern Bathroom Design",
    category: "Bathroom"
  },
  {
    src: "/hero-reno.webp",
    alt: "Custom Home Renovation",
    category: "Home"
  },
  {
    src: "/interior-1.avif",
    alt: "Interior Design",
    category: "Interior"
  },
  {
    src: "/image-gallery/gallery-kitchen2.jpeg",
    alt: "Contemporary Kitchen",
    category: "Kitchen"
  },
  {
    src: "/project-1.jpg",
    alt: "Spa Bathroom",
    category: "Bathroom"
  }
]

type Photo = {
  src: string
  alt: string
  category: string
  slug?: string
}

interface PhotoGalleryProps {
  photos?: Photo[]
}

export function PhotoGallery({ photos = defaultPhotos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  
  // Filter out any photos with undefined or null src
  const validPhotos = photos.filter(photo => photo.src)

  return (
    <div className="w-full" id="gallery">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 p-2">
        {validPhotos.map((photo, index) => (
          <div 
            key={index} 
            className="relative aspect-[16/9] group cursor-pointer p-2"
            onClick={() => setSelectedPhoto(index)}
          >
            <Image
              src={photo.src}
              alt={photo.alt || "Project image"}
              width={400}
              height={225}
              className="object-cover w-full h-full transition-all duration-300 group-hover:brightness-75"
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
          <div className="relative w-full max-w-4xl mx-4 max-h-[90vh] flex items-center">
            <Image
              src={validPhotos[selectedPhoto].src}
              alt={validPhotos[selectedPhoto].alt || "Project image"}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 flex justify-between items-center">
              <div>
                <div className="font-semibold">{validPhotos[selectedPhoto].category}</div>
                <div className="text-sm">{validPhotos[selectedPhoto].alt}</div>
              </div>
              {validPhotos[selectedPhoto].slug && (
                <Link 
                  href={`/projects/${validPhotos[selectedPhoto].slug}`}
                  className="bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 