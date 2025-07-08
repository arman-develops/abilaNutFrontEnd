import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="bg-amber-50 py-12 text-amber-800">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
        
        {/* Brand and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-900">Peanut Butter Marketplace</h2>
          <p className="text-sm">The best peanut butter crafted with passion. Enjoy a variety of flavors and promotions for every peanut butter lover!</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-amber-900">Quick Links</h3>
          <ul className="space-y-2">
            <li><Button variant="link" asChild className="text-amber-700 hover:text-amber-900 p-0"><a href="/">Home</a></Button></li>
            <li><Button variant="link" asChild className="text-amber-700 hover:text-amber-900 p-0"><a href="/products">Products</a></Button></li>
            <li><Button variant="link" asChild className="text-amber-700 hover:text-amber-900 p-0"><a href="/about">About Us</a></Button></li>
            <li><Button variant="link" asChild className="text-amber-700 hover:text-amber-900 p-0"><a href="/contact">Contact</a></Button></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4 text-amber-900">Contact Us</h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-center justify-center lg:justify-start">
              <Mail className="mr-2 h-4 w-4" /> support@peanutbuttermarketplace.com
            </p>
            <p className="flex items-center justify-center lg:justify-start">
              <Phone className="mr-2 h-4 w-4" /> +1 (555) 123-4567
            </p>
            <p className="flex items-center justify-center lg:justify-start">
              <MapPin className="mr-2 h-4 w-4" /> 123 Nut St, Nutville, NY
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-semibold mb-4 text-amber-900">Follow Us</h3>
          <div className="flex justify-center lg:justify-start space-x-4">
            <Button variant="ghost" size="icon" asChild className="hover:text-amber-900">
              <a href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-amber-900">
              <a href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-amber-900">
              <a href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="container mx-auto px-4 mt-8 pt-4 text-center text-sm">
        <Separator className="mb-4 bg-amber-200" />
        <p>&copy; {new Date().getFullYear()} Peanut Butter Marketplace. All rights reserved.</p>
      </div>
    </footer>
  )
}