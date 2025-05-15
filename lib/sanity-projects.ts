import { fetchSanityData } from './sanity';
import { Project } from './projects';

// Function to get all projects from Sanity
export async function getSanityProjects(): Promise<Project[]> {
  const query = `
    *[_type == "jgProject"] | order(order asc) {
      "id": _id,
      title,
      "slug": slug.current,
      category,
      location,
      "thumbnail": thumbnail.asset->url,
      "thumbnailAlt": thumbnail.alt,
      description,
      completionDate,
      client,
      challenge,
      solution,
      result,
      "images": images[] {
        "src": image.asset->url,
        alt,
        caption
      },
      features,
      order
    }
  `;
  
  return fetchSanityData<Project[]>(query);
}

// Function to get a specific project by slug from Sanity
export async function getSanityProjectBySlug(slug: string): Promise<Project | null> {
  const query = `
    *[_type == "jgProject" && slug.current == $slug][0] {
      "id": _id,
      title,
      "slug": slug.current,
      category,
      location,
      "thumbnail": thumbnail.asset->url,
      "thumbnailAlt": thumbnail.alt,
      description,
      completionDate,
      client,
      challenge,
      solution,
      result,
      "images": images[] {
        "src": image.asset->url,
        alt,
        caption
      },
      features,
      order
    }
  `;
  
  const project = await fetchSanityData<Project | null>(query, { slug });
  return project;
}

// Function to get projects by category from Sanity
export async function getSanityProjectsByCategory(category: string): Promise<Project[]> {
  const query = `
    *[_type == "jgProject" && category == $category] | order(order asc) {
      "id": _id,
      title,
      "slug": slug.current,
      category,
      location,
      "thumbnail": thumbnail.asset->url,
      "thumbnailAlt": thumbnail.alt,
      description,
      completionDate,
      client,
      challenge,
      solution,
      result,
      "images": images[] {
        "src": image.asset->url,
        alt,
        caption
      },
      features,
      order
    }
  `;
  
  return fetchSanityData<Project[]>(query, { category });
} 