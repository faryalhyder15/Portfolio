import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left side content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-purple">Faryal Jafferi</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">
            Web Developer x Coder
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            Computer Science student | Developer | Creator | Problem Solver — building modern web solutions with React, Python, and AWS, powered by curiosity and experience from Deloitte.
          </p>

          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right side image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink animate-pulse opacity-70"></div>
            <img
                className="relative rounded-full w-80 h-80 md:w-90 md:h-100 object-cover z-0"
                src={assets.profileImg}
                alt="profile"
            />

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
