# OptimizedImage Component

This component provides optimized image loading with the following features:
- WebP format with automatic fallback to original format for browsers that don't support WebP
- Lazy loading (images only load when they enter the viewport)
- Blur-up effect while images are loading
- Error handling with fallback to original image format

## Usage

```jsx
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
```

## How to Use in Your Project

1. Replace standard `<img>` tags with `<OptimizedImage>`
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

All other props are passed to the underlying `LazyLoadImage` component.
