import Link from "next/link"

export default function ProjectNotFound() {
  return (
    <div className="container mx-auto py-24 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
      <p className="text-xl mb-8">
        We couldn&apos;t find the project you&apos;re looking for.
      </p>
      <div className="flex justify-center gap-4">
        <Link 
          href="/gallery"
          className="bg-black text-white px-6 py-3 rounded-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Browse All Projects
        </Link>
        <Link 
          href="/contact"
          className="bg-white border border-black text-black px-6 py-3 rounded-sm font-medium hover:bg-gray-100 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
} 