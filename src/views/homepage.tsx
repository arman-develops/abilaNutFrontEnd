import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import heroPeanut from "@/assets/hero_peanut.jpg";
import ProductHighlightSection from "@/components/ProductHighlights";
import products from "@/data/productHighlight";
import Footer from "@/layout/footer";
import AboutProductSection from "@/components/AboutProduct";
import TestimonialsSection from "@/components/Testimonial";
import testimonials from "@/data/testimonials";
import PairingIdeasSection from "@/components/PairingIdeas";
import pairingIdeas from "@/data/ideas";
import BulkPromoOffersSection from "@/components/BulkPromoOffers";
import bulkOffers from "@/data/bulkoffers";
import healthyPeanut from '../assets/peanut-butter-healthy.jpg';

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection
                backgroundImage = {heroPeanut}
                title = "Pure Peanut Butter Goodness"
                subtitle="Indulge in our all-natural, small-batch peanut butter."
                ctaLink="/market-place"
                ctaText="Shop Now"
            />
            <ProductHighlightSection
                products={products}
            />
            <AboutProductSection 
                title="Why Choose Abila Nuts Peanut Butter"
                description="Our peanut butter is crafted from high-quality, natural peanuts with no added preservatives. Enjoy rich flavor and healthy nutrition in every spoonful."
                image={healthyPeanut}
                features={[
                  "100% natural ingredients",
                  "No added sugar or preservatives",
                  "High in protein and healthy fats",
                  "Smooth and creamy texture",
                ]}
                ctaText="Learn More"
                ctaLink="/about"
            />
            <TestimonialsSection 
                testimonials={testimonials}
            />
            <PairingIdeasSection ideas={pairingIdeas} />
            <BulkPromoOffersSection offers={bulkOffers} />
            <Footer />
        </>
    );
}