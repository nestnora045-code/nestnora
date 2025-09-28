import React from 'react';
import { Users, Zap, Award } from 'lucide-react';
import about from "../components/images/about.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white pt-12 md:pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gray-900">About </span>
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Nestnora
                </span>
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We're not your typical digital marketing agency. We specialize exclusively in Pinterest advertising and email marketing for e-commerce brands, helping them achieve extraordinary growth through data-driven strategies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team combines deep platform expertise with e-commerce psychology to create campaigns that don't just generate traffic, but drive actual revenue growth for our partners.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-100 rounded-xl border border-yellow-500/30 hover:border-yellow-500/50 transition-colors">
                <Users className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>

              <div className="text-center p-6 bg-gray-100 rounded-xl border border-yellow-500/30 hover:border-yellow-500/50 transition-colors">
                <Zap className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">300%</div>
                <div className="text-sm text-gray-600">Avg ROI</div>
              </div>

              <div className="text-center p-6 bg-gray-100 rounded-xl border border-yellow-500/30 hover:border-yellow-500/50 transition-colors">
                <Award className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">2 Years</div>
                <div className="text-sm text-gray-600">Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative lg:order-last">
            <div className="relative z-10 bg-gray-50 rounded-2xl p-8 border border-yellow-500/20 shadow-md">
              <img
                src={about}
                alt="Team collaboration"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To revolutionize how e-commerce brands approach Pinterest advertising and email marketing,
                delivering measurable results that transform businesses.
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-600/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
