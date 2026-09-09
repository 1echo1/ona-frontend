import { dateSchema } from "@/general-schemas/date-schema";
import { z } from "zod";

const onboardingCycleStepSchema = z.object({
  conditions: z.string().min(1, "Required"),
  cycleLength: z.number().min(0, "Required"),
  lastPeriod: dateSchema,
});
export default onboardingCycleStepSchema;

export type OnboardingCycleStepFormData = z.infer<
  typeof onboardingCycleStepSchema
>;
