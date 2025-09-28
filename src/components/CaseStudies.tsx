import React, { useState } from 'react';
import { TrendingUp, Users, DollarSign, ArrowUpRight, X } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      company: "Luxe Beauty Co.",
      description:
        "Transformed their Pinterest presence and email automation, resulting in explosive growth in just 90 days.",
      image:
        "https://images.pexels.com/photos/3685175/pexels-photo-3685175.jpeg?auto=compress&cs=tinysrgb&w=800",
      modalImage:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: { revenue: "+250%", roas: "4.2x", traffic: "+180%" },
      fullDetails:
        "For Luxe Beauty Co., we began with a deep audit of their Pinterest profile and customer journey. We rebuilt their boards to highlight trending products, created high-converting pins with data-driven creative testing, and set up advanced email automations for cart recovery and product launches. Through consistent A/B testing and audience segmentation, we achieved a 4.2x ROAS and 250% revenue growth within 90 days."
    },
    {
      company: "Urban Home Studio",
      description:
        "Leveraged Pinterest's visual platform to showcase products and build a highly engaged email list.",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      modalImage:
        "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=800",
      results: { revenue: "+320%", roas: "5.1x", traffic: "+210%" },
      fullDetails:
        "Urban Home Studio needed to scale without losing brand identity. We crafted a visual storytelling strategy for Pinterest, paired with automated email flows that nurtured subscribers. Through strategic keyword targeting, seasonal campaigns, and automated welcome series, we increased traffic by 210% and achieved 5.1x ROAS."
    },
    {
      company: "Fit Fashion Hub",
      description:
        "Created targeted Pinterest campaigns and email sequences that resonated with fitness enthusiasts.",
      image:
        "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800",
      // ✅ Updated gym-themed modal image
      modalImage:
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800", // Gym photo
      results: { revenue: "+190%", roas: "3.8x", traffic: "+150%" },
      fullDetails:
        "Fit Fashion Hub’s challenge was standing out in a competitive market. We built interest-based Pinterest audiences, designed bold creative assets, and implemented drip email campaigns focused on product education and limited-time offers. This resulted in a 190% revenue boost and a consistent 3.8x ROAS."
    },
  ];

  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Success </span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Real results from real e-commerce businesses. See how we've helped
            brands achieve extraordinary growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-200 hover:border-yellow-500/60 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {study.company}
                </h3>
                <p className="text-gray-700 mb-6">{study.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-100 rounded-lg">
                    <div className="flex items-center justify-center mb-1">
                      <DollarSign className="h-4 w-4 text-yellow-600 mr-1" />
                      <span className="text-lg font-bold text-gray-900">
                        {study.results.revenue}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">Revenue</div>
                  </div>
                  <div className="text-center p-3 bg-gray-100 rounded-lg">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="h-4 w-4 text-yellow-600 mr-1" />
                      <span className="text-lg font-bold text-gray-900">
                        {study.results.roas}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">ROAS</div>
                  </div>
                  <div className="text-center p-3 bg-gray-100 rounded-lg">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-yellow-600 mr-1" />
                      <span className="text-lg font-bold text-gray-900">
                        {study.results.traffic}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">Traffic</div>
                  </div>
                </div>

                <button
                  onClick={() => setSelected(index)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 text-yellow-700 rounded-xl hover:from-yellow-500/20 hover:to-yellow-600/20 hover:border-yellow-500/50 transition-all duration-300 group"
                >
                  View Case Study
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative bg-white rounded-2xl max-w-2xl w-full p-8 shadow-xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={caseStudies[selected].modalImage}
              alt={caseStudies[selected].company + ' detailed view'}
              className="w-full h-56 object-cover rounded-xl mb-6"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {caseStudies[selected].company}
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {caseStudies[selected].fullDetails}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudies;
