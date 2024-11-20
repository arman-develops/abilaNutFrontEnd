import React from 'react';

interface SustainabilityProps {
  title?: string;
  practices: string[];
  communityInitiatives: string[];
  partnerships: string[];
}

const Sustainability: React.FC<SustainabilityProps> = ({
  title = "Our Commitment to Sustainability",
  practices,
  communityInitiatives,
  partnerships,
}) => {
  return (
    <section className="py-12 bg-gray-100 border border-gray-300 rounded-lg shadow-lg mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">{title}</h2>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Sustainable Practices Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Sustainable Practices</h3>
            <ul className="list-disc list-inside text-gray-700">
              {practices.map((practice, index) => (
                <li key={index}>{practice}</li>
              ))}
            </ul>
          </div>

          {/* Community Initiatives Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Initiatives</h3>
            <ul className="list-disc list-inside text-gray-700">
              {communityInitiatives.map((initiative, index) => (
                <li key={index}>{initiative}</li>
              ))}
            </ul>
          </div>

          {/* Partnerships Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Partnerships</h3>
            <ul className="list-disc list-inside text-gray-700">
              {partnerships.map((partnership, index) => (
                <li key={index}>{partnership}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
