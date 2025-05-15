import { type Project } from "@/lib/projects"
import { getSanityProjectBySlug } from "@/lib/sanity-projects"
import { getProjectBySlug } from "@/lib/projects"
import { ProjectDetailContent } from "@/components/project-detail-content"

interface ProjectDetailProps {
  slug: string
}

export async function ProjectDetail({ slug }: ProjectDetailProps) {
  // Try to fetch from Sanity first, fall back to local data
  let project: Project | null | undefined
  try {
    project = await getSanityProjectBySlug(slug)
    // If no project from Sanity, fall back to local data
    if (!project) {
      project = getProjectBySlug(slug)
    }
  } catch (error) {
    console.error('Error fetching Sanity project:', error)
    // Fall back to local data
    project = getProjectBySlug(slug)
  }
  
  if (!project) {
    return <div className="container mx-auto py-16 px-4">Project not found</div>
  }
  
  return <ProjectDetailContent project={project} />
} 