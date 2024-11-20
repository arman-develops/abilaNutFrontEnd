import React from 'react'
import ProductHighlightProps from "@/interfaces/ProductHighlightProps"
import { BarcodeIcon as Jar } from 'lucide-react'

const ProductHighlightSection: React.FC<ProductHighlightProps> = ({ products }) => {
  return (
    <section className="py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-10">
          <Jar className="w-8 h-8 text-amber-600 mr-2" />
          <h2 className="text-3xl font-bold text-center text-amber-800">Our Best-Selling Peanut Butter</h2>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="bg-amber-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 border-2 border-amber-50">
              <img
                src={product.image}
                alt={`${product.name} - ${product.size}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-amber-900">{product.name} - {product.size}</h3>
                <p className="text-amber-700 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-amber-600">KES {product.price}</span>
                  <a
                    href="/market-place"
                    className="bg-amber-600 text-amber-50 px-4 py-2 rounded-md font-medium hover:bg-amber-700 transition-colors duration-200"
                  >
                    {product.buttonText || "Shop now"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductHighlightSection