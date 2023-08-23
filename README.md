# Zoom-Get-Audio-Dialins
> **Note**
> 
> The following sample application is a personal, open-source project shared by the app creator and not an officially supported Zoom Video Communications, Inc. sample application. Zoom Video Communications, Inc., its employees and affiliates are not responsible for the use and maintenance of this application. Please use this sample application for inspiration, exploration and experimentation at your own risk and enjoyment. You may reach out to the app creator and broader Zoom Developer community on https://devforum.zoom.us/ for technical discussion and assistance, but understand there is no service level agreement support for this application. Thank you and happy coding!

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
