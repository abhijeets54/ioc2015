import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

/**
 * OptimizedImage component that:
 * 1. Uses WebP images with fallback to original format
 * 2. Implements lazy loading
 * 3. Shows a blur-up effect while loading
 * 4. Handles errors gracefully
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  width,
  height,
  effect = "blur",
  placeholderSrc = "",
  ...props 
}) => {
  // Function to get WebP version of the image
  const getWebpPath = (imagePath) => {
    if (!imagePath) return "";
    return imagePath.replace(/\.(jpe?g|png|gif)$/i, '.webp');
  };

  // Original source for fallback
  const originalSrc = src;
  // WebP source as primary
  const webpSrc = getWebpPath(src);
  
  return (
    <LazyLoadImage
      alt={alt || "Image"}
      src={webpSrc}
      placeholderSrc={placeholderSrc}
      effect={effect}
      width={width}
      height={height}
      className={className}
      wrapperClassName="transition-opacity duration-300"
      onError={(e) => {
        // Fallback to original format if WebP not supported or file not found
        if (e.target.src !== originalSrc) {
          console.log(`WebP not supported or not found, falling back to: ${originalSrc}`);
          e.target.src = originalSrc;
        }
      }}
      {...props}
    />
  );
};

export default OptimizedImage;
