import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  const comparisons = [
    { feature: "Dedicated Account Manager", nestnora: true, traditional: false },
    { feature: "Pinterest Specialization",  nestnora: true, traditional: false },
    { feature: "E-commerce Focus",         nestnora: true, traditional: false },
    { feature: "Custom Email Sequences",   nestnora: true, traditional: true  },
    { feature: "Monthly Strategy Calls",   nestnora: true, traditional: false },
    { feature: "Real-time Performance Tracking", nestnora: true, traditional: false },
    { feature: "Creative Design Included", nestnora: true, traditional: false },
    { feature: "24/7 Support",             nestnora: true, traditional: false },
    { feature: "Revenue-focused Optimization", nestnora: true, traditional: false }
  ];

  return (
    <section className="pt-24 pb-16 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Not Your Average </span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Agency
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Nestnora compares to traditional marketing agencies
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden">
          <div className="grid grid-cols-3 bg-gray-800 border-b border-gray-700">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-300">Features</h3>
            </div>
            <div className="p-6 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border-l border-gray-700">
              <h3 className="text-lg font-bold text-yellow-500 text-center">Nestnora</h3>
            </div>
            <div className="p-6 border-l border-gray-700">
              <h3 className="text-lg font-bold text-gray-400 text-center">Traditional Agencies</h3>
            </div>
          </div>

          {comparisons.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 border-b border-gray-700 last:border-b-0 hover:bg-gray-800/30 transition-colors"
            >
              <div className="p-6">
                <span className="text-gray-200">{item.feature}</span>
              </div>
              <div className="p-6 bg-gradient-to-r from-yellow-500/5 to-yellow-600/5 border-l border-gray-700 text-center">
                {item.nestnora
                  ? <Check className="h-6 w-6 text-green-500 mx-auto" />
                  : <X className="h-6 w-6 text-red-500 mx-auto" />}
              </div>
              <div className="p-6 border-l border-gray-700 text-center">
                {item.traditional
                  ? <Check className="h-6 w-6 text-green-500 mx-auto" />
                  : <X className="h-6 w-6 text-red-500 mx-auto" />}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-400 mb-6">
            Ready to experience the Nestnora difference?
          </p>
          <a
            href="/book-a-call"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-xl hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/30"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
