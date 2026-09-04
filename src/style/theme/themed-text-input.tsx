import { useTheme } from '@/hooks/use-theme';
import { ThemeColor } from '@/style/colors';
import { textSizes } from '@/style/tokens';
import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

export type ThemedTextInputProps = TextInputProps & {
  themeColor?: ThemeColor;
};

export function ThemedTextInput({ style, themeColor, ...rest }: ThemedTextInputProps) {
  const theme = useTheme();

  return (
    <TextInput
      placeholderTextColor={theme.text + '80'}
      style={[
        styles.default,
        { color: theme[themeColor ?? 'text'] },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: textSizes.medium,
    lineHeight: 20,
  },
});