# Zoom-Get-Audio-Dialins
This is a sample app for a specific use case.

Get all available dialin numbers for the account.

scopes:
- account:read:admin


### Setup
```bash
# clone the repo
git clone https://github.com/Will4950/Zoom-Get-Audio-Dialins.git

# Navigate into the cloned project directory
cd Zoom-Get-Audio-Dialins

# edit .env
nano .env

# Build docker images
docker-compose build

# Start the container
docker-compose up
```

App is listening on localhost:3000/