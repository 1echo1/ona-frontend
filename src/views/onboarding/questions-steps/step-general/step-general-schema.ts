import { Sex } from "@/constants/sex";
import { dateSchema } from "@/general-schemas/date-schema";
import { z } from "zod";

const onboardingGeneralStepSchema = z.object({
  name: z.string().min(1, "Required"),
  dateOfBirth: dateSchema,
  sex: z.enum([Sex.MALE.toString(), Sex.FEMALE.toString()]),
});
export default onboardingGeneralStepSchema;

export type OnboardingGeneralStepFormData = z.infer<
  typeof onboardingGeneralStepSchema
>;
