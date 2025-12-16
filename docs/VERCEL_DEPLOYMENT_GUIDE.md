# Vercel Deployment Guide

This guide explains how to deploy your Next.js application to Vercel.

## Why Vercel?

- ✅ **Optimized for Next.js** - Built by the creators of Next.js
- ✅ **Free tier** with generous limits
- ✅ **Automatic deployments** from Git
- ✅ **Built-in API routes** support
- ✅ **No plan upgrade needed**
- ✅ **Better performance** for Next.js apps
- ✅ **Automatic SSL** certificates
- ✅ **Global CDN** distribution

## Prerequisites

1. **Vercel Account**: Sign up at https://vercel.com (free)
2. **GitHub/GitLab/Bitbucket**: Your code should be in a Git repository
3. **Environment Variables**: Prepare all your environment variables

## Deployment Methods

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**:

   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Import Project in Vercel**:
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**:
   - In the Vercel dashboard, go to your project → Settings → Environment Variables
   - Add all your environment variables from `.env.local`:
     - `NEXTAUTH_SECRET`
     - `NEXTAUTH_URL` (set to your Vercel URL, e.g., `https://your-project.vercel.app`)
     - `DATABASE_URL`
     - `GOOGLE_CLIENT_ID`
     - `GOOGLE_CLIENT_SECRET`
     - `FACEBOOK_CLIENT_ID`
     - `FACEBOOK_CLIENT_SECRET`
     - `FIREBASE_PROJECT_ID`
     - `FIREBASE_CLIENT_EMAIL`
     - `FIREBASE_PRIVATE_KEY`
     - `NEXT_PUBLIC_FIREBASE_API_KEY`
     - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
     - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
     - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
     - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
     - `NEXT_PUBLIC_FIREBASE_APP_ID`
     - `NEXT_PUBLIC_MEASUREMENT_ID` (optional)
     - `SUPER_ADMIN_EMAILS`
     - `NEXT_PUBLIC_SUPER_ADMIN_EMAILS`

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your app automatically
   - Your app will be live at `https://your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:

   ```bash
   vercel login
   ```

3. **Deploy**:

   ```bash
   # First deployment (will ask questions)
   vercel

   # Production deployment
   npm run vercel:deploy
   # or
   vercel --prod
   ```

## Important Environment Variables

### Update NEXTAUTH_URL

After deployment, update `NEXTAUTH_URL` in Vercel dashboard:

- Development: `http://localhost:3000`
- Production: `https://your-project.vercel.app`

### Update OAuth Redirect URLs

Update your OAuth provider redirect URLs:

**Google OAuth**:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. APIs & Services → Credentials
3. Edit your OAuth 2.0 Client ID
4. Add to "Authorized redirect URIs":
   - `https://your-project.vercel.app/api/auth/callback/google`

**Facebook OAuth**:

1. Go to [Facebook Developers](https://developers.facebook.com)
2. Your App → Settings → Basic
3. Add to "Valid OAuth Redirect URIs":
   - `https://your-project.vercel.app/api/auth/callback/facebook`

## Post-Deployment Checklist

- [ ] Update `NEXTAUTH_URL` environment variable
- [ ] Update OAuth redirect URLs (Google & Facebook)
- [ ] Test authentication (Google, Facebook, Email)
- [ ] Test API routes
- [ ] Test dashboard functionality
- [ ] Verify Firestore connection
- [ ] Check error monitoring (if using Sentry)

## Custom Domain

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXTAUTH_URL` to your custom domain
5. Update OAuth redirect URLs to use custom domain

## Automatic Deployments

Vercel automatically deploys when you push to:

- **Production**: `main` or `master` branch
- **Preview**: Any other branch or pull request

## Monitoring

- **Deployments**: View in Vercel Dashboard
- **Logs**: Available in Vercel Dashboard → Deployments → View Function Logs
- **Analytics**: Built-in Web Vitals tracking
- **Errors**: Check Vercel Dashboard → Deployments → Runtime Logs

## Troubleshooting

### Build Failures

- Check build logs in Vercel Dashboard
- Ensure all environment variables are set
- Verify `package.json` scripts are correct

### API Routes Not Working

- Check function logs in Vercel Dashboard
- Verify environment variables are set
- Check CORS settings if needed

### Authentication Issues

- Verify `NEXTAUTH_URL` matches your Vercel domain
- Check OAuth redirect URLs are updated
- Verify OAuth credentials are correct

## Cost

**Free Tier Includes**:

- 100GB bandwidth/month
- 100 serverless function executions/day
- Unlimited static deployments
- Automatic SSL
- Global CDN

**Upgrade if needed**:

- Pro: $20/month (for teams)
- Enterprise: Custom pricing

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Vercel Community: https://github.com/vercel/vercel/discussions
