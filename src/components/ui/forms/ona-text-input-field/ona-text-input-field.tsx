import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { TextInput } from "react-native";
import { isDarkText } from "../../../../utils/textUtils";
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

    return (
        <ThemedView style={{ paddingTop: 10, paddingBottom: 10}}>
            {label && <ThemedText>{label}</ThemedText>}
            {description && <ThemedText>{description}</ThemedText>}
            <TextInput 
                editable={!disabled}
                placeholder={placeholder} 
                value={value}
                onChangeText={onChangeText}
                multiline={multiline}
                numberOfLines={multiline ? lines : undefined}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={backgroundColor ? (isDarkText(backgroundColor) ? "black" : "white") : undefined}

                style={[
                    { borderWidth: 1, borderRadius: 8 },
                    compensateDescription && !description ? { marginTop: 24 } : undefined,
                    center ? { textAlign: "center" } : undefined,
                    backgroundColor ? { color: isDarkText(backgroundColor) ? "black" : "white" } : undefined,
                    backgroundColor ? { backgroundColor: backgroundColor } : undefined,
                    backgroundColor ? { borderColor: isDarkText(backgroundColor) ? "black" : "white" } : undefined,

                ]}
            />
            {error && <ThemedText style={{ color: 'red' }}>{error}</ThemedText>}
        </ThemedView>
    );
}