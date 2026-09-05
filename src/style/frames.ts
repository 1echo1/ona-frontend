import { ThemeColors } from "@/style/colors";
import { borders } from "@/style/tokens";
import { StyleSheet } from "react-native";

export function getFramedStyle(theme: ThemeColors) {
  return StyleSheet.create({
    outer: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 14,
    },
    inner: {
      borderWidth: borders.mid,
      borderColor: theme.border,
      borderRadius: 12,
    },
    bevelDark: {
      backgroundColor: theme.border,
      borderRadius: 14,
      paddingTop: 2,
      paddingRight: 2,
    },
    bevelLight: {
      backgroundColor: theme.backgroundElement,
      borderRadius: 13,
      paddingBottom: 2,
      paddingRight: 2,
    },
    panel: {
      backgroundColor: theme.altBackground,
      borderWidth: borders.thick,
      borderColor: theme.border,
      borderRadius: 20,

      shadowColor: theme.border,
      shadowOffset: { width: 10, height: 2 },
      shadowOpacity: 0.35,
      shadowRadius: 6,

      elevation: 6,
    },
    button: {
      backgroundColor: theme.borderBackground,
      borderWidth: borders.mid,
      borderColor: theme.border,
      borderRadius: 22,

      shadowColor: theme.border,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 4,
    },
  });
}
