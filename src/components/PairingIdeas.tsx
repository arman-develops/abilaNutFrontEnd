import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils } from 'lucide-react'
import PairingIdeasSectionProps from '@/interfaces/PairingIdeasProps'

const PairingIdeasSection: React.FC<PairingIdeasSectionProps> = ({ ideas }) => {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Utensils className="w-8 h-8 text-amber-600 mr-3" />
            <h2 className="text-3xl font-bold text-amber-800">Perfect Pairing Ideas</h2>
          </div>
          <p className="text-amber-700 text-lg max-w-2xl mx-auto">
            Discover delicious ways to enjoy our peanut butter with these pairing ideas!
          </p>
        </div>

        {/* Pairing Ideas Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea) => (
            <Card key={idea.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {idea.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={idea.image} 
                    alt={idea.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl text-amber-800">{idea.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700">{idea.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PairingIdeasSection