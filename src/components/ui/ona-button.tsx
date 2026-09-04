import { useTheme } from '@/hooks/use-theme';
import { getFramedStyle } from '@/style/frames';
import { ThemedText } from '@/style/theme/themed-text';
import { Pressable, View } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

export default function OnaButton({ title, onPress }: Props) {

  const theme  = useTheme();
  const framedStyle = getFramedStyle(theme);

  return (
    <View style={[
        framedStyle.outer,
        { backgroundColor: theme.altBackground }
    ]}>
        <Pressable style={[framedStyle.inner, {paddingVertical: 5}]} onPress={onPress}>
            <ThemedText type="medium" style={{ textAlign: 'center', backgroundColor: theme.altBackground }}>
                {title}
            </ThemedText>
        </Pressable>
    </View>
  );
}