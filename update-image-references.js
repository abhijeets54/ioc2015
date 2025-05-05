import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

// Create a promisified version of exec
const execPromise = promisify(exec);

// We'll use a dynamic import for glob since it's a CommonJS module

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const codeExtensions = ['.js', '.jsx', '.ts', '.tsx'];
const sourceDirs = [path.join(__dirname, 'src')];
const conversionMapPath = path.join(__dirname, 'webp-conversions.json');

// Function to check if a file is a code file based on extension
function isCodeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return codeExtensions.includes(ext);
}

// Function to update image references in a file
function updateImageReferences(filePath, conversions) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    // Create a map for faster lookups
    const conversionMap = new Map();
    conversions.forEach(conv => {
      // Get the relative path from the project root
      const relOriginal = path.relative(__dirname, conv.original).replace(/\\/g, '/');
      const relWebp = path.relative(__dirname, conv.webp).replace(/\\/g, '/');
      conversionMap.set(relOriginal, relWebp);
      
      // Also add entries without the 'public' prefix for imports
      if (relOriginal.startsWith('public/')) {
        const withoutPublic = relOriginal.substring(7);
        const webpWithoutPublic = relWebp.substring(7);
        conversionMap.set(withoutPublic, webpWithoutPublic);
        
        // Add entries with leading slash for absolute paths
        conversionMap.set(`/${withoutPublic}`, `/${webpWithoutPublic}`);
      }
    });
    
    // Replace all occurrences of image paths
    conversionMap.forEach((webpPath, originalPath) => {
      // Handle various ways the path might be referenced
      const patterns = [
        originalPath,
        `"${originalPath}"`,
        `'${originalPath}'`,
        `\`${originalPath}\``
      ];
      
      patterns.forEach(pattern => {
        // Only replace if the pattern is found
        if (content.includes(pattern)) {
          const replacement = pattern.replace(originalPath, webpPath);
          content = content.split(pattern).join(replacement);
          updated = true;
        }
      });
    });
    
    // Only write to the file if changes were made
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated references in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
    return false;
  }
}

// Function to recursively process a directory
async function processCodeFiles(directory, conversions) {
  // Use glob to find all code files
  const pattern = `${directory}/**/*+(${codeExtensions.join('|')})`;
  // Dynamic import for glob (CommonJS module)
  const globModule = await import('glob');
  const files = await globModule.glob(pattern);
  
  let updatedCount = 0;
  
  for (const filePath of files) {
    if (updateImageReferences(filePath, conversions)) {
      updatedCount++;
    }
  }
  
  return updatedCount;
}

// Main function
async function main() {
  console.log('Starting to update image references in code...');
  
  // Install required packages if not already installed
  try {
    console.log('Installing required packages...');
    await execPromise('npm install --save-dev glob');
    console.log('Packages installed successfully.');
  } catch (error) {
    console.error('Error installing packages:', error);
    process.exit(1);
  }
  
  // Check if the conversion map exists
  if (!fs.existsSync(conversionMapPath)) {
    console.error('Conversion map not found. Please run convert-images.js first.');
    process.exit(1);
  }
  
  // Load the conversion map
  const conversions = JSON.parse(fs.readFileSync(conversionMapPath, 'utf8'));
  console.log(`Loaded ${conversions.length} image conversions.`);
  
  // Process all code files
  let totalUpdated = 0;
  for (const dir of sourceDirs) {
    const updated = await processCodeFiles(dir, conversions);
    totalUpdated += updated;
    console.log(`Updated ${updated} files in ${dir}`);
  }
  
  console.log(`Update complete! ${totalUpdated} files updated.`);
  
  // Create a component for optimized image loading
  await createOptimizedImageComponent();
}

// Create a reusable component for optimized image loading
async function createOptimizedImageComponent() {
  const componentDir = path.join(__dirname, 'src', 'components', 'common');
  const componentPath = path.join(componentDir, 'OptimizedImage.jsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
  }
  
  const componentContent = `import React from 'react';
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
    return imagePath.replace(/\\.(jpe?g|png|gif)$/i, '.webp');
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
          console.log(\`WebP not supported or not found, falling back to: \${originalSrc}\`);
          e.target.src = originalSrc;
        }
      }}
      {...props}
    />
  );
};

export default OptimizedImage;
`;

  fs.writeFileSync(componentPath, componentContent, 'utf8');
  console.log(`Created OptimizedImage component at: ${componentPath}`);
  
  // Install required package for the component
  try {
    console.log('Installing react-lazy-load-image-component...');
    await execPromise('npm install --save react-lazy-load-image-component');
    console.log('Package installed successfully.');
  } catch (error) {
    console.error('Error installing react-lazy-load-image-component:', error);
  }
  
  // Create a README with usage instructions
  const readmePath = path.join(componentDir, 'README.md');
  const readmeContent = `# OptimizedImage Component

This component provides optimized image loading with the following features:
- WebP format with automatic fallback to original format for browsers that don't support WebP
- Lazy loading (images only load when they enter the viewport)
- Blur-up effect while images are loading
- Error handling with fallback to original image format

## Usage

\`\`\`jsx
import OptimizedImage from '../components/common/OptimizedImage';

// Basic usage
<OptimizedImage 
  src="/path/to/image.jpg" 
  alt="Description" 
  className="w-full h-auto rounded-lg"
/>

// With width and height
<OptimizedImage 
  src="/path/to/image.jpg" 
  alt="Description" 
  width={300}
  height={200}
  className="rounded-lg"
/>

// With custom placeholder
<OptimizedImage 
  src="/path/to/image.jpg" 
  alt="Description" 
  placeholderSrc="/path/to/placeholder.jpg"
  className="w-full h-auto"
/>
\`\`\`

## How to Use in Your Project

1. Replace standard \`<img>\` tags with \`<OptimizedImage>\`
2. Keep using your original image paths (jpg, png) - the component will automatically try to use WebP versions
3. Make sure you've run the image conversion script to create WebP versions of all your images

## Props

| Prop | Type | Description |
|------|------|-------------|
| src | string | Path to the image (use original jpg/png path) |
| alt | string | Alt text for the image |
| className | string | CSS classes to apply to the image |
| width | number | Width of the image |
| height | number | Height of the image |
| effect | string | Loading effect ('blur', 'opacity', 'black-and-white') |
| placeholderSrc | string | Path to a placeholder image |

All other props are passed to the underlying \`LazyLoadImage\` component.
`;

  fs.writeFileSync(readmePath, readmeContent, 'utf8');
  console.log(`Created README with usage instructions at: ${readmePath}`);
}

// Execute the main function
main().catch(console.error);
