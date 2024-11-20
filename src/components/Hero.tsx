import HeroProps from '@/interfaces/HeroSectionProps';
import React from 'react';

function HeroSection({ 
  backgroundImage, 
  title = "Discover Pure Peanut Butter", 
  subtitle = "Crafted with care for the ultimate nutty experience.", 
  ctaText = "Shop Now", 
  ctaLink = "/products" 
}: HeroProps) {
  return (
    <section 
      className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text Content */}
      <div className="relative text-center text-white px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl text-amber-100 font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-2xl font-light mb-6">{subtitle}</p>
        <a 
          href={ctaLink} 
          className="inline-block bg-primary text-amber-100 px-6 py-3 rounded-md font-medium hover:bg-primary-dark hover:text-white transition-colors duration-200"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
