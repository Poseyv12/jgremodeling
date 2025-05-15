import { ProjectGallery } from "@/components/project-gallery"
import { getSanityProjects } from "@/lib/sanity-projects"
import { getAllProjects } from "@/lib/projects"

export const metadata = {
  title: "Project Gallery | JG Remodel",
  description: "Browse our showcase of completed luxury remodeling projects in South Florida.",
}

export default async function GalleryPage() {
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
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Project Gallery</h1>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        Browse our collection of completed luxury remodeling projects. Each project showcases our commitment to quality craftsmanship and attention to detail.
      </p>
      
      <ProjectGallery projects={projects} />
    </div>
  )
} 