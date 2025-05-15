import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto py-24 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">Page Not Found</h1>
      <p className="text-xl mb-8">
        We couldn&apos;t find the page you&apos;re looking for.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link 
          href="/"
          className="bg-black text-white px-6 py-3 rounded-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Return Home
        </Link>
        <Link 
          href="/gallery"
          className="bg-white border border-black text-black px-6 py-3 rounded-sm font-medium hover:bg-gray-100 transition-colors"
        >
          Browse Projects
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