import { StepGeneralFormData } from "./questions-steps/step-general/step-general-data";
import { StepMeasuresFormData } from "./questions-steps/step-measures/step-measures-data";

export type OnboardingFormData = {
  general: StepGeneralFormData;
  measures: StepMeasuresFormData;
};
