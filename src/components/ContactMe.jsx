import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20 bg-dark-100 text-white"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Contact <span className="text-purple">Me</span>
        </h2>

        {/* Contact Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <form className="bg-dark-200 p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <label className="block text-gray-300 mb-2 text-sm">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-md bg-dark-300 border border-dark-400 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 text-sm">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md bg-dark-300 border border-dark-400 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 text-sm">Your Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full p-3 rounded-md bg-dark-300 border border-dark-400 focus:border-purple-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-purple hover:bg-purple-600 text-white font-medium transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-gray-300">

            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-purple text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p>faryalhyder25@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-purple text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p>+92 370 1440180</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-white mb-3">Follow Me</h4>
              <div className="flex space-x-5">
                <a
                  href="https://github.com/faryalhyder15"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-purple transition"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/faryal-jafferi/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-purple transition"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
