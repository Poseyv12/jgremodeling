import { ProjectDetail } from "@/components/project-detail"
import { getProjectBySlug } from "@/lib/projects"
import { getSanityProjectBySlug } from "@/lib/sanity-projects"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // await params before accessing slug
  const resolvedParams = await params
  
  // Try to fetch from Sanity first, fall back to local data
  let project
  try {
    project = await getSanityProjectBySlug(resolvedParams.slug)
    // If no project from Sanity, fall back to local data
    if (!project) {
      project = getProjectBySlug(resolvedParams.slug)
    }
  } catch (error) {
    console.error('Error fetching Sanity project:', error)
    // Fall back to local data
    project = getProjectBySlug(resolvedParams.slug)
  }
  
  if (!project) {
    return {
      title: "Project Not Found | JG Remodel",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} | JG Remodel Projects`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  
  // Try to fetch from Sanity first, fall back to local data
  let project
  try {
    project = await getSanityProjectBySlug(resolvedParams.slug)
    // If no project from Sanity, fall back to local data
    if (!project) {
      project = getProjectBySlug(resolvedParams.slug)
    }
  } catch (error) {
    console.error('Error fetching Sanity project:', error)
    // Fall back to local data
    project = getProjectBySlug(resolvedParams.slug)
  }
  
  // If project not found, trigger the 404 page
  if (!project) {
    notFound()
  }
  
  return <ProjectDetail project={project} />
} 