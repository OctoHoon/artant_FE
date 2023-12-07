#!/bin/bash

# Define the SSH key and user@host
KEY="~/.ssh/ec2-key-artant-dev.pem"
USER_HOST="ec2-user@ec2-54-180-99-43.ap-northeast-2.compute.amazonaws.com"


# Use SSH to run commands on the remote server
ssh -o "IdentitiesOnly yes" -i "$KEY" "$USER_HOST" <<ENDSSH
set -e # stops on the first error
set -x # print commands for debugging

cd artant-FE/
git fetch origin

echo "Pulling latest changes from Git repository..."
git pull origin main
echo "Pull completed."

# Check for errors in git pull
if [ $? -ne 0 ]; then
    echo "Git pull failed, exiting..."
    exit 1
fi

# Run yarn build
echo "Running yarn build..."
yarn install
yarn build
echo "Build completed."

# Check for errors in yarn build
if [ $? -ne 0 ]; then
    echo "Yarn build failed, exiting..."
    exit 1
fi

echo "Update and build process completed successfully."

ENDSSH
