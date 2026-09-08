import { useTheme } from "@/hooks/use-theme";
import { getFramedStyle } from "@/style/frames";
import { ThemedText } from "@/style/theme/themed-text";
import { DimensionValue, Pressable } from "react-native";

type Props = {
  title: string;
  onPress?: () => void;
  width?: DimensionValue;
};

export default function OnaButton({ title, onPress, width }: Props) {
  const theme = useTheme();
  const framedStyle = getFramedStyle(theme);

  return (
    <Pressable
      style={[
        framedStyle.button,
        { paddingVertical: 10, marginTop: 20 },
        { width: width },
      ]}
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
