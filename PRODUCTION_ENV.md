# Production Environment Variables

## Tachyon Labs (tachyonlabs.dev)

### Required Environment Variables

```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://api.tachyinc.com/api/v1

# Application URL
NEXT_PUBLIC_APP_URL=https://tachyonlabs.dev

# Organization ID (Production)
NEXT_PUBLIC_ORG_ID=ed719577-e7a0-498b-bc56-116e89651eeb
```

## Deployment Notes

1. **Organization ID**: This is the production organization ID created in the backend database
2. **API URL**: Points to the shared backend API at api.tachyinc.com
3. **CORS**: Backend is already configured to accept requests from tachyonlabs.dev
4. **Multi-tenant Support**: The backend will automatically resolve the organization based on the domain

## Build Command

```bash
# For production build
npm run build

# For deployment (e.g., Vercel)
# Set the environment variables in your hosting provider's dashboard
```

## Testing

To test production configuration locally:
1. Update `.env.local` to use production values
2. Run `npm run build && npm start`
3. Verify forms submit correctly to production backend
