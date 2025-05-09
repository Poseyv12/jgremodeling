import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-8">
              <Image 
                src="/headshot.jpeg"
                alt="Jeff Grossman - Founder of JG Remodeling"
                width={200}
                height={200}
                className="mx-auto object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-6">
              Jeff Grossman, Owner
            </h3>
         
            {/* <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Image 
                src="http://www.jgremodelingandconstruction.com/images/skin1/prism2.png" 
                alt="Gold Coast Prism Award"
                width={200}
                height={200}
                className="object-contain"
              />
            </div> */}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent mb-8">
            Excellence in Every Detail
          </h2>
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              At JG Remodeling and Construction, we bring over 25 years of industry experience to every project, delivering top-tier home transformations with unmatched professionalism and precision. Founded by Jeff Grossman, a University of Miami business graduate and one of South Florida&apos;s most innovative contractors, our company has built a reputation for excellence, integrity, and customer satisfaction.
            </p>

            <p className="text-lg leading-relaxed">
              What began as a boutique firm focused on kitchen and bathroom design has evolved into a full-service remodeling and construction company, managing everything from interior renovations to complete home makeovers. Whether you&apos;re upgrading a single room or reimagining your entire space, we offer personalized service, modern solutions, and flawless execution—on time and on budget.
            </p>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-black mb-6">Why Homeowners Choose Us:</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  Decades of hands-on experience in residential remodeling
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  Expertise in both classic and contemporary design trends
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  Licensed, insured, and committed to high standards
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  Transparent communication from start to finish
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  Tailored renovation plans to suit your unique vision
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mt-8">
              At JG Remodeling and Construction, your home is more than a project—it&apos;s our passion. Let us help you turn your ideas into a space that truly reflects your lifestyle and taste.
            </p>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-semibold text-black mb-4">Ready to transform your home?</h3>
              <p className="text-lg text-gray-700">
                Contact us today for a free consultation and discover the JG difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 