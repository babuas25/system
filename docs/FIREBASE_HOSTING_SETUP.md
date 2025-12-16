# Firebase Hosting Setup Guide

This guide explains how to deploy your Next.js application to Firebase Hosting with Cloud Functions.

## Prerequisites

- Firebase CLI installed (`npm install -g firebase-tools`)
- Logged in to Firebase (`firebase login`)
- Firebase project created (`dashboard-1577e`)

## Project Structure

```
.
├── functions/          # Firebase Cloud Functions
│   ├── src/
│   │   └── index.ts   # Next.js server function
│   ├── package.json
│   └── tsconfig.json
├── firebase.json      # Firebase configuration
├── .firebaserc        # Firebase project configuration
└── next.config.js     # Next.js config (with standalone output)
```

## Configuration

### Next.js Configuration

- `output: 'standalone'` is enabled in `next.config.js` for Firebase deployment

### Firebase Configuration

- **Hosting**: Serves static files from `public/` directory
- **Functions**: Handles all dynamic routes and API endpoints
- **Firestore**: Security rules deployed from `production.rules`

## Deployment Steps

### 1. Build the Project

```bash
npm run build
```

This will:

- Build Next.js with standalone output
- Compile TypeScript functions

### 2. Install Function Dependencies

```bash
cd functions
npm install
npm run build
cd ..
```

### 3. Deploy to Firebase

**Deploy everything (Hosting + Functions + Firestore):**

```bash
firebase deploy
```

**Deploy only hosting:**

```bash
firebase deploy --only hosting
```

**Deploy only functions:**

```bash
firebase deploy --only functions
```

**Deploy only Firestore rules:**

```bash
firebase deploy --only firestore:rules
```

### 4. Using NPM Scripts

We've added convenient npm scripts:

```bash
# Build and deploy everything
npm run firebase:deploy

# Build and deploy only hosting
npm run firebase:deploy:hosting

# Build and deploy only functions
npm run firebase:deploy:functions
```

## Environment Variables

Make sure to set environment variables in Firebase Functions:

```bash
firebase functions:config:set \
  nextauth.secret="your-secret" \
  nextauth.url="https://your-project.web.app" \
  firebase.project_id="dashboard-1577e" \
  firebase.client_email="your-service-account@dashboard-1577e.iam.gserviceaccount.com" \
  firebase.private_key="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----"
```

Or use Firebase Console → Functions → Configuration → Environment Variables

## How It Works

1. **Static Assets**: Files in `public/` are served directly by Firebase Hosting
2. **Dynamic Routes**: All requests are rewritten to the `nextjs` Cloud Function
3. **API Routes**: Handled by Next.js server running in Cloud Functions
4. **Server-Side Rendering**: Next.js handles SSR in the Cloud Function

## Troubleshooting

### Function Timeout

- Default timeout is 60 seconds
- Increase in `functions/src/index.ts` if needed

### Memory Issues

- Default memory is 1GB
- Increase in `functions/src/index.ts` if needed

### Build Errors

- Make sure Node.js version matches (20.x)
- Check that all dependencies are installed
- Verify TypeScript compilation succeeds

### Deployment Errors

- Check Firebase project ID in `.firebaserc`
- Verify you're logged in: `firebase login:list`
- Ensure billing is enabled for Cloud Functions

## Custom Domain

To use a custom domain:

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the DNS configuration steps
4. Update `NEXTAUTH_URL` environment variable

## Monitoring

- **Functions Logs**: `firebase functions:log`
- **Hosting Analytics**: Firebase Console → Hosting → Analytics
- **Performance**: Firebase Console → Performance

## Cost Considerations

- **Cloud Functions**: Pay per invocation and compute time
- **Hosting**: Free tier includes 10GB storage and 360MB/day transfer
- **Firestore**: Free tier includes 1GB storage and 50K reads/day

## Support

For issues or questions:

- Check Firebase documentation: https://firebase.google.com/docs
- Next.js deployment guide: https://nextjs.org/docs/deployment
