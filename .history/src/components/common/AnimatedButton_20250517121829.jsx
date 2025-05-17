import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedButton component for creating visually appealing and interactive buttons
 * with animation effects and NGO-themed styling
 */
const AnimatedButton = ({ 
  children, 
  onClick, 
  className = "", 
  variant = "primary", // primary, secondary, outline, text
  size = "medium", // small, medium, large
  fullWidth = false,
  icon = null,
  iconPosition = "left", // left, right
  disabled = false,
  type = "button"
}) => {
  // Variant styles
  const variantStyles = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white",
    secondary: "bg-blue-500 hover:bg-blue-600 text-white",
    outline: "bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-50",
    text: "bg-transparent text-orange-500 hover:underline"
  };

  // Size styles
  const sizeStyles = {
    small: "py-1 px-3 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg"
  };

  // Button base styles
  const baseStyles = `
    font-medium rounded transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${fullWidth ? 'w-full' : ''}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  return (
    <motion.button
      type={type}
      className={baseStyles}
      onClick={!disabled ? onClick : undefined}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <span className="flex items-center justify-center">
        {icon && iconPosition === "left" && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </span>
    </motion.button>
  );
};

export default AnimatedButton;
