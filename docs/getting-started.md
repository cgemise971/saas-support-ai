# Getting Started with Acme Analytics

## What is Acme Analytics?

Acme Analytics is an AI-powered analytics platform for SaaS businesses. It helps you understand user behavior, track key metrics, and predict churn — all without writing SQL.

## Quick Start

### 1. Create an Account

Sign up at `app.acme-analytics.com`. You'll need:
- A valid email address
- Your company name
- Your SaaS product URL

After signing up, you'll receive an API key in your dashboard.

### 2. Install the SDK

```bash
npm install @acme/analytics-sdk
```

### 3. Initialize the SDK

```typescript
import { AcmeAnalytics } from '@acme/analytics-sdk';

const analytics = new AcmeAnalytics({
  apiKey: process.env.ACME_API_KEY,
  environment: 'production',
});
```

### 4. Track Your First Event

```typescript
analytics.track('user_signed_up', {
  userId: user.id,
  plan: 'pro',
  source: 'google_ads',
});
```

### 5. View Your Dashboard

Go to `app.acme-analytics.com/dashboard` to see your events flowing in real-time.

## System Requirements

- Node.js 18+ or Bun 1.0+
- Any modern browser (Chrome, Firefox, Safari, Edge)
- Minimum 512MB RAM for the SDK
- HTTPS required for production tracking

## Supported Frameworks

- React / Next.js
- Vue / Nuxt
- Svelte / SvelteKit
- Angular
- Vanilla JavaScript
- React Native (mobile SDK)
- Flutter (via REST API)
