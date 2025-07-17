import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How can I get started with NDIS support services?',
      answer: 'Getting started is simple. Contact us for an initial consultation where we\'ll assess your needs, discuss your goals, and create a personalized support plan. We\'ll guide you through the entire process and help with any NDIS paperwork if needed.'
    },
    {
      question: 'What support plans are offered?',
      answer: 'We offer comprehensive support plans including personal care, community access, in-home support, therapy services, mobility assistance, and specialized education support. Each plan is tailored to individual needs and goals.'
    },
    {
      question: 'Are your services covered by NDIS funding?',
      answer: 'Yes, most of our services are covered under NDIS funding. We work directly with NDIS to ensure seamless billing and can help you understand what services are covered under your specific plan.'
    },
    {
      question: 'What qualifications do your support workers have?',
      answer: 'All our support workers are fully qualified, certified, and undergo regular training. They have relevant certifications in disability support, first aid, and specialized training for specific conditions and needs.'
    },
    {
      question: 'Can family members be involved in the support process?',
      answer: 'Absolutely! We encourage family involvement and provide support and training for family members. We believe that involving loved ones creates the best outcomes for everyone involved.'
    },
    {
      question: 'What areas do you service?',
      answer: 'We provide services across multiple regions. Contact us to confirm if we service your area, and if not, we can help connect you with trusted providers in your location.'
    },
    {
      question: 'How do you ensure quality of care?',
      answer: 'We maintain high standards through regular training, quality audits, client feedback systems, and continuous improvement processes. All services are delivered according to NDIS quality standards and best practices.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#73297E] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services, processes, and how we can support you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#73297E]/20"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-[#73297E] pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDownIcon className="w-6 h-6 text-[#73297E] flex-shrink-0" />
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;