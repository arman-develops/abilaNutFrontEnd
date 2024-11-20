import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { QuoteIcon } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  text: string
  location?: string
  image?: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-12">
          <QuoteIcon className="w-8 h-8 text-amber-600 mr-3" />
          <h2 className="text-3xl font-bold text-amber-800">What Our Customers Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-amber-300 text-amber-800">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-lg font-semibold text-amber-800">{testimonial.name}</p>
                    {testimonial.location && (
                      <p className="text-sm text-amber-600">{testimonial.location}</p>
                    )}
                  </div>
                </div>
                <p className="text-amber-700 italic relative pl-6">
                  <QuoteIcon className="absolute left-0 top-0 w-4 h-4 text-amber-400" />
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection