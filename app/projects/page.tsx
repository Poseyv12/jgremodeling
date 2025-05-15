import { Suspense } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getSanityProjects } from '@/lib/sanity-projects'
import { getAllProjects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projects | JG Remodel',
  description: 'View our completed remodeling projects and transformations.',
}

// Loading component for Suspense
function ProjectsLoading() {
  return <div className="animate-pulse">Loading projects...</div>
}

async function ProjectsList() {
  // Try to fetch from Sanity first, fall back to local data
  let projects
  try {
    projects = await getSanityProjects()
    // If no projects from Sanity, fall back to local data
    if (!projects || projects.length === 0) {
      projects = getAllProjects()
    }
  } catch (error) {
    console.error('Error fetching Sanity projects:', error)
    // Fall back to local data
    projects = getAllProjects()
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Link 
          key={project.id} 
          href={`/projects/${project.slug}`}
          className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative h-64 w-full">
            <Image
              src={project.thumbnail}
              alt={project.thumbnailAlt || project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4 bg-white">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-500">{project.category}</p>
            <p className="mt-2 text-gray-700 line-clamp-2">{project.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 text-center">
        Browse our portfolio of completed remodeling projects. From kitchens and bathrooms to complete home renovations,
        our work showcases our commitment to quality craftsmanship and attention to detail.
      </p>
      
      <Suspense fallback={<ProjectsLoading />}>
        <ProjectsList />
      </Suspense>
    </div>
  )
} 