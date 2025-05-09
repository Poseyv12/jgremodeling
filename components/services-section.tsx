import { ArrowRight } from "lucide-react"

export function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-black text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Remodeling</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>Kitchen Remodeling</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>Bathroom Remodeling</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>Complete Home Remodeling</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>High-rise / Condo Renovations</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Design & Build</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>Custom Home Additions</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>Architectural Design</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>Entertainment Centers</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>Custom Wall Units</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Specialty Services</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>Cabinetry & Installation</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>Flooring & Installation</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>Electrical Services</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span>Plumbing Services</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 