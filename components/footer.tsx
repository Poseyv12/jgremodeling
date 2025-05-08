import { Button } from "@/components/ui/button"
import { PhoneCall, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-8 bg-blue-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white">
            © 2024 J.G. Remodeling. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-blue-600">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-blue-600">
              <PhoneCall className="mr-2 h-4 w-4" />
              (561) 998-7711
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
} 