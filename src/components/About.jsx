import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='about'
      className='py-20 bg-dark-200 text-white'
    >
      <div className='container mx-auto px-6'>
        {/* Heading */}
        <h2 className='text-3xl font-bold text-center mb-4'>
          About<span className='text-purple'> Me</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Get to know more about my background and passion
        </p>

        {/* Image + About Content */}
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16'>
          {/* Image on the left */}
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className='w-[400px] md:w-[500px] lg:w-[550px] h-auto object-contain mx-auto md:mx-0'
            src={assets.computer}
            alt='computer'
          />

          {/* Text content on the right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className='w-full md:w-[60%] text-center md:text-left bg-dark-100 rounded-2xl p-6 md:p-8 shadow-lg shadow-purple/10'
          >
            <h2 className='text-2xl font-semibold mb-6 text-purple'>My Journey</h2>
            <p className='text-gray-300 mb-8 leading-relaxed'>
              I’m a BS Computer Science student at the FAST National University of Computer and Emerging Sciences 
              I'm passionate about building modern, responsive web applications that combine beautiful design with seamless user experience.
               My tech journey began with a deep curiosity about how computers work, starting from Assembly and C/C++ to building logic-driven solutions in Python.
              Over time, I expanded into web development using React, HTML, and CSS, 
              and explored databases like SQL and MongoDB to create dynamic, data-driven applications.
            </p>

            <p className='text-gray-300 leading-relaxed'>
              I’ve also gained hands-on experience through AWS architecture simulations and professional exposure with Deloitte,
               where I learned to combine innovation with real-world problem solving. 
               Passionate about crafting efficient systems and modern web experiences,
               I aim to keep evolving as a developer who bridges creativity with technology.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
