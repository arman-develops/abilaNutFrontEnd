// Vision.tsx
import React from 'react';

interface VisionProps {
  title?: string;
  statement: string;
}

const Vision: React.FC<VisionProps> = ({ title = "Our Vision", statement }) => {
  return (
    <section className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 text-base leading-relaxed">{statement}</p>
    </section>
  );
};

export default Vision;
