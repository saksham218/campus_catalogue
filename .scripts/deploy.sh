#!/bin/bash
set -e

echo "Deployment started ..."

# Pull the latest version of the app
git pull origin main
echo "New changes copied to server !"

# change directory to the app
cd /home/anurag/campus_catalogue/server
export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh 
# Install dependencies
echo "Installing Dependencies..."
npm install --yes

# restart pm2
echo "Restarting pm2..."
pm2 restart all

# build admin frontend
cd /home/anurag/campus_catalogue/admin_panel
npm install
npm run build
# move code from dist folder to server folder
rm -r /var/www/admin.anuragr.live/*
cp -r build/* /var/www/admin.anuragr.live

# build shop frontend
cd /home/anurag/campus_catalogue/shops
yarn
yarn build
# move code from dist folder to server folder
rm -r /var/www/shop.anuragr.live/*
cp -r dist/* /var/www/shop.anuragr.live/

# build user frontend
cd /home/anurag/campus_catalogue/user
yarn
yarn build
# move code from dist folder to server folder
rm -r /var/www/customer.anuragr.live/*
cp -r dist/* /var/www/customer.anuragr.live/

echo "Deployment Finished!"