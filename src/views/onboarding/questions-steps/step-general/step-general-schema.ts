import { Sex } from "@/constants/sex";
import { z } from "zod";

const onboardinGeneralStepSchema = z.object({
  name: z.string().min(1, "Required"),
  day: z.number().min(1).max(31, "Must be between 01 and 31"),
  month: z.number().min(1).max(12, "Must be between 01 and 12"),
  year: z
    .number()
    .min(1900)
    .max(new Date().getFullYear(), "Must be between 1900 and current year"),
  sex: z.enum([Sex.MALE.toString(), Sex.FEMALE.toString()]),
  dateOfBirth: z
    .object({
      day: z.number({ invalid_type_error: "Required" }).min(1).max(31),
      month: z.number({ invalid_type_error: "Required" }).min(1).max(12),
      year: z
        .number({ invalid_type_error: "Required" })
        .min(1900)
        .max(new Date().getFullYear()),
    })
    .refine((val) => {
      const date = new Date(val.year, val.month - 1, val.day);
      return (
        date.getFullYear() === val.year &&
        date.getMonth() === val.month - 1 &&
        date.getDate() === val.day
      );
    }, "Invalid date"),
});
export default onboardinGeneralStepSchema;

export type OnboardingGeneralStepFormData = z.infer<
  typeof onboardinGeneralStepSchema
>;
