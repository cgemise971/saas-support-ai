export interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  aiPrompt: string;
  completed: boolean;
}

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: "role",
    title: "Tell us your role",
    description: "So we can personalize your experience",
    aiPrompt:
      "The user just started onboarding. Ask them what their role is (Founder/CEO, Product Manager, Marketing, or Developer) and explain briefly why this matters for their experience. Be warm and welcoming. Keep it to 2-3 sentences.",
    completed: false,
  },
  {
    id: "data-source",
    title: "Connect your data",
    description: "Start collecting events from your product",
    aiPrompt:
      "The user needs to connect a data source. Explain the 3 options (SDK install, no-code integration like Segment, or CSV import) in a friendly way. Recommend the SDK for developers and Segment for non-technical users. Ask which they prefer. Keep it concise.",
    completed: false,
  },
  {
    id: "dashboard",
    title: "Create your first dashboard",
    description: "Visualize your key metrics",
    aiPrompt:
      "The user is ready to create their first dashboard. Suggest a template based on their role. Explain what metrics they'll see and why they matter. Encourage them to click 'Create Dashboard'. Keep it actionable and brief.",
    completed: false,
  },
  {
    id: "invite",
    title: "Invite your team",
    description: "Analytics is better together",
    aiPrompt:
      "The user has their dashboard set up. Now suggest inviting 1-2 team members. Explain the roles (Admin, Editor, Viewer) briefly. Mention that shared dashboards drive better decisions. Keep it encouraging.",
    completed: false,
  },
  {
    id: "alert",
    title: "Set up your first alert",
    description: "Never miss an important change",
    aiPrompt:
      "Final step! Help the user set up their first alert. Suggest monitoring their most important metric (based on their role). Explain how alerts work (metric + condition + notification channel). Congratulate them on completing onboarding!",
    completed: false,
  },
];
