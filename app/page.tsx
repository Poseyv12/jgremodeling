import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { AwardsSection } from "@/components/awards-section"
import { AboutSection } from "@/components/about-section"
import { PhotoGallery } from "@/components/photo-gallery"
import { ServicesSection } from "@/components/services-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'J.G. Remodeling and Construction',
  description: 'J.G. Remodeling and Construction is a leading home remodeling company in Boca Raton, FL. We specialize in kitchen and bathroom renovations, as well as complete home remodeling services.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <HeroCarousel />
        <ServicesSection />
        <AwardsSection />
        <AboutSection />
        <PhotoGallery />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
} 