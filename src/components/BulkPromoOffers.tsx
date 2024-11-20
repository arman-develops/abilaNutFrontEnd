import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, ShoppingCart } from 'lucide-react'

interface PromoOffer {
  id: number
  title: string
  description: string
  quantity: number
  discount: string // e.g., "20% Off"
  price: string // final price after discount
  image?: string
  link: string
}

interface BulkPromoOffersSectionProps {
  offers: PromoOffer[]
}

const BulkPromoOffersSection: React.FC<BulkPromoOffersSectionProps> = ({ offers }) => {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Package className="w-8 h-8 text-amber-600 mr-3" />
            <h2 className="text-3xl font-bold text-amber-800">Save More with Bulk Orders</h2>
          </div>
          <p className="text-amber-700 text-lg max-w-2xl mx-auto">
            Take advantage of our bulk buying options and enjoy great savings!
          </p>
        </div>

        {/* Promo Offers Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {offer.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
                  />
                  <Badge className="absolute top-2 right-2 bg-amber-500 text-white">
                    {offer.discount}
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl text-amber-800">{offer.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-700 mb-4">{offer.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-amber-900">Quantity: {offer.quantity}</span>
                  <span className="text-xl font-semibold text-amber-600">KES {offer.price}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                  <a href={offer.link}>
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Shop Now
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BulkPromoOffersSection