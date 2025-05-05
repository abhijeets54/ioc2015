import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import AnimatedButton from './AnimatedButton';

/**
 * DonationProgress component for displaying donation goals with animations
 * Features animated progress bar, counter, and call-to-action
 */
const DonationProgress = ({
  currentAmount = 0,
  goalAmount = 100000,
  currency = "₹",
  title = "Help Us Reach Our Goal",
  description = "Your contribution makes a difference in the lives of those we serve.",
  buttonText = "Donate Now",
  onButtonClick,
  className = ""
}) => {
  // Calculate progress percentage
  const progressPercentage = Math.min(Math.round((currentAmount / goalAmount) * 100), 100);
  
  // Format currency amounts
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      {/* Amount Display */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="text-sm text-gray-500">Raised so far</span>
          <AnimatedCounter
            value={currentAmount}
            prefix={currency}
            duration={2}
          />
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-500">Goal</span>
          <p className="text-xl font-bold text-gray-800">{currency}{formatCurrency(goalAmount)}</p>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
        <motion.div 
          className="h-full bg-orange-500"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
      
      {/* Progress Percentage */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-600">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {progressPercentage}% of our goal
          </motion.span>
        </p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <span className="text-sm font-medium text-orange-500">
            {progressPercentage < 100 
              ? `${currency}${formatCurrency(goalAmount - currentAmount)} to go` 
              : "Goal reached! Thank you!"}
          </span>
        </motion.div>
      </div>
      
      {/* Donation Tiers */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[1000, 5000, 10000].map((amount) => (
          <motion.button
            key={amount}
            className={`py-2 px-3 rounded border-2 text-center transition-colors duration-300
              ${amount === 5000 
                ? 'border-orange-500 bg-orange-50 text-orange-700' 
                : 'border-gray-300 hover:border-orange-300 hover:bg-orange-50'}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onButtonClick && onButtonClick(amount)}
          >
            <span className="block font-bold">{currency}{formatCurrency(amount)}</span>
          </motion.button>
        ))}
      </div>
      
      {/* CTA Button */}
      <AnimatedButton
        variant="primary"
        size="large"
        fullWidth
        onClick={() => onButtonClick && onButtonClick()}
      >
        {buttonText}
      </AnimatedButton>
      
      {/* Trust Indicators */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          Secure payment • Tax benefits available • 100% goes to the cause
        </p>
      </div>
    </div>
  );
};

export default DonationProgress;
