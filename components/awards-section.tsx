import { Star } from "lucide-react"

export function AwardsSection() {
  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">25+</div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
              <Star className="fill-current" size={24} />
              <Star className="fill-current" size={24} />
              <Star className="fill-current" size={24} />
              <Star className="fill-current" size={24} />
              <Star className="fill-current" size={24} />
            </div>
            <div className="text-gray-600">#1 in Boca Raton</div>
          </div>
        </div>
      </div>
    </section>
  )
} 