import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, TrendingUp, Users, Clock, Star } from 'lucide-react';

const BookingPage: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Free Growth Audit',
      description:
        'Get a comprehensive analysis of your current Pinterest and email marketing performance worth $500.',
    },
    {
      icon: Users,
      title: 'Meet Your Team',
      description:
        'Connect with your potential dedicated account manager and learn about our proven processes.',
    },
    {
      icon: CheckCircle,
      title: 'Custom Strategy',
      description:
        'Receive a tailored growth strategy specifically designed for your e-commerce business.',
    },
    {
      icon: Clock,
      title: 'Quick Implementation',
      description:
        'Learn how we can get your campaigns live and optimized within the first week.',
    },
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      company: 'Bloom Beauty Co.',
      image:
        'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote:
        'The demo call was incredibly valuable. They identified issues with our Pinterest strategy that we hadn\'t even considered. Within 30 days of working with them, our ROAS improved by 180%.',
      rating: 5,
    },
    {
      name: 'David Chen',
      company: 'Urban Essentials',
      image:
        'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote:
        'What impressed me most about the call was their deep understanding of e-commerce. They didn\'t just talk about ads - they showed me how Pinterest fits into our entire customer journey.',
      rating: 5,
    },
    {
      name: 'Sarah Williams',
      company: 'Cozy Home Studio',
      image:
        'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote:
        'The team took time to understand our brand and challenges. Their recommendations were spot-on, and the results speak for themselves - 250% increase in email revenue in just 2 months.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Header />

      {/* Hero + Calendly */}
      <section className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Book Your Free{' '}
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Strategy Call
                </span>
              </h1>
              <p className="text-lg mb-8 leading-relaxed text-gray-700">
                Discover how Pinterest advertising and email marketing can
                transform your e-commerce business. Get a custom growth strategy
                tailored to your brand.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  '30-minute strategy session',
                  'Free growth audit ($500 value)',
                  'No obligations or commitments',
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="text-sm text-gray-500">
                ⚡ Only 3 spots available this week
              </div>
            </div>

            {/* Embedded Calendly */}
            <div className="rounded-2xl border border-yellow-500/30 shadow-xl overflow-hidden">
              <iframe
                src="https://calendly.com/nestnora045/30min"
                width="100%"
                height="700"
                frameBorder="0"
                title="Schedule a call with Nestnora"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You&apos;ll Get From{' '}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Your Call
              </span>
            </h2>
            <p className="text-lg text-gray-700">
              Every call is designed to provide immediate value to your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-yellow-500/50 transition-colors shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center border border-yellow-200">
                    <benefit.icon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say About{' '}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                The Call
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-gray-500 text-sm">{t.company}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(t.rating)].map((_, star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>

                <p className="text-gray-700 italic">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale Your{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              E-commerce Business?
            </span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join 150+ successful e-commerce brands who've transformed their
            growth with our Pinterest and email marketing expertise.
          </p>
          <a
            href="https://calendly.com/nestnora045/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-xl hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/30 text-lg"
          >
            Schedule Your Free Call Now
          </a>
          <p className="text-sm text-gray-500 mt-4">
            No sales pressure. Just valuable insights for your business.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookingPage;
