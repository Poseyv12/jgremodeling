'use client'

import Image from "next/image"
import Link from "next/link"
import { type Project } from "@/lib/projects"
import { useState } from "react"

interface ProjectDetailContentProps {
  project: Project
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div className="container mx-auto py-16 px-4">
      {/* Breadcrumb Navigation */}
      <div className="mb-8">
        <div className="flex items-center text-sm">
          <Link href="/" className="text-gray-500 hover:text-black">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/gallery" className="text-gray-500 hover:text-black">
            Projects
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-medium">{project.title}</span>
        </div>
      </div>

      {/* Project Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
        <div className="flex flex-wrap items-center text-gray-600 gap-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{project.location}</span>
          </div>
          {project.completionDate && (
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Completed: {project.completionDate}</span>
            </div>
          )}
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span>{project.category}</span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mb-12">
        {project.images.length > 0 && (
          <>
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm mb-4">
              <Image
                src={project.images[activeImage].src}
                alt={project.images[activeImage].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
              {project.images[activeImage].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
                  <p>{project.images[activeImage].caption}</p>
                </div>
              )}
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative aspect-[16/9] overflow-hidden rounded-sm ${
                    index === activeImage ? 'ring-2 ring-primary ring-offset-2' : ''
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 120px, 200px"
                  />
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Project Details */}
      <div className="grid md:grid-cols-12 gap-8">
        {/* Main Content */}
        <div className="md:col-span-8">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-gray-700 mb-6">{project.description}</p>
          
          {project.challenge && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">The Challenge</h3>
              <p className="text-gray-700">{project.challenge}</p>
            </div>
          )}
          
          {project.solution && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Our Solution</h3>
              <p className="text-gray-700">{project.solution}</p>
            </div>
          )}
          
          {project.result && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">The Result</h3>
              <p className="text-gray-700">{project.result}</p>
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="md:col-span-4">
          <div className="bg-gray-50 p-6 rounded-sm">
            {project.client && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-1">Client</h3>
                <p className="text-gray-700">{project.client}</p>
              </div>
            )}
            
            {project.features && project.features.length > 0 && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Project Features</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="pt-4 mt-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Ready to Start Your Project?</h3>
              <Link 
                href="/contact"
                className="block w-full bg-black text-white text-center px-4 py-3 rounded-sm font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 