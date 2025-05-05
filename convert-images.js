import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { fileURLToPath } from 'url';

const execPromise = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
const sourceDir = path.join(__dirname, 'public');
const quality = 80; // WebP quality (0-100)

// Function to check if a file is an image based on extension
function isImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return imageExtensions.includes(ext);
}

// Function to convert an image to WebP
async function convertToWebP(imagePath) {
  try {
    const dirname = path.dirname(imagePath);
    const basename = path.basename(imagePath, path.extname(imagePath));
    const webpPath = path.join(dirname, `${basename}.webp`);
    
    // Skip if WebP version already exists
    if (fs.existsSync(webpPath)) {
      console.log(`WebP already exists: ${webpPath}`);
      return { original: imagePath, webp: webpPath };
    }
    
    // Use sharp directly instead of command line to avoid issues with spaces in file paths
    const sharp = await import('sharp');
    await sharp.default(imagePath)
      .webp({ quality })
      .toFile(webpPath);
    
    console.log(`Converted: ${imagePath} -> ${webpPath}`);
    return { original: imagePath, webp: webpPath };
  } catch (error) {
    console.error(`Error converting ${imagePath}:`, error);
    return null;
  }
}

// Function to recursively process a directory
async function processDirectory(directory, conversions = []) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      // Recursively process subdirectories
      await processDirectory(filePath, conversions);
    } else if (isImage(filePath)) {
      // Convert image to WebP
      const result = await convertToWebP(filePath);
      if (result) conversions.push(result);
    }
  }
  
  return conversions;
}

// Main function
async function main() {
  console.log('Starting image conversion to WebP...');
  
  // Install required packages if not already installed
  try {
    console.log('Installing required packages...');
    await execPromise('npm install --save-dev sharp');
    console.log('Packages installed successfully.');
  } catch (error) {
    console.error('Error installing packages:', error);
    process.exit(1);
  }
  
  // Process all images
  const conversions = await processDirectory(sourceDir);
  
  // Save the conversion mapping to a JSON file for reference
  const mappingPath = path.join(__dirname, 'webp-conversions.json');
  fs.writeFileSync(mappingPath, JSON.stringify(conversions, null, 2));
  
  console.log(`Conversion complete! ${conversions.length} images processed.`);
  console.log(`Conversion mapping saved to: ${mappingPath}`);
}

// Execute the main function
main().catch(console.error);
