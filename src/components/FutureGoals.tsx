import React from 'react';

interface Goal {
  year: number;
  description: string;
}

interface FutureGoalsProps {
  title?: string;
  goals: Goal[];
}

const FutureGoals: React.FC<FutureGoalsProps> = ({
  title = "Our Future Goals",
  goals,
}) => {
  return (
    <section className="py-12 bg-white border border-gray-300 rounded-lg shadow-lg mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">{title}</h2>
        
        <div className="space-y-6">
          {goals.map((goal, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800">{goal.year}</h3>
              <p className="text-gray-700">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureGoals;
