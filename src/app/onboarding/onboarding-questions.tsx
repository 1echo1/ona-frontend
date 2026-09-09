import WaveBackground from "@/components/decorative/wave-background";
import { ThemedView } from "@/style/theme/themed-view";
import OnboardingQuestions from "@/views/onboarding/onboarding-questions";

export default function OnboardingQuestionsScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <WaveBackground />
      <ThemedView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <OnboardingQuestions width="80%" />
      </ThemedView>
    </ThemedView>
  );
}
