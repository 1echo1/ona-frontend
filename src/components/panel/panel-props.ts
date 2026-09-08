import { ReactNode } from "react";
import { DimensionValue } from "react-native";

export type CardProps = {
  title?: string;
  width?: DimensionValue;
  children: ReactNode;
};
