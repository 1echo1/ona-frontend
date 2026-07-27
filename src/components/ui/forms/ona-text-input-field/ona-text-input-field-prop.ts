export type OnaTextInputFieldProps = {
    label?: string;
    description?: string;
    placeholder?: string;
    disabled?: boolean;
    center?: boolean;
    value?: string;
    onChangeText?: (text: string) => void;
    compensateDescription?: boolean;
    error?: string;
    multiline?: boolean;
    lines?: number;
    backgroundColor?: string;
    secureTextEntry?: boolean;
};