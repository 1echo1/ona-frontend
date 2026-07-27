import Login from "@/components/login/login";
import { View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
        <Login width="80%" />
    </View>
  );
}

