import React, { useState } from 'react';
import { Calendar, Users, Rocket, Target, BarChart3, CheckCircle, TrendingUp } from 'lucide-react';

const Process: React.FC = () => {
  const [activeTab, setActiveTab] = useState('3');

  const processSteps = {
    '3': [
      { icon: Calendar, title: "Strategy Session", description: "Deep dive into your business goals, target audience, and current performance to create a custom strategy." },
      { icon: Target, title: "Account Audit", description: "Comprehensive analysis of your existing Pinterest and email marketing setup to identify opportunities." },
      { icon: Users, title: "Team Onboarding", description: "Introduction to your dedicated account manager and setup of communication channels." }
    ],
    '7': [
      { icon: Rocket, title: "Campaign Launch", description: "Deploy optimized Pinterest ad campaigns and email automation sequences tailored to your brand." },
      { icon: Target, title: "Creative Development", description: "Design high-converting ad creatives and email templates that align with your brand identity." },
      { icon: BarChart3, title: "Initial Optimization", description: "Monitor performance and make data-driven adjustments to improve campaign efficiency." }
    ],
    '30': [
      { icon: CheckCircle, title: "Performance Review", description: "Comprehensive analysis of campaign performance with detailed insights and recommendations." },
      { icon: TrendingUp, title: "Scale & Expand", description: "Identify winning campaigns and scale them while testing new audiences and creative approaches." },
      { icon: Users, title: "Strategy Refinement", description: "Refine strategies based on 30-day performance data and plan for continued growth." }
    ]
  };

  const tabs = [
    { id: '3', label: '3 Days', subtitle: 'Setup & Strategy' },
    { id: '7', label: '7 Days', subtitle: 'Launch & Optimize' },
    { id: '30', label: '30 Days', subtitle: 'Scale & Grow' }
  ];

  return (
    <section className="pt-16 pb-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Our </span>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A proven methodology that gets results fast. Here's what happens in your first 30 days.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg shadow-yellow-500/30'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
              }`}
            >
              <div className="text-center">
                <div className="text-lg font-bold">{tab.label}</div>
                <div className="text-sm opacity-80">{tab.subtitle}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {processSteps[activeTab as keyof typeof processSteps].map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-yellow-400 transition-all duration-300 shadow-sm"
            >
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                Step {index + 1}
              </div>
              <div className="mb-6 pt-4">
                <div className="w-16 h-16 bg-yellow-50 rounded-xl flex items-center justify-center border border-yellow-300">
                  <step.icon className="h-8 w-8 text-yellow-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-700 leading-relaxed">{step.description}</p>
              {index < processSteps[activeTab as keyof typeof processSteps].length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
