import { DimensionValue } from "react-native";

export type OnaDateInputFieldProps = {
  label?: string;
  description?: string;
  disabled?: boolean;
  value?: OnaDate;
  onChange?: (date: OnaDate) => void;
  compensateDescription?: boolean;
  error?: string;
  backgroundColor?: string;
  width?: DimensionValue;
};

export type OnaDate = {
  day?: number;
  month?: number;
  year?: number;
};

export type DatePart = {
  key: keyof OnaDate;
  labelKey: string;
  width: DimensionValue;
};
