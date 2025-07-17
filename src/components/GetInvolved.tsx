import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HandRaisedIcon, HeartIcon, UsersIcon } from '@heroicons/react/24/outline';

const GetInvolved = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const opportunities = [
    {
      icon: HandRaisedIcon,
      title: 'Volunteer',
      description: 'Join our community of volunteers and make a direct impact in the lives of individuals with disabilities.',
      action: 'Become a Volunteer'
    },
    {
      icon: HeartIcon,
      title: 'Donate',
      description: 'Support our programs and services through donations that help us expand our reach and improve our services.',
      action: 'Make a Donation'
    },
    {
      icon: UsersIcon,
      title: 'Partner',
      description: 'Collaborate with us as a community partner to create more inclusive opportunities and programs.',
      action: 'Partner With Us'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#78C43E] to-[#084A26]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join our mission to create a more inclusive community. There are many ways you can contribute 
            and make a meaningful difference in the lives of others.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <opportunity.icon className="w-8 h-8 text-[#084A26]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{opportunity.title}</h3>
              <p className="text-white/90 mb-6 leading-relaxed">{opportunity.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#084A26] px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
              >
                {opportunity.action}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-white/90 text-lg mb-6">
            Ready to make a difference? Contact us to learn more about volunteer opportunities.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#084A26] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolved;