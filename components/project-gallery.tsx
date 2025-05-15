'use client'

import Image from "next/image"
import Link from "next/link"
import { type Project } from "@/lib/projects"

// Define projects data with slugs for routing
// const projects = [
//   {
//     id: 1,
//     title: "Modern Kitchen Renovation",
//     slug: "modern-kitchen-renovation",
//     category: "Kitchen",
//     location: "Miami Beach, FL",
//     thumbnail: "/image-gallery/gallery-kitchen.jpeg",
//     description: "Complete redesign of a luxury kitchen with custom cabinetry and high-end appliances."
//   },
//   {
//     id: 2,
//     title: "Luxury Bathroom Remodel",
//     slug: "luxury-bathroom-remodel",
//     category: "Bathroom",
//     location: "Coral Gables, FL",
//     thumbnail: "/image-gallery/gallery-bath.jpeg",
//     description: "Spa-inspired bathroom renovation featuring marble surfaces and custom fixtures."
//   },
//   {
//     id: 3,
//     title: "Complete Home Renovation",
//     slug: "complete-home-renovation",
//     category: "Home",
//     location: "Boca Raton, FL",
//     thumbnail: "/hero-reno.webp",
//     description: "Full-home renovation including structural changes and interior design updates."
//   },
//   {
//     id: 4,
//     title: "Contemporary Interior Design",
//     slug: "contemporary-interior-design",
//     category: "Interior",
//     location: "Fort Lauderdale, FL",
//     thumbnail: "/interior-1.avif",
//     description: "Modern interior redesign with custom furniture and lighting solutions."
//   },
//   {
//     id: 5,
//     title: "Gourmet Kitchen Upgrade",
//     slug: "gourmet-kitchen-upgrade",
//     category: "Kitchen",
//     location: "Palm Beach, FL",
//     thumbnail: "/image-gallery/gallery-kitchen2.jpeg",
//     description: "High-end kitchen remodel for a gourmet cooking enthusiast with professional-grade appliances."
//   },
//   {
//     id: 6,
//     title: "Master Bathroom Suite",
//     slug: "master-bathroom-suite",
//     category: "Bathroom",
//     location: "Aventura, FL",
//     thumbnail: "/project-1.jpg",
//     description: "Luxury master bathroom transformation with walk-in shower and freestanding tub."
//   }
// ]

// This is a client component that receives pre-fetched projects from a server component
interface ProjectGalleryProps {
  projects: Project[]
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Link 
          href={`/projects/${project.slug}`} 
          key={project.id}
          className="group"
        >
          <div className="bg-white shadow-md rounded-sm overflow-hidden transition-transform duration-300 group-hover:shadow-lg">
            <div className="relative h-64">
              <Image
                src={project.thumbnail}
                alt={project.thumbnailAlt || project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 text-sm rounded-sm">
                {project.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {project.location}
              </p>
              <p className="text-gray-700">
                {project.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
} 