import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Dr. Jennifer Martinez',
      role: 'Clinical Director',
      bio: 'Leading our clinical team with 15+ years of experience in disability support and rehabilitation services.',
      avatar: 'JM',
      specialty: 'Clinical Leadership'
    },
    {
      name: 'Robert Kim',
      role: 'Community Coordinator',
      bio: 'Passionate about building inclusive communities and connecting individuals with meaningful opportunities.',
      avatar: 'RK',
      specialty: 'Community Engagement'
    },
    {
      name: 'Lisa Thompson',
      role: 'Support Worker',
      bio: 'Dedicated to providing compassionate personal care and helping clients achieve their independence goals.',
      avatar: 'LT',
      specialty: 'Personal Care'
    }
  
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#084A26] mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated professionals bring expertise, compassion, and commitment to supporting 
            individuals with disabilities and their families.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-[#084A26] to-[#78C43E] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                {member.avatar}
              </div>
              
              <h3 className="text-2xl font-bold text-[#084A26] mb-2">{member.name}</h3>
              <p className="text-[#78C43E] font-semibold mb-2">{member.role}</p>
              <p className="text-sm text-gray-500 mb-4">{member.specialty}</p>
              <p className="text-gray-600 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;