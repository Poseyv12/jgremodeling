import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function LeadForm() {
  return (
    <Card className="w-full max-w-md bg-white shadow-lg">
      <CardHeader className="pb-3">
        <h3 className="text-lg font-bold text-center text-blue-900">Request Free Consultation</h3>
      </CardHeader>
      <CardContent>
        <form className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-sm">Name</Label>
              <Input id="name" placeholder="John Doe" className="h-8" required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="phone" className="text-sm">Phone</Label>
              <Input id="phone" type="tel" placeholder="(561) XXX-XXXX" className="h-8" required />
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="email" className="text-sm">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" className="h-8" required />
          </div>
          <div className="space-y-1">
            <Label htmlFor="project" className="text-sm">Project Details</Label>
            <Textarea 
              id="project" 
              placeholder="Brief description of your project"
              className="min-h-[60px] resize-none"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 h-8 text-sm">
            Schedule Consultation
          </Button>
          <p className="text-[10px] text-center text-gray-500 mt-1">
            Your information is secure and will never be shared.
          </p>
        </form>
      </CardContent>
    </Card>
  )
} 