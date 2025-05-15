import { getSanityProjects } from '@/lib/sanity-projects'
import { getAllProjects } from '@/lib/projects'
import { PhotoGallery } from './photo-gallery'

export async function GalleryWithProjects() {
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

  // Map projects to gallery photos format
  const photos = projects.map(project => ({
    src: project.thumbnail,
    alt: project.thumbnailAlt || project.title,
    category: project.category,
    slug: project.slug
  }))

  return <PhotoGallery photos={photos} />
} 