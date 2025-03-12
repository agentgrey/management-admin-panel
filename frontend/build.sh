#!/bin/bash

# Build the Next.js project
echo "Building Next.js project..."
npx next build

# Check if the build was successful
# if [ $? -ne 0 ]; then
#   echo "Build failed. Exiting."
#   exit 1
# fi

# Move the .next folder to the backend build directory
echo "Moving .next folder..."
mv .next ../backend/build/

# Check if the move was successful
if [ $? -ne 0 ]; then
  echo "Failed to move .next folder. Trying xcopy (Windows)..."
  xcopy .next ../backend/build /E /I /Y
  if [ $? -ne 0 ]; then
    echo "Move/copy failed. Exiting."
    exit 1
  fi
fi

echo "Build and move completed successfully."