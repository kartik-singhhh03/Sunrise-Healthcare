import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HeartIcon, 
  UsersIcon, 
  AcademicCapIcon, 
  HomeIcon, 
  TruckIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: HeartIcon,
      title: 'Personal Care',
      description: 'Compassionate assistance with daily living activities, personal hygiene, and health management tailored to individual needs.'
    },
    {
      icon: UsersIcon,
      title: 'Community Access',
      description: 'Support to participate in community activities, social events, and recreational programs that promote inclusion and belonging.'
    },
   
    {
      icon: HomeIcon,
      title: 'In-home Support',
      description: 'Professional care services delivered in the comfort and familiarity of your own home environment.'
    },
    {
      icon: TruckIcon,
      title: 'Transportation Services',
      description: 'Transportation assistance and mobility support to help maintain independence and access to essential services.'
    },
    
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#084A26] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive support services designed to enhance independence, promote inclusion, 
            and improve quality of life for individuals with disabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#084A26] to-[#78C43E] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#084A26] mb-4 group-hover:text-[#78C43E] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;