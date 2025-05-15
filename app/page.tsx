import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { AwardsSection } from "@/components/awards-section"
import { AboutSection } from "@/components/about-section"
import { GalleryWithProjects } from "@/components/gallery-server"
import { ServicesSection } from "@/components/services-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import { optimusPrinceps } from "@/app/fonts/optimus-princeps"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: 'J.G. Remodeling and Construction',
  description: 'J.G. Remodeling and Construction is a leading home remodeling company in Boca Raton, FL. We specialize in kitchen and bathroom renovations, as well as complete home remodeling services.',
};

// Loading component for Suspense
function GalleryLoading() {
  return <div className="w-full min-h-[400px] bg-gray-100 animate-pulse"></div>
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation optimusClass={optimusPrinceps.className} />
      <main className="flex-1">
        <HeroCarousel />
        <ServicesSection />
        <AwardsSection />
        <AboutSection />
        <Suspense fallback={<GalleryLoading />}>
          <GalleryWithProjects />
        </Suspense>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
} 