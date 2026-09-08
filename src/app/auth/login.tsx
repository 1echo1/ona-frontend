import { ThemedView } from "@/style/theme/themed-view";
import Login from "@/views/auth/login/login";

export default function LoginScreen() {
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Login width="80%" />
    </ThemedView>
  );
}
