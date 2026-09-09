import { Path } from "react-hook-form";
import { OnboardingFormData } from "../onboarding-form-data";
import StepGeneral from "./step-general/step-general";
import StepMeasures from "./step-measures/step-measures";

export type OnboardingStepConfig = {
  id: string;
  component: React.ComponentType;
  fields: Path<OnboardingFormData>[];
};

export const onboardingSteps: OnboardingStepConfig[] = [
  {
    id: "general",
    component: StepGeneral,
    fields: ["general.name", "general.dateOfBirth", "general.sex"],
  },
  {
    id: "measures",
    component: StepMeasures,
    fields: ["measures.weight", "measures.height"],
  },
] as const;
