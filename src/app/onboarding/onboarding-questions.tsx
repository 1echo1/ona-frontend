import { ThemedView } from "@/style/theme/themed-view";
import OnboardingQuestions from "@/views/onboarding/onboarding-questions";

export default function OnboardingQuestionsScreen() {
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <OnboardingQuestions width="80%" />
    </ThemedView>
  );
}
