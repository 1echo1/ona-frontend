import WaveBackground from "@/components/decorative/wave-background";
import { ThemedView } from "@/style/theme/themed-view";
import SignUp from "@/views/auth/signup/signup";

export default function SignUpScreen() {
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
        <SignUp width="80%" />
      </ThemedView>
    </ThemedView>
  );
}
