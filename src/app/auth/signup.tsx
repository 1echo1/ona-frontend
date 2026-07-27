import SignUp from "@/components/signup/signup";
import { View } from "react-native";

export default function SignUpScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
        <SignUp width="80%" />
    </View>
  );
}

