import React from 'react';

interface CraftProps {
  ingredients: string[];
  production: string;
  healthBenefits: string[];
}

const Craft: React.FC<CraftProps> = ({
  ingredients,
  production,
  healthBenefits,
}) => {
  return (
    <section className="py-12 bg-gray-100 border border-gray-300 rounded-lg shadow-lg mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Crafted with Care</h2>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Ingredients Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h3>
            <ul className="list-disc list-inside text-gray-700">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Production Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Production</h3>
            <p className="text-gray-700">{production}</p>
          </div>

          {/* Health Benefits Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Health Benefits</h3>
            <ul className="list-disc list-inside text-gray-700">
              {healthBenefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craft;
