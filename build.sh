#!/bin/bash
# build.sh
echo "Installing dependencies..."
npm install

echo "Building Expo web app..."
npm run build

echo "Build completed successfully!"