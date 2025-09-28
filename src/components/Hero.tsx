import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-600/5"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(212, 175, 55, 0.1) 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Added top padding here */}
      <div className="relative max-w-7xl mx-auto px-6 text-center pt-12 md:pt-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Truly Premium
          </span>
          <br />
          <span className="text-white">E-commerce Growth</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
          Professional Pinterest Ads & Email Marketing services for e-commerce businesses that want explosive growth.
        </p>

        <div className="flex flex-row gap-5 justify-center items-center">
          <Link
            to="/book-a-call"
            className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 
                       text-black font-bold rounded-xl hover:from-yellow-400 hover:to-yellow-500 
                       transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/30 
                       flex items-center gap-2 text-base"
          >
            Book a Call
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="#case-studies"
            className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-yellow-500/50 text-yellow-500 
                       font-bold rounded-xl hover:border-yellow-500 hover:bg-yellow-500/10 
                       transition-all duration-300 flex items-center gap-2 text-base"
          >
            See Our Results
            <TrendingUp className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
