import SignUp from "@/components/auth/signup/signup";
import { ThemedView } from "@/style/theme/themed-view";

export default function SignUpScreen() {
  return (
    <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <SignUp width="80%" />
    </ThemedView>
  );
}

