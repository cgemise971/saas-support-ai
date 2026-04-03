# API Reference

## Authentication

All API requests require an API key in the `Authorization` header:

```
Authorization: Bearer your_api_key_here
```

API keys are scoped per environment (production, staging, development). You can create and manage keys from **Settings → API Keys** in your dashboard.

### Rate Limits

| Plan | Requests/minute | Events/day |
|------|----------------|------------|
| Free | 60 | 10,000 |
| Pro | 300 | 500,000 |
| Enterprise | 1,000 | Unlimited |

Rate limit headers are included in every response:
- `X-RateLimit-Limit`: Maximum requests per minute
- `X-RateLimit-Remaining`: Remaining requests
- `X-RateLimit-Reset`: Unix timestamp when the limit resets

## Events API

### POST /v1/events

Track a single event.

**Request Body:**

```json
{
  "event": "page_viewed",
  "userId": "usr_123",
  "properties": {
    "page": "/pricing",
    "referrer": "google.com",
    "duration": 45
  },
  "timestamp": "2026-01-15T10:30:00Z"
}
```

**Response (200):**

```json
{
  "id": "evt_abc123",
  "status": "accepted"
}
```

### POST /v1/events/batch

Track multiple events in a single request (up to 100 events).

```json
{
  "events": [
    {
      "event": "page_viewed",
      "userId": "usr_123",
      "properties": { "page": "/pricing" }
    },
    {
      "event": "button_clicked",
      "userId": "usr_123",
      "properties": { "button": "upgrade_cta" }
    }
  ]
}
```

## Users API

### POST /v1/users/identify

Identify a user and set their properties.

```json
{
  "userId": "usr_123",
  "traits": {
    "email": "jane@example.com",
    "name": "Jane Smith",
    "plan": "pro",
    "company": "TechCorp",
    "signupDate": "2026-01-01"
  }
}
```

### GET /v1/users/:userId

Retrieve a user's profile and activity summary.

**Response:**

```json
{
  "userId": "usr_123",
  "traits": { "email": "jane@example.com", "plan": "pro" },
  "firstSeen": "2026-01-01T00:00:00Z",
  "lastSeen": "2026-04-01T14:22:00Z",
  "totalEvents": 1284,
  "churnRisk": 0.12
}
```

## Analytics API

### GET /v1/analytics/metrics

Retrieve aggregated metrics for a time range.

**Query Parameters:**
- `metric`: `active_users`, `events_count`, `churn_rate`, `mrr`, `retention`
- `from`: Start date (ISO 8601)
- `to`: End date (ISO 8601)
- `granularity`: `hour`, `day`, `week`, `month`

**Example:**

```
GET /v1/analytics/metrics?metric=active_users&from=2026-03-01&to=2026-03-31&granularity=day
```

### GET /v1/analytics/funnel

Analyze a conversion funnel.

```json
{
  "steps": [
    { "event": "page_viewed", "properties": { "page": "/pricing" } },
    { "event": "button_clicked", "properties": { "button": "start_trial" } },
    { "event": "trial_started" },
    { "event": "subscription_created" }
  ],
  "from": "2026-03-01",
  "to": "2026-03-31"
}
```

### GET /v1/analytics/cohort

Get retention cohort analysis.

**Query Parameters:**
- `cohortProperty`: Property to group users by (e.g., `signupDate`, `plan`)
- `from`: Start date
- `to`: End date

## AI Insights API

### GET /v1/ai/churn-prediction

Get AI-powered churn predictions for all users.

**Response:**

```json
{
  "predictions": [
    {
      "userId": "usr_456",
      "churnProbability": 0.87,
      "riskFactors": ["no_login_14_days", "decreased_feature_usage", "support_ticket_unresolved"],
      "recommendedAction": "Send personalized re-engagement email with feature tips"
    }
  ]
}
```

### POST /v1/ai/ask

Ask a natural language question about your data.

```json
{
  "question": "What percentage of Pro users used the export feature last month?"
}
```

**Response:**

```json
{
  "answer": "23.4% of Pro users used the export feature in March 2026.",
  "data": { "percentage": 23.4, "totalProUsers": 1250, "exportUsers": 293 },
  "confidence": 0.95
}
```

## Webhooks

### Configure Webhooks

Set up webhooks in **Settings → Webhooks** to receive real-time notifications.

**Supported Events:**
- `user.created`
- `user.churn_risk_high`
- `metric.threshold_exceeded`
- `report.generated`

**Webhook Payload:**

```json
{
  "event": "user.churn_risk_high",
  "timestamp": "2026-04-01T10:00:00Z",
  "data": {
    "userId": "usr_789",
    "churnProbability": 0.91,
    "riskFactors": ["no_login_30_days"]
  }
}
```

## Error Codes

| Code | Message | Description |
|------|---------|-------------|
| 400 | Bad Request | Invalid request body or parameters |
| 401 | Unauthorized | Missing or invalid API key |
| 403 | Forbidden | API key doesn't have required permissions |
| 404 | Not Found | Resource doesn't exist |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Error | Server error — contact support |
