import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSectionHeader from './common/AnimatedSectionHeader';
import AnimatedCard from './common/AnimatedCard';
import AnimatedButton from './common/AnimatedButton';

const JoinUs = () => {
  return (
    <motion.div 
      className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-orange-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <AnimatedSectionHeader 
          title="Join Our Team" 
          subtitle="Be a part of our mission to create positive change in society"
          centered
        />
        
        {/* Induction Form Notice */}
        <AnimatedCard className="mb-12" animationType="fade-up">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <motion.div 
              className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6 text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">Induction Form</h3>
              <p className="text-gray-700">
                The link to the induction form will appear here. Stay tuned for our latest updates and notifications of induction in your area on our Instagram page!
              </p>
            </motion.div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <AnimatedButton
                variant="outline"
                icon={<span className="mr-2">📷</span>}
                onClick={() => window.open('https://www.instagram.com/initiatorsofchange/', '_blank')}
              >
                Follow Us on Instagram
              </AnimatedButton>
              
              <AnimatedButton
                variant="primary"
                icon={<span className="mr-2">📧</span>}
                onClick={() => window.open('mailto:info@initiatorsofchange.org')}
              >
                Contact Us
              </AnimatedButton>
            </div>
          </div>
        </AnimatedCard>
        
        {/* Why Join Us Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Join Initiators of Change?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedCard delay={0.1} animationType="slide-right">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-orange-500 text-2xl">💪</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Make an Impact</h3>
                <p className="text-gray-600">
                  Join a community of passionate individuals working together to create meaningful change in society through education, awareness, and humanitarian aid.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.2} animationType="slide-left">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-orange-500 text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Gain Experience</h3>
                <p className="text-gray-600">
                  Develop valuable skills and experience in project management, community outreach, fundraising, and more while working on meaningful projects.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.3} animationType="slide-right">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-orange-500 text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Build Connections</h3>
                <p className="text-gray-600">
                  Connect with like-minded individuals, community leaders, and organizations dedicated to social change and development.
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard delay={0.4} animationType="slide-left">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-orange-500 text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Personal Growth</h3>
                <p className="text-gray-600">
                  Challenge yourself, discover new perspectives, and grow personally and professionally while contributing to meaningful causes.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Ready to Make a Difference?</h3>
          <p className="text-gray-600 mb-6">
            We're always looking for passionate individuals to join our team. Check back soon for the induction form link or reach out to us directly.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JoinUs;
