# Getting Started with Acme Analytics

## Step 1: Tell us about yourself

Choose your role to personalize your experience:
- **Founder/CEO**: Focus on MRR, churn, and growth metrics
- **Product Manager**: Focus on feature adoption, funnels, and user behavior
- **Marketing**: Focus on acquisition channels, campaign attribution, and conversion
- **Developer**: Focus on API integration, events, and data pipeline

Your role determines which dashboards and metrics we show you first. You can always change this later in Settings.

## Step 2: Connect your data source

Acme Analytics needs event data to work. Choose how to send data:

### Option A: Install the SDK (recommended)
```bash
npm install @acme/analytics-sdk
```

Then initialize in your app:
```typescript
import { AcmeAnalytics } from '@acme/analytics-sdk';

const analytics = new AcmeAnalytics({
  apiKey: process.env.ACME_API_KEY,
});

// Track your first event
analytics.track('page_viewed', { page: '/home' });
```

### Option B: Use a no-code integration
Go to Settings → Integrations and choose:
- **Segment**: Auto-import all existing events
- **Google Tag Manager**: Add our snippet
- **Zapier**: Connect 5,000+ apps

### Option C: Import a CSV
Upload a CSV file with columns: timestamp, event_name, user_id, properties.
Go to Settings → Import → Upload CSV.

## Step 3: Create your first dashboard

Once data flows in, create your first dashboard:

1. Click "New Dashboard" in the sidebar
2. Choose a template based on your role:
   - **Growth Dashboard**: MRR, signups, churn rate, LTV
   - **Product Dashboard**: DAU/MAU, feature usage, retention cohorts
   - **Marketing Dashboard**: CAC, channel attribution, funnel conversion
3. Customize: drag widgets, change date ranges, add filters
4. Save and share with your team

## Step 4: Invite your team

Collaboration makes analytics powerful:

1. Go to Settings → Team
2. Click "Invite member"
3. Enter their email and choose a role:
   - **Admin**: Full access, can manage billing and team
   - **Editor**: Can create/edit dashboards and reports
   - **Viewer**: Read-only access to shared dashboards
4. They'll receive an email invitation

## Step 5: Set up your first alert

Never miss an important metric change:

1. Go to Alerts → New Alert
2. Choose a metric (e.g., "Daily Active Users")
3. Set a condition (e.g., "drops below 500")
4. Choose notification channel: Email, Slack, or SMS
5. Save

## What to do next

- Explore the AI Insights tab for automatic anomaly detection
- Set up a weekly report to get a digest every Monday
- Check the Churn Prediction page to see which users are at risk
- Connect Stripe for automatic revenue metrics
