import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSectionHeader from '../common/AnimatedSectionHeader';
import AnimatedCard from '../common/AnimatedCard';

const WithinIndia = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="bg-gradient-to-b from-white to-orange-50 py-16 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <AnimatedSectionHeader 
            title="Make a Difference Today" 
            subtitle="Your contribution helps us create lasting change in communities across India"
            centered
          />
        </div>
        
        {/* Why Your Support Matters */}
        <div className="mb-16">
          <AnimatedCard className="w-full" animationType="fade-up">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Your Support Matters</h2>
              
              <div className="space-y-4 mb-6">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                    <span className="text-orange-500 text-xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Education</h3>
                    <p className="text-gray-600">Your donation helps provide quality education to underprivileged children through our evening schools and scholarship programs.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                    <span className="text-orange-500 text-xl">🌱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Awareness</h3>
                    <p className="text-gray-600">We create awareness about social issues through workshops, campaigns, and community engagement initiatives.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="bg-orange-100 rounded-full p-2 mr-4 mt-1">
                    <span className="text-orange-500 text-xl">❤️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Humanitarian Aid</h3>
                    <p className="text-gray-600">We provide essential support to communities affected by disasters and those living in extreme poverty.</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.p 
                className="text-gray-700 italic border-l-4 border-orange-300 pl-4 py-2 bg-orange-50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                "Every donation, no matter how small, contributes to our mission of creating positive change in society."
              </motion.p>
            </div>
          </AnimatedCard>
        </div>
        
        {/* Bank Details Section */}
        <AnimatedCard className="mb-16" animationType="fade-up">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Bank Transfer Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-4 text-lg">Account Information</h3>
                
                <motion.div 
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={itemVariants} className="flex justify-between">
                    <span className="text-gray-600">Account Name:</span>
                    <span className="font-semibold text-gray-800">Initiators of Change</span>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex justify-between">
                    <span className="text-gray-600">Bank:</span>
                    <span className="font-semibold text-gray-800">Punjab National Bank</span>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex justify-between">
                    <span className="text-gray-600">Account Number:</span>
                    <span className="font-semibold text-gray-800">4433 0021 0000 8197</span>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex justify-between">
                    <span className="text-gray-600">IFSC Code:</span>
                    <span className="font-semibold text-gray-800">PUNB0443300</span>
                  </motion.div>
                </motion.div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    <span className="text-orange-500">Note:</span> This account is ONLY for deposits from within India.
                    Please do not send donations from outside India into this account.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-4 text-lg">Cheque & Postal Information</h3>
                
                <p className="text-gray-600 mb-4">
                  Please write the cheque payable to <strong>Initiators of Change</strong> and post it to us at:
                </p>
                
                <motion.div 
                  className="bg-white p-4 rounded border border-gray-200 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-gray-800">
                    1st Floor, Food tree building,<br />
                    Flower Enclave Main Market,<br />
                    Near Goyal Hospital, Chownk,<br />
                    Ludhiana, Punjab 141013
                  </p>
                </motion.div>
                
                <p className="text-sm text-gray-500">
                  After sending your donation, please email us at <a href="mailto:info@initiatorsofchange.org" className="text-orange-500 hover:underline">info@initiatorsofchange.org</a> with your details so we can acknowledge your contribution.
                </p>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </motion.div>
  );
};

export default WithinIndia;
