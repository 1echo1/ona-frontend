import { useTheme } from "@/hooks/use-theme";
import { getFramedStyle } from "@/style/frames";
import { ThemedText } from "@/style/theme/themed-text";
import { ThemedView } from "@/style/theme/themed-view";
import { View } from "react-native";
import { AuthCardProps } from "./auth-panel-props";

export default function AuthCard({ title, width, children }: AuthCardProps) {
  const theme = useTheme();
  const framedStyle = getFramedStyle(theme);

  return (
    <ThemedView style={{ width }}>
      <ThemedText
        type="title"
        style={{ textAlign: "center", color: theme.text }}
      >
        {title}
      </ThemedText>

      <View style={[framedStyle.panel, { padding: 15, marginTop: 15 }]}>
        {children}
      </View>
    </ThemedView>
  );
}
