@echo off
echo Starting the image conversion and code update process...
echo.

echo Step 1: Converting all images to WebP format...
node --experimental-modules convert-images.js
if %ERRORLEVEL% NEQ 0 (
  echo Error during image conversion. Aborting.
  exit /b %ERRORLEVEL%
)

echo.
echo Step 2: Updating image references in code...
node --experimental-modules update-image-references.js
if %ERRORLEVEL% NEQ 0 (
  echo Error during code update. Aborting.
  exit /b %ERRORLEVEL%
)

echo.
echo Process completed successfully!
echo.
echo Next steps:
echo 1. Check the webp-conversions.json file to see all converted images
echo 2. Update your components to use the new OptimizedImage component
echo 3. Test the website to ensure all images load correctly
echo.
pause
