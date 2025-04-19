import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">About J.G. Remodeling</h2>
          <p className="text-lg text-gray-600 mb-6">
            Jeff Grossman, president of JG Remodeling and Construction, has been recognized as one of South Florida&apos;s 
            most innovative contractors. With over 25 years of experience and a business degree from the University of Miami, 
            our company has evolved from specializing in kitchen and bathroom designs to managing comprehensive home renovations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Image 
              src="http://www.jgremodelingandconstruction.com/images/skin1/prism2.png" 
              alt="Gold Coast Prism Award"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 