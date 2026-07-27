import { Text, TextInput, View } from "react-native";
import { isDarkText } from "../../../scripts/utils/textUtils";
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
        <View style={{ paddingTop: 10, paddingBottom: 10}}>
            {label && <Text>{label}</Text>}
            {description && <Text>{description}</Text>}
            <TextInput 
                editable={!disabled}
                placeholder={placeholder} 
                value={value}
                onChangeText={onChangeText}
                multiline={multiline}
                numberOfLines={multiline ? lines : undefined}
                secureTextEntry={secureTextEntry}
                style={[
                    { borderWidth: 1, borderRadius: 8 },
                    compensateDescription && !description ? { marginTop: 24 } : undefined,
                    center ? { textAlign: "center" } : undefined,
                    backgroundColor ? { color: isDarkText(backgroundColor) ? "black" : "white" } : undefined
                ]}
            />
            {error && <Text style={{ color: 'red' }}>{error}</Text>}
        </View>
    );
}