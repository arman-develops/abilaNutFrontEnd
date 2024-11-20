import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Minus, Plus } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import { Badge } from "@/components/ui/badge"

interface PeanutProduct {
  id: number
  name: string
  size: string
  price: number
  image: string
}

interface ProductCardProps {
  product: PeanutProduct
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))
  
  const handleAddToCart = () => {
    addToCart({ ...product, quantity })
    setQuantity(1) // Reset quantity after adding to cart
  }

  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative">
          <img 
            src={product.image} 
            alt={`${product.name} ${product.size}`} 
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
          />
          <Badge className="absolute top-2 right-2 bg-amber-500 text-white">
            {product.size}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl text-amber-800 mb-2">{product.name}</CardTitle>
        <p className="text-2xl font-bold text-amber-600">KES {product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 p-4 bg-amber-50">
        <div className="flex items-center justify-between w-full">
          <Button variant="outline" size="icon" onClick={decrementQuantity} aria-label="Decrease quantity">
            <Minus className="h-4 w-4" />
          </Button>
          <span className="text-xl font-semibold text-amber-800">{quantity}</span>
          <Button variant="outline" size="icon" onClick={incrementQuantity} aria-label="Increase quantity">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}