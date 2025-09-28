import React from 'react';
import { Target, Mail, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: "Pinterest Advertising",
      description:
        "Leverage Pinterest's visual discovery engine to drive high-intent traffic to your e-commerce store with expertly crafted ad campaigns.",
      features: ["Campaign Strategy", "Creative Design", "Audience Targeting", "Performance Optimization"],
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Build automated email sequences that convert subscribers into loyal customers with personalized messaging and strategic timing.",
      features: ["Email Automation", "List Building", "A/B Testing", "Revenue Optimization"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: BarChart3,
      title: "Analytics & Optimization",
      description:
        "Data-driven insights and continuous optimization to maximize your return on ad spend and email performance.",
      features: ["Performance Tracking", "Conversion Analysis", "ROI Optimization", "Monthly Reporting"],
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    // ↓ reduce bottom padding from py-24 to py-16
    <section id="services" className="pt-24 pb-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized solutions designed to scale your e-commerce business through proven Pinterest and email marketing strategies.
          </p>
        </div>

        {/* Service Cards */}
        {/* ↓ remove mb-12 to eliminate extra bottom gap */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="h-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 p-3 bg-yellow-500/20 rounded-xl backdrop-blur-sm border border-yellow-500/30">
                    <service.icon className="h-6 w-6 text-yellow-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More → Book a Call */}
                  <Link
                    to="/book-a-call"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 text-yellow-500 rounded-xl hover:from-yellow-500/20 hover:to-yellow-600/20 hover:border-yellow-500/50 transition-all duration-300 group"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Big Call-to-Action Button */}
        <div className="text-center mt-12">
          <Link
            to="/book-a-call"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-2xl shadow-2xl hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
