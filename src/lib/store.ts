import { create } from "zustand";
import { ONBOARDING_STEPS, type OnboardingStep } from "./onboarding-steps";

interface OnboardingState {
  steps: OnboardingStep[];
  currentStepIndex: number;
  userRole: string | null;
  isCompleted: boolean;
  startTime: number | null;
  completeStep: (stepId: string) => void;
  setUserRole: (role: string) => void;
  startOnboarding: () => void;
  getProgress: () => number;
  getElapsedTime: () => number;
}

export const useOnboardingStore = create<OnboardingState>((set, get) => ({
  steps: ONBOARDING_STEPS.map((s) => ({ ...s })),
  currentStepIndex: 0,
  userRole: null,
  isCompleted: false,
  startTime: null,

  startOnboarding: () => set({ startTime: Date.now() }),

  completeStep: (stepId) =>
    set((state) => {
      const steps = state.steps.map((s) =>
        s.id === stepId ? { ...s, completed: true } : s
      );
      const nextIndex = Math.min(
        state.currentStepIndex + 1,
        steps.length - 1
      );
      const allCompleted = steps.every((s) => s.completed);
      return {
        steps,
        currentStepIndex: nextIndex,
        isCompleted: allCompleted,
      };
    }),

  setUserRole: (role) => set({ userRole: role }),

  getProgress: () => {
    const { steps } = get();
    return Math.round(
      (steps.filter((s) => s.completed).length / steps.length) * 100
    );
  },

  getElapsedTime: () => {
    const { startTime } = get();
    if (!startTime) return 0;
    return Math.round((Date.now() - startTime) / 1000);
  },
}));
