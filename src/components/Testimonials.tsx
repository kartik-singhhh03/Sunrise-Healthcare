import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Parent',
      content: 'The support team has been incredible. They truly understand my daughter\'s needs and have helped her gain so much independence. I couldn\'t be more grateful.',
      avatar: 'SJ',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Service User',
      content: 'Thanks to the community access program, I\'ve made new friends and discovered activities I never thought I could enjoy. It\'s changed my life completely.',
      avatar: 'MC',
      rating: 5
    },
    {
      name: 'Emma Williams',
      role: 'Family Member',
      content: 'The in-home support has given our family peace of mind. The care workers are professional, compassionate, and truly care about my brother\'s wellbeing.',
      avatar: 'EW',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Service User',
      content: 'The therapy services have helped me regain mobility I thought I\'d lost forever. The team celebrates every small victory with me.',
      avatar: 'DT',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#A66B00] to-[#F6D365]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What People Say
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Hear from the individuals and families whose lives have been transformed through our support services.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-[#78C43E]" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#084A26] to-[#78C43E] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#084A26]">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;