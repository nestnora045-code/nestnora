import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  // start closed
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What happens during the demo call?',
      answer:
        "During our demo call, we'll analyze your current Pinterest and email marketing performance, identify growth opportunities, and create a custom strategy tailored to your e-commerce business. You'll also meet your potential account manager and see examples of our work with similar brands.",
    },
    {
      question: 'How quickly can we start seeing results?',
      answer:
        'Most clients see initial improvements within the first 7-14 days of launching campaigns. Significant revenue growth typically becomes evident within 30-60 days as we optimize based on performance data and audience behavior.',
    },
    {
      question: 'Do you work with all e-commerce platforms?',
      answer:
        'Yes, we work with all major e-commerce platforms including Shopify, WooCommerce, Magento, and BigCommerce. Our Pinterest ads and email marketing strategies are platform-agnostic and focus on driving traffic and conversions regardless of your tech stack.',
    },
    {
      question: "What's included in your Pinterest advertising service?",
      answer:
        'Our Pinterest advertising service includes campaign strategy development, creative design, audience targeting, bid management, performance monitoring, A/B testing, and monthly reporting. We also provide ongoing optimization and strategic recommendations.',
    },
    {
      question: 'How do you handle email marketing automation?',
      answer:
        'We create comprehensive email automation sequences including welcome series, abandoned cart recovery, post-purchase follow-ups, and re-engagement campaigns. All emails are designed to match your brand and optimized for maximum conversion rates.',
    },
    {
      question: 'What makes Nestnora different from other agencies?',
      answer:
        'We specialize exclusively in Pinterest advertising and email marketing for e-commerce brands. This narrow focus allows us to stay at the forefront of platform changes, develop deeper expertise, and deliver better results than generalist agencies.',
    },
    {
      question: 'Do you require long-term contracts?',
      answer:
        "We offer flexible engagement options. While we recommend at least 90 days to see significant results, we don't lock clients into long-term contracts. Our goal is to deliver such exceptional results that you'll want to continue working with us.",
    },
    {
      question: 'How much budget should I allocate for ads?',
      answer:
        "The ideal ad budget varies by business size and goals. During our demo call, we'll analyze your situation and recommend an appropriate budget range that aligns with your revenue targets and ensures profitable growth.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-700">
            Get answers to common questions about our demo call and services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 shadow-sm bg-white"
            >
              <button
                onClick={() =>
                  setOpenFAQ(openFAQ === index ? null : index)
                }
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-black pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <Minus className="h-6 w-6 text-yellow-600" />
                  ) : (
                    <Plus className="h-6 w-6 text-yellow-600" />
                  )}
                </div>
              </button>

              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? Let's talk on a demo call.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-xl hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-md"
          >
            Book Your Demo Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
