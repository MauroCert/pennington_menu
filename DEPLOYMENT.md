# Deployment Guide

## Deploy to Vercel (Recommended)

### Method 1: GitHub Integration (Easiest)

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 3 menu design options"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Select your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Done! Your site will be live in 2-3 minutes

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

## Other Deployment Options

### Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy

### Self-Hosted (VPS/Docker)

```bash
# Build the project
npm run build

# Start production server
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "pennington-menu" -- start
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t pennington-menu .
docker run -p 3000:3000 pennington-menu
```

## Environment Variables

This project doesn't require any environment variables for basic functionality. If you add features that need them:

1. Create `.env.local` for local development
2. Add variables in your hosting platform's dashboard

## Custom Domain

### Vercel
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

### Netlify
1. Go to "Domain settings"
2. Add custom domain
3. Update DNS records

## Performance Tips

- All 3 menu options are optimized for performance
- Images use Next.js Image optimization
- Components are client-side only where needed
- CSS is optimized with Tailwind

## Troubleshooting

### Build fails
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Port already in use
```bash
# Use a different port
PORT=3001 npm run dev
```

## Support

For deployment issues:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
