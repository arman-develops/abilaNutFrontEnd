import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from 'lucide-react'

interface AboutProductSectionProps {
  title: string
  description: string
  image: string
  features: string[]
  ctaText?: string
  ctaLink?: string
}

const AboutProductSection: React.FC<AboutProductSectionProps> = ({
  title = "Why Choose Our Peanut Butter",
  description = "Made from the finest peanuts, our peanut butter is natural, smooth, and packed with flavor and nutrients.",
  image,
  features = [],
  ctaText = "Learn More",
  ctaLink = "/about",
}) => {
  return (
    <section className="py-12 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container mx-auto px-4 lg:flex lg:items-center lg:gap-12">
        {/* Image Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105" 
              />
            </CardContent>
          </Card>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl text-amber-800 font-bold">{title}</h2>
          <p className="text-amber-700 text-lg">{description}</p>

          {/* Features List */}
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-amber-700">
                <Check className="mr-2 h-5 w-5 text-amber-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          {ctaText && ctaLink && (
            <Button 
              asChild 
              className="bg-amber-600 text-amber-50 hover:bg-amber-700 transition-colors duration-200"
            >
              <a href={ctaLink}>{ctaText}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

export default AboutProductSection