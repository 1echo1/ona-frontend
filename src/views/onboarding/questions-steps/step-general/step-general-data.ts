import { Sex } from "@/constants/sex";

export type StepGeneralFormData = {
  name: string;
  dateOfBirth: {
    day?: number;
    month?: number;
    year?: number;
  };
  sex: Sex;
};
