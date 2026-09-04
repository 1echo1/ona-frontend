import { useTheme } from '@/hooks/use-theme';
import { getFramedStyle } from '@/style/frames';
import { ThemedText } from "@/style/theme/themed-text";
import { ThemedTextInput } from '@/style/theme/themed-text-input';
import { ThemedView } from "@/style/theme/themed-view";
import { textSizes } from '@/style/tokens';
import { View } from "react-native";
import { OnaTextInputFieldProps } from "./ona-text-input-field-prop";

export default function OnaTextInputField({  
    label,
    description,
    placeholder,
    disabled,
    center,
    value,
    onChangeText,
    compensateDescription,
    error,
    multiline,
    lines,
    backgroundColor,
    secureTextEntry
}: OnaTextInputFieldProps) {

    const theme = useTheme();    
    const framedStyle = getFramedStyle(theme);

    return (
        <ThemedView style={{ paddingTop: 10, paddingBottom: 10}}>
            {label && <ThemedText>{label}</ThemedText>}
            {description && <ThemedText>{description}</ThemedText>}
            
            <View style={[
                framedStyle.outer,
                compensateDescription && !description ? { marginTop: 24 } : undefined,
            ]}>

            <ThemedTextInput
                editable={!disabled}
                placeholder={placeholder} 
                value={value}
                onChangeText={onChangeText}
                multiline={multiline}
                numberOfLines={multiline ? lines : undefined}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={theme.text + "80"}

                style={[
                    framedStyle.inner,
                    compensateDescription && !description ? { marginTop: 24 } : undefined,
                    center ? { textAlign: "center" } : undefined,
                    {color: theme.text, backgroundColor: theme.backgroundElement, fontSize: textSizes.medium},
                    //backgroundColor ? { color: isDarkText(backgroundColor) ? "black" : "white" } : undefined,
                    //backgroundColor ? { backgroundColor: backgroundColor } : undefined,
                    //backgroundColor ? { borderColor: isDarkText(backgroundColor) ? "black" : "white" } : undefined,
                ]}
            />
            </View>
            {error && <ThemedText style={{ color: theme.error }}>{error}</ThemedText>}
        </ThemedView>
    );
}