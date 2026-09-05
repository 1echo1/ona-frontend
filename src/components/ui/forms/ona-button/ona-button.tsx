import { useTheme } from "@/hooks/use-theme";
import { getFramedStyle } from "@/style/frames";
import { ThemedText } from "@/style/theme/themed-text";
import { Pressable } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export default function OnaButton({ title, onPress }: Props) {
  const theme = useTheme();
  const framedStyle = getFramedStyle(theme);

  return (
    <Pressable
      style={[framedStyle.button, { paddingVertical: 10, marginTop: 20 }]}
      onPress={onPress}
    >
      <ThemedText
        type="medium"
        style={{ textAlign: "center", color: theme.counterText }}
      >
        {title}
      </ThemedText>
    </Pressable>
  );
}
