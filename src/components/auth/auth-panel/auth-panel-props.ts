import { ReactNode } from "react";
import { DimensionValue } from "react-native";

export type AuthCardProps = {
  title: string;
  width: DimensionValue;
  children: ReactNode;
};