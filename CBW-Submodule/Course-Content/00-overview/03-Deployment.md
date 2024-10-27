# Deployment

This page outlines the proposed deployment process for this site. It will be hosted on a Linux server managed by IT the team.

## Prerequisites
- Linux server with nginx installed
- Domain name configured with DNS
- SSH access to the server
- Git installed on the server
- Node.js (v18 or newer) and npm installed

## Server Requirements
Minimum specifications:
- xGB RAM
- x CPU cores
- xGBs of storage
- Ubuntu 20.04 LTS or newer

    :::info
    These numbers will be updated
    :::

## Deployment Steps

### 1. Server Setup
1. SSH into your server:
```bash
ssh username@your-server-ip
```

2. Install Node.js and npm if not already installed:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. Verify installations:
```bash
node --version
npm --version
```

### 2. Clone and Build

1. Clone the repository:
```bash
git clone <ropo-url>
cd website
```

2. Install dependencies:
```bash
npm ci
```

3. Build the static files:

```bash
npm run build
```

This will create a `build` directory containing the static site files.

### 3. Configure Nginx

IT will help with this process but generally speaking:

1. Create a new Nginx site configuration:
```bash
sudo nano /etc/nginx/sites-available/course-site
```

2. Add the configuration (just an example config):

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/your/repo/build;
    index index.html;
}
```

3. Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/course-site /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 4. SSL Configuration

1. Install Certbot:
```bash
sudo apt install certbot python3-certbot-nginx
```

2. Obtain and install SSL certificate:
```bash
sudo certbot --nginx -d your-domain.com
```

## Updating the Site

To update the site when changes are made:

1. Pull the latest changes:

```bash
git pull origin main
```

2. Rebuild the site:

```bash
npm run build
```

The changes will be automatically reflected as Nginx serves the static files from the build directory.

## Maintenance

### Regular Tasks
- Monitor server resources (IT will facilitate this for us)
- Renew SSL certificates (if using Certbot, it's automatic)
