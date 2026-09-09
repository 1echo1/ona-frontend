import { Sex } from "@/constants/sex";
import { z } from "zod";

const dateOfBirthSchema = z
  .object({
    day: z
      .number({ invalid_type_error: "Required" })
      .min(1)
      .max(31, "Must be between 01 and 31"),
    month: z
      .number({ invalid_type_error: "Required" })
      .min(1)
      .max(12, "Must be between 01 and 12"),
    year: z
      .number({ invalid_type_error: "Required" })
      .min(1900)
      .max(new Date().getFullYear(), "Must be between 1900 and current year"),
  })
  .refine(
    ({ day, month, year }) => {
      const date = new Date(year, month - 1, day);
      return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
      );
    },
    { message: "Invalid date" },
  );

const onboardingGeneralStepSchema = z.object({
  name: z.string().min(1, "Required"),
  dateOfBirth: dateOfBirthSchema,
  sex: z.enum([Sex.MALE.toString(), Sex.FEMALE.toString()]),
});
export default onboardingGeneralStepSchema;

export type OnboardingGeneralStepFormData = z.infer<
  typeof onboardingGeneralStepSchema
>;
