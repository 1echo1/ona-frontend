import Login from "@/components/auth/login/login";
import { ThemedView } from "@/components/themed-view";

export default function LoginScreen() {
  return (
    <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Login width="80%" />
    </ThemedView>
  );
}

