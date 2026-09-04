import { darkColors, lightColors, ThemeColors } from '@/style/colors';
import { useColorScheme } from 'react-native';

export function useTheme(): ThemeColors {
  const colorScheme = useColorScheme();
  return colorScheme === 'light' ? darkColors : lightColors;
}
