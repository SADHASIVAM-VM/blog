// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/About.css'
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 AboutBg">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-900"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About WeDot
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-600 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
        </motion.p>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { delay: 1, duration: 0.5 } }
          }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              At WeDot, our mission is to create a vibrant community where individuals can freely share their thoughts and ideas through engaging blog posts.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            <p className="mt-4 text-gray-600">
              We envision a world where knowledge and creativity flow freely, inspiring positive change and fostering a culture of open communication.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.5 } }
          }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900">Creativity</h3>
            <p className="mt-4 text-gray-600">
              WeDot empowers users to unleash their creativity by providing a platform that values originality and expression.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900">Community</h3>
            <p className="mt-4 text-gray-600">
              We foster a supportive community where users can connect, share, and grow together.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
            <p className="mt-4 text-gray-600">
              Innovation is at the heart of WeDot, driving us to continuously improve and enhance the user experience.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
