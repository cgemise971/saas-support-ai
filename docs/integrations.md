# Integrations

## Slack Integration

Connect Acme Analytics to Slack to receive real-time alerts in your channels.

### Setup

1. Go to **Settings → Integrations → Slack**
2. Click "Connect to Slack"
3. Authorize the Acme Analytics app
4. Choose a default channel for notifications

### Available Alerts

- **Churn risk alerts**: Get notified when a user's churn probability exceeds a threshold
- **Metric alerts**: Set thresholds for any metric (e.g., "alert me when DAU drops below 500")
- **Weekly digests**: Automated summary of key metrics every Monday
- **Anomaly detection**: AI-powered alerts for unusual patterns

### Slash Commands

- `/acme status` — Quick overview of today's key metrics
- `/acme user jane@example.com` — Look up a specific user
- `/acme ask "how many signups this week?"` — Ask a natural language question

## Segment Integration

Import events from Segment into Acme Analytics.

### Setup

1. In Segment, add "Acme Analytics" as a destination
2. Enter your Acme API key
3. Map your Segment events to Acme events (or use auto-mapping)

All Segment track(), identify(), and page() calls will automatically flow into Acme Analytics.

## Stripe Integration

Sync your Stripe billing data for revenue analytics.

### What's Synced

- Subscription events (created, updated, cancelled)
- Invoice events (paid, failed)
- MRR calculations
- Plan changes

### Setup

1. Go to **Settings → Integrations → Stripe**
2. Click "Connect Stripe"
3. Authorize read-only access
4. Data begins syncing immediately

### Revenue Metrics

Once connected, you'll see:
- **MRR**: Monthly Recurring Revenue
- **ARR**: Annual Recurring Revenue
- **Net Revenue Retention**: NRR percentage
- **Average Revenue Per User**: ARPU by plan
- **Churn Revenue**: Lost MRR from cancellations

## HubSpot Integration

Sync user analytics data with HubSpot CRM contacts.

### Bi-directional Sync

- **Acme → HubSpot**: User traits, event history, churn risk score
- **HubSpot → Acme**: Contact properties, deal stages, company info

### Automated Workflows

Create HubSpot workflows based on Acme data:
- "When churn risk > 0.8, create a task for the account manager"
- "When user upgrades to Pro, update deal stage to 'Won'"

## Zapier Integration

Connect Acme Analytics to 5,000+ apps through Zapier.

### Popular Zaps

- New high-risk churn user → Create Intercom conversation
- Weekly metrics report → Send to Google Sheets
- New user signed up → Add to Mailchimp list
- Metric threshold exceeded → Send SMS via Twilio

## Custom Webhooks

For custom integrations, use webhooks to receive real-time event notifications.

See the [API Reference](./api-reference.md#webhooks) for webhook configuration details.

## SDK Plugins

### React Plugin

```typescript
import { AcmeProvider, useTrack } from '@acme/analytics-react';

function App() {
  return (
    <AcmeProvider apiKey={process.env.NEXT_PUBLIC_ACME_KEY}>
      <MyApp />
    </AcmeProvider>
  );
}

function PricingPage() {
  const track = useTrack();

  return (
    <button onClick={() => track('upgrade_clicked', { plan: 'pro' })}>
      Upgrade to Pro
    </button>
  );
}
```

### Next.js Plugin

```typescript
// next.config.ts
import { withAcme } from '@acme/analytics-next';

export default withAcme({
  apiKey: process.env.ACME_API_KEY,
  trackPageViews: true,
  trackWebVitals: true,
});
```

This automatically tracks:
- Page views (with route and referrer)
- Web Vitals (LCP, FID, CLS, TTFB)
- Client-side errors
