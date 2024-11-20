
import products from '../data/products';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '@/layout/footer';
import HeroSection from '@/components/Hero';
import marketHeroImage from '@/assets/market_hero2.jpeg';
import LimitedTimeOffer from '@/components/LimitedOffers';

export default function Marketplace() {
  return (
    <div className="min-h-full bg-background flex flex-col">
        <Navbar />
        <HeroSection
          backgroundImage={marketHeroImage}
          title='Welcome Abila Nuts Market Place'
          subtitle='Discover premium peanut butter blends crafted for every taste.'
          ctaText='Buy now'
          ctaLink='/market-place'
        />
        <main className="flex-grow container mx-auto px-4 py-12 bg-gradient-to-b from-amber-50 to-amber-100">
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-800">Our Peanut Butter Selection</h1>
        <p className="text-center text-amber-700 mb-12 max-w-2xl mx-auto">
          Choose from our range of delicious, creamy peanut butter in various sizes. 
          Each jar is crafted with care using only the finest peanuts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <LimitedTimeOffer
        offerText="Save 20% on all products! Limited time only."
        endDate="2024-12-31"
      />
        <Footer />
    </div>
  )
}