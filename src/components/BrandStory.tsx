import React from 'react';

interface BrandStoryProps {
  title?: string;
  story: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

const BrandStory: React.FC<BrandStoryProps> = ({
  title = "Our Story",
  story,
  image,
  ctaText = "Learn More",
  ctaLink = "/about",
}) => {
  return (
    <section className="py-12 bg-gray-100 border border-gray-300 rounded-lg shadow-lg mb-8">
      <div className="container mx-auto px-4 lg:flex lg:items-center lg:gap-8">
        {/* Image Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-80 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105" 
          />
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-700 mb-6">{story}</p>

          {/* CTA Button */}
          {ctaText && ctaLink && (
            <a
              href={ctaLink}
              className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors duration-200 shadow-md"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
