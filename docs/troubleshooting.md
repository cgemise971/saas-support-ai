# Troubleshooting

## I'm not seeing any data

**Check these things:**
1. Verify your API key is correct in Settings → API Keys
2. Make sure you're sending events to the right environment (production vs staging)
3. Check the Event Debugger in Settings → Developer → Event Debugger to see incoming events in real-time
4. If using the SDK, make sure you called `analytics.track()` after initialization

**Common mistakes:**
- Using a staging API key in production
- Forgetting to call `analytics.init()` before `analytics.track()`
- Blocking the SDK with an ad blocker (add `analytics.acme.com` to your allowlist)

## My dashboard is showing wrong numbers

1. Check the date range selector (top right). Default is "Last 7 days"
2. Check if any filters are active (look for blue filter badges)
3. Verify timezone settings in Settings → General → Timezone
4. If you recently connected a new data source, data may take up to 1 hour to process

## I can't invite team members

- You need Admin role to invite members
- Check if you've reached your plan's team member limit (Free: 1, Pro: 5, Enterprise: 50)
- The invite email sometimes goes to spam — ask them to check

## SDK installation issues

### "Module not found" error
Make sure you installed the correct package:
```bash
npm install @acme/analytics-sdk
# NOT: npm install acme-analytics (this is a different package)
```

### Events not sending in Next.js
If using App Router, make sure the SDK is initialized in a Client Component:
```typescript
'use client';
import { AcmeAnalytics } from '@acme/analytics-sdk';
// ...
```

### CORS errors
Add your domain to the allowed origins in Settings → API Keys → CORS Origins.

## Billing questions

- Upgrades are prorated and take effect immediately
- Downgrades take effect at the end of the billing cycle
- You can cancel anytime — no cancellation fees
- Need an invoice? Go to Settings → Billing → Invoices

## Still stuck?

- Check our full documentation at docs.acme-analytics.com
- Join our Discord community for help from other users
- Email support@acme-analytics.com (Pro: 24h response, Enterprise: 1h response)
