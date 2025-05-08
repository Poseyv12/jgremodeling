import { Button } from "@/components/ui/button"
import { PhoneCall, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
        <p className="text-lg text-blue-100 mb-8">
          Contact us today for a complimentary consultation and let&apos;s bring your vision to life.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            <PhoneCall className="mr-2 h-5 w-5" />
            (561) 998-7711
          </Button>
          <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-blue-800" asChild>
            <a href="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
} 