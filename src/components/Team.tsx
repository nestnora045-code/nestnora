import React from 'react';

// Replace with any preferred images
import ceo from './images/anora.jpeg';
import designer from './images/designer.jpg';
import crdirector from './images/creativedirector.jpg';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Anora',
      role: 'CEO & Pinterest Strategist',
      bio: 'Leads our vision and strategy, helping brands thrive on Pinterest and beyond.',
      image: ceo,
    },
    {
      name: 'David Brooks',
      role: 'Lead Designer',
      bio: 'Creates bold, high-converting visuals that capture attention and drive clicks.',
      image: designer,
    },
    {
      name: 'Sophia Lee',
      role: 'Creative Director',
      bio: 'Shapes the creative direction, blending art and strategy for maximum impact.',
      image: crdirector,
    },
  ];

  return (
    <section id="team" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Meet Our </span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The people who bring strategy and creativity together for your brand’s growth.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              {/* Rounded Image */}
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto mb-6 w-40 h-40 rounded-full object-cover shadow-lg"
              />

              {/* Name & Role */}
              <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-yellow-500 font-medium mb-4">{member.role}</p>

              {/* Bio */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-400 mb-6">
            Ready to work with our expert team?
          </p>
          <a
            href="/book-a-call"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-xl hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/30"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
