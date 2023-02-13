#!/bin/bash
set -e

echo "Deployment started ..."

# Pull the latest version of the app
git pull origin main
echo "New changes copied to server !"

# change directory to the app
cd /home/anurag/campus_catalogue/server

# Install dependencies
echo "Installing Dependencies..."
npm install --yes

# restart pm2
echo "Restarting pm2..."
pm2 restart all

echo "Deployment Finished!"