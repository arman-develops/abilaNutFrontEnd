import React from 'react';

interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
}

interface MeetTheTeamProps {
  title?: string;
  members: TeamMember[];
}

const MeetTheTeam: React.FC<MeetTheTeamProps> = ({
  title = "Meet Our Team",
  members,
}) => {
  return (
    <section className="py-12 bg-gray-100 border border-gray-300 rounded-lg shadow-lg mb-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">{title}</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {members.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-gray-600 italic mb-2">{member.position}</p>
              <p className="text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
