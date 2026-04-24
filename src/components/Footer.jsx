import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/images/sartorwhite.png';
import linkedin from '../assets/images/linkedin.png';
import x from '../assets/images/x.png';
import instagram from '../assets/images/insta.png';

 const socialMedias = [
    { logo: x, alt: "Social media (X)", link: "https://x.com/Sartorlimited?t=06jfjJM5bhOEq-xjKGbs2g&s=09" },
    { logo: instagram, alt: "Social media (Instagram)", link: "" },
    { logo: linkedin, alt: "Social media (LinkedIn)", link: "https://www.linkedin.com/company/sartorlimited/" },
  ]

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const linkHoverVariants = {
    hover: {
      x: 8,
      color: '#60a5fa',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <footer className="bg-[#000068] text-white pt-12 pb-6 px-6 md:px-20 font-[sfpro]">
     <div className='max-w-[1440px] mx-auto'>
       <motion.div
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          {
            title: 'Quick Links',
            items: [
              { label: 'About Us', path: '/' },
              { label: 'Pricing', path: '/' },
            ],
          },
          {
            title: 'Help Center',
            items: [
              { label: 'Customer Support', path: '/' },
              { label: 'Contact Us', path: '/' },
            ],
          },
          {
            title: 'Resources',
            items: [
              { label: 'Checklist', path: '/checklist' },
              { label: 'Report', path: '/report' },
              { label: 'Blueprint', path: '/blueprint' },
              { label: 'Playbook', path: '/playbook' },
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'Terms & Conditions', path: '/terms-condition' },
              { label: 'Privacy Policy', path: '/privacy-policy' },
            ],
          },
        ].map((section, index) => (
          <motion.div key={index} variants={itemVariants}>
            <h4 className="font-semibold mb-4 leading-[1.6] text-[18px]">{section.title}</h4>
            <ul className="space-y-6">
              {section.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  variants={linkHoverVariants}
                  whileHover="hover"
                  className="cursor-pointer"
                >
                  <Link to={item.path} className="hover:text-blue-400">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="border-t border-blue-800 pt-4 flex flex-col gap-4 md:flex-row items-start md:justify-between md:items-center text-xs text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 12 }}
      >
        <motion.img
          src={logo}
          alt="logo"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 12 }}
        />
        <motion.span
          className="text-[15px] md:text-[18px] leading-[1.6]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          @ Copyright 2021, All rights reserved by SartorLimited
        </motion.span>
        <motion.div
          className="flex items-center space-x-4 md:mt-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialMedias.map((social, key) => (
            <motion.div
              key={key}
              variants={itemVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={social.link} target="_blank" rel="noopener noreferrer">
                <img src={social.logo} alt={social.alt} className="min-h-full" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
     </div>
    </footer>
  );
};

export default Footer;
