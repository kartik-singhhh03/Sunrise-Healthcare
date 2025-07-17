import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Complaints', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#78C43E] to-[#084A26] text-white">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center mb-6"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-[#084A26] leading-tight">
                    NDIS
                  </div>
                  <div className="w-1.5 h-1.5 bg-[#78C43E] rounded-full mx-auto relative -top-0.5"></div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">NDIS Community Support</h3>
                <p className="text-white/80">Empowering Lives Through Support</p>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/90 leading-relaxed mb-6 max-w-md"
            >
              We are dedicated to connecting individuals with disabilities to compassionate care 
              and building inclusive communities where everyone can thrive.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-2 text-white/80"
            >
              <p>📍 123 Support Street, NSW 2000, Australia</p>
              <p>📞 +61 2 **** 5678</p>
              <p>✉️ info@ndissupport.org.au</p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: '#78C43E' }}
                    className="text-white/80 hover:text-[#78C43E] transition-colors duration-200"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: '#78C43E' }}
                    className="text-white/80 hover:text-[#78C43E] transition-colors duration-200"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Social Media & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#78C43E] transition-all duration-200"
                  aria-label={social.name}
                >
                  <span className="text-sm font-bold">
                    {social.icon === 'facebook' && 'f'}
                    {social.icon === 'twitter' && '𝕏'}
                    {social.icon === 'instagram' && '📷'}
                    {social.icon === 'linkedin' && 'in'}
                  </span>
                </motion.a>
              ))}
            </div>
            
            <p className="text-white/60 text-center md:text-right">
              © 2025 NDIS Community Support. All rights reserved.
              <br className="md:hidden" />
              <span className="hidden md:inline"> | </span>
              Built with ❤️ by Kartik Singh
              
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;