import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { AwardsSection } from "@/components/awards-section"
import { AboutSection } from "@/components/about-section"
import { PhotoGallery } from "@/components/photo-gallery"
import { ServicesSection } from "@/components/services-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

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