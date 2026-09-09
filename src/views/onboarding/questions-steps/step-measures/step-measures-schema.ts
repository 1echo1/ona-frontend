import { z } from "zod";

const onboardingMeasuresStepSchema = z.object({
  weight: z.number().min(0, "Required"),
  height: z.number().min(0, "Required"),
});
export default onboardingMeasuresStepSchema;

export type OnboardingMeasuresStepFormData = z.infer<
  typeof onboardingMeasuresStepSchema
>;
