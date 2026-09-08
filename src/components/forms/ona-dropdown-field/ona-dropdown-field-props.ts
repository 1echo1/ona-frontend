import { DimensionValue } from "react-native";

export type OnaDropdownOption<T = string> = {
  label: string;
  value: T;
};

export type OnaDropdownFieldProps<T = string> = {
  label?: string;
  description?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: T;
  onChange?: (value: T) => void;
  options: OnaDropdownOption<T>[];
  compensateDescription?: boolean;
  error?: string;
  backgroundColor?: string;
  width?: DimensionValue;
};
