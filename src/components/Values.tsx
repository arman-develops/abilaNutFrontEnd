import React from 'react';

interface ValuesProps {
  title?: string;
  values: string[];
}

const Values: React.FC<ValuesProps> = ({
  title = "Our Values",
  values,
}) => {
  return (
    <section className="py-12 bg-gray-100 border border-gray-300 rounded-lg shadow-lg mb-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">{title}</h2>
        <ul className="list-disc list-inside space-y-2">
          {values.map((value, index) => (
            <li key={index} className="text-gray-700 text-lg">{value}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Values;
