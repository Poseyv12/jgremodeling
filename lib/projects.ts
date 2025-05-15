export interface Project {
  id: number | string // Can be number for local data or string for Sanity _id
  title: string
  slug: string
  category: string
  location: string
  thumbnail: string
  thumbnailAlt?: string
  description: string
  completionDate?: string
  client?: string
  challenge?: string
  solution?: string
  result?: string
  images: {
    src: string
    alt: string
    caption?: string
  }[]
  features?: string[]
  order?: number
}

// Sample project data
export const projects: Project[] = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    slug: "modern-kitchen-renovation",
    category: "Kitchen",
    location: "Miami Beach, FL",
    thumbnail: "/image-gallery/gallery-kitchen.jpeg",
    description: "Complete redesign of a luxury kitchen with custom cabinetry and high-end appliances.",
    completionDate: "June 2023",
    client: "Private Residence",
    challenge: "The clients wanted to maximize storage and workspace in their limited kitchen area while creating a contemporary aesthetic that matched the rest of their home.",
    solution: "We designed custom floor-to-ceiling cabinetry, installed a central island with waterfall countertops, and integrated high-end appliances that complement the minimalist design.",
    result: "A stunning, functional kitchen that serves as the centerpiece of the home while providing ample storage and an improved workflow for cooking and entertaining.",
    images: [
      {
        src: "/image-gallery/gallery-kitchen.jpeg",
        alt: "Completed modern kitchen with island",
        caption: "Completed kitchen renovation featuring custom cabinetry and waterfall island"
      },
      {
        src: "/image-gallery/gallery-kitchen2.jpeg",
        alt: "Kitchen from another angle",
        caption: "View of the kitchen from the dining area showing the integrated appliances"
      },
      {
        src: "/hero-kitchen.jpeg",
        alt: "Kitchen countertop detail",
        caption: "Detail of the quartz countertops and backsplash"
      }
    ],
    features: [
      "Custom cabinetry with soft-close doors and drawers",
      "Quartz countertops with waterfall edge",
      "Built-in wine refrigerator",
      "Professional-grade stainless steel appliances",
      "Undermount lighting",
      "Hardwood flooring",
      "Designer fixtures and hardware"
    ]
  },
  {
    id: 2,
    title: "Luxury Bathroom Remodel",
    slug: "luxury-bathroom-remodel",
    category: "Bathroom",
    location: "Coral Gables, FL",
    thumbnail: "/image-gallery/gallery-bath.jpeg",
    description: "Spa-inspired bathroom renovation featuring marble surfaces and custom fixtures.",
    completionDate: "March 2023",
    client: "Private Residence",
    challenge: "The homeowners wanted to transform their outdated bathroom into a luxurious spa-like retreat while addressing water damage issues.",
    solution: "We completely gutted the space, resolved structural issues, and created a modern bathroom with a spacious walk-in shower, freestanding tub, and custom vanity.",
    result: "A serene, spa-like bathroom that provides both functionality and luxury, with durable materials that will stand the test of time.",
    images: [
      {
        src: "/image-gallery/gallery-bath.jpeg",
        alt: "Completed luxury bathroom",
        caption: "Completed luxury bathroom featuring freestanding tub and walk-in shower"
      },
      {
        src: "/hero-bath.jpeg",
        alt: "Bathroom shower detail",
        caption: "Detail of the walk-in shower with marble tile"
      },
      {
        src: "/project-1.jpg",
        alt: "Bathroom vanity",
        caption: "Custom double vanity with undermount sinks"
      }
    ],
    features: [
      "Heated marble flooring",
      "Freestanding soaking tub",
      "Walk-in shower with rainhead and body jets",
      "Custom double vanity with quartz countertop",
      "LED backlit mirror",
      "High-efficiency toilet",
      "Chrome fixtures and accessories"
    ]
  },
  {
    id: 3,
    title: "Complete Home Renovation",
    slug: "complete-home-renovation",
    category: "Home",
    location: "Boca Raton, FL",
    thumbnail: "/hero-reno.webp",
    description: "Full-home renovation including structural changes and interior design updates.",
    completionDate: "October 2022",
    client: "Private Residence",
    challenge: "The clients purchased an older home with great potential but needed a complete renovation to update the layout and bring it into the modern era.",
    solution: "We performed structural modifications to create an open floor plan, completely renovated all bathrooms and the kitchen, and updated all finishes throughout the home.",
    result: "A transformed living space that blends contemporary design with the home's original character, providing improved functionality and aesthetic appeal.",
    images: [
      {
        src: "/hero-reno.webp",
        alt: "Exterior view of renovated home",
        caption: "Exterior view showing the updated facade"
      },
      {
        src: "/hero-interior.jpeg",
        alt: "Open concept living area",
        caption: "Open concept living area after removing walls"
      },
      {
        src: "/interior-1.avif",
        alt: "Master bedroom",
        caption: "Renovated master bedroom suite"
      }
    ],
    features: [
      "Open concept floor plan",
      "New electrical and plumbing systems",
      "Updated kitchen with island",
      "Renovated bathrooms",
      "New flooring throughout",
      "Custom millwork and built-ins",
      "Energy-efficient windows and doors",
      "Smart home technology integration"
    ]
  },
  {
    id: 4,
    title: "Contemporary Interior Design",
    slug: "contemporary-interior-design",
    category: "Interior",
    location: "Fort Lauderdale, FL",
    thumbnail: "/interior-1.avif",
    description: "Modern interior redesign with custom furniture and lighting solutions.",
    completionDate: "January 2023",
    client: "Private Residence",
    challenge: "The clients wanted to update their dated interior with a contemporary design that maximized natural light and created a cohesive flow throughout the home.",
    solution: "We developed a comprehensive interior design plan that included custom furniture, strategic lighting, and a neutral color palette with bold accents.",
    result: "A sophisticated, contemporary living space that feels both luxurious and comfortable, with thoughtful design elements that enhance the home's architectural features.",
    images: [
      {
        src: "/interior-1.avif",
        alt: "Living room design",
        caption: "Contemporary living room with custom furniture"
      },
      {
        src: "/hero-interior.jpeg",
        alt: "Dining area",
        caption: "Dining area with designer lighting"
      },
      {
        src: "/hero-kitchen.jpeg",
        alt: "Kitchen view",
        caption: "Updated kitchen with coordinated design elements"
      }
    ],
    features: [
      "Custom furniture pieces",
      "Designer lighting fixtures",
      "Built-in shelving and storage",
      "Curated artwork and accessories",
      "Motorized window treatments",
      "Area rugs and textiles",
      "Color and material consultation"
    ]
  },
  {
    id: 5,
    title: "Gourmet Kitchen Upgrade",
    slug: "gourmet-kitchen-upgrade",
    category: "Kitchen",
    location: "Palm Beach, FL",
    thumbnail: "/image-gallery/gallery-kitchen2.jpeg",
    description: "High-end kitchen remodel for a gourmet cooking enthusiast with professional-grade appliances.",
    completionDate: "August 2022",
    client: "Private Residence",
    challenge: "The client, an avid home chef, needed a kitchen that could accommodate professional-grade appliances and provide an efficient workflow for elaborate meal preparation.",
    solution: "We designed a chef-inspired kitchen with a professional range, double ovens, and prep sink, while maintaining an elegant aesthetic that complemented the home's style.",
    result: "A gourmet kitchen that balances professional functionality with beautiful design, allowing the homeowner to entertain and prepare meals with ease.",
    images: [
      {
        src: "/image-gallery/gallery-kitchen2.jpeg",
        alt: "Gourmet kitchen overview",
        caption: "Overview of the completed gourmet kitchen"
      },
      {
        src: "/image-gallery/gallery-kitchen.jpeg",
        alt: "Professional range and hood",
        caption: "Professional-grade range with custom hood"
      },
      {
        src: "/hero-kitchen.jpeg",
        alt: "Kitchen island",
        caption: "Large kitchen island with prep sink"
      }
    ],
    features: [
      "48-inch professional range",
      "Double wall ovens",
      "Commercial-grade refrigerator",
      "Multiple prep areas",
      "Custom range hood",
      "Walk-in pantry",
      "Pot filler",
      "Dedicated beverage station"
    ]
  },
  {
    id: 6,
    title: "Master Bathroom Suite",
    slug: "master-bathroom-suite",
    category: "Bathroom",
    location: "Aventura, FL",
    thumbnail: "/project-1.jpg",
    description: "Luxury master bathroom transformation with walk-in shower and freestanding tub.",
    completionDate: "May 2023",
    client: "Private Residence",
    challenge: "The homeowners wanted to transform their cramped master bathroom into a spacious, luxury retreat while addressing outdated plumbing and ventilation issues.",
    solution: "We expanded the bathroom by absorbing adjacent closet space, created a wet room with freestanding tub and shower, and installed high-end finishes throughout.",
    result: "A stunning master bathroom retreat that provides both luxury and functionality, with improved ventilation and modern plumbing systems.",
    images: [
      {
        src: "/project-1.jpg",
        alt: "Master bathroom overview",
        caption: "Overview of the completed master bathroom"
      },
      {
        src: "/hero-bath.jpeg",
        alt: "Freestanding tub",
        caption: "Freestanding soaking tub with floor-mounted filler"
      },
      {
        src: "/image-gallery/gallery-bath.jpeg",
        alt: "Walk-in shower",
        caption: "Spacious walk-in shower with multiple shower heads"
      }
    ],
    features: [
      "Freestanding soaking tub",
      "Walk-in shower with bench",
      "Dual vanities with custom mirrors",
      "Heated flooring",
      "Private water closet",
      "Custom storage solutions",
      "High-end plumbing fixtures",
      "Improved ventilation system"
    ]
  }
]

// Function to get all projects
export function getAllProjects(): Project[] {
  return projects
}

// Function to get a specific project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

// Function to get projects by category
export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(project => project.category === category)
} 