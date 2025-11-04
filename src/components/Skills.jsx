import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../assets/assets"; // ⬅️ imported from assets.js

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Skills</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Technologies & Tools I use to transform ideas into reality
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer text-center"
            >
              <div className="flex flex-col items-center mb-4">
                <category.icon className={`text-4xl mb-3 ${category.color}`} />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="text-sm bg-dark-200 px-3 py-1 rounded-full text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
