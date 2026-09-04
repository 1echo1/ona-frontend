import { ThemeColors } from '@/style/colors';
import { borders } from '@/style/tokens';
import { StyleSheet } from 'react-native';

export function getFramedStyle(theme: ThemeColors) {
  return StyleSheet.create({
     outer: {
      borderWidth: borders.mid,
      borderColor: theme.border,
      borderRadius: 12,
      padding: 3,
      backgroundColor: theme.background,
    },
    inner: {
      borderWidth: borders.thin,
      borderColor: theme.border,
      borderRadius: 8,
    },
  });
}