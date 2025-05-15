import { type Project } from "@/lib/projects"
import { ProjectDetailContent } from "@/components/project-detail-content"

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return <ProjectDetailContent project={project} />
} 