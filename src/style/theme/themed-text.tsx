import { StyleSheet, Text, type TextProps } from 'react-native';

import { useTheme } from '@/hooks/use-theme';
import { ThemeColor } from '@/style/colors';
import { textSizes } from '@/style/tokens';

export type ThemedTextProps = TextProps & {
  type?: 'micro' | 'small' | 'medium' | 'subtitle' | 'title' | 'large' | 'link' | 'linkPrimary' | 'code';
  themeColor?: ThemeColor;
};

export function ThemedText({ style, type = 'medium', themeColor, ...rest }: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        { color: theme[themeColor ?? 'text'] },
        type === 'micro' && styles.micro,
        type === 'small' && styles.small,
        type === 'medium' && styles.medium,
        type === 'subtitle' && styles.subtitle,
        type === 'title' && styles.title,
        type === 'large' && styles.large,
        type === 'link' && styles.link,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  micro: {
    fontSize: textSizes.micro,
    lineHeight: 17,
    fontWeight: 400,
  },
  small: {
    fontSize: textSizes.small,
    lineHeight: 20,
    fontWeight: 500,
  },
  medium: {
    fontSize: textSizes.medium,
    lineHeight: 24,
    fontWeight: 500,
  },
  subtitle: {
    fontSize: textSizes.subtitle,
    lineHeight: 27,
    fontWeight: 600,
  },
  title: {
    fontSize: textSizes.title,
    lineHeight: 30,
    fontWeight: 600,
  },
  large: {
    fontSize: textSizes.large,
    lineHeight: 38,
    fontWeight: 700,
  },
  link: {
    lineHeight: 20,
    fontSize: textSizes.small,
  },
});