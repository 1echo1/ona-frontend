import { OnboardingFormData } from "@/views/onboarding/onboarding-form-data";
import { onboardingSteps } from "@/views/onboarding/questions-steps/steps-config";
import { useState } from "react";
import { Path, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export function useOnboardingSteps() {
  const { t } = useTranslation();
  const [stepIndex, setStepIndex] = useState(0);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<OnboardingFormData>({
    defaultValues: {
      general: { dateOfBirth: {} },
    },
    mode: "onSubmit",
  });

  const totalSteps = onboardingSteps.length;
  const currentStep = onboardingSteps[stepIndex];
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === totalSteps - 1;

  const handleBack = () => {
    if (!isFirstStep) setStepIndex((i) => i - 1);
  };

  const handleNext = async (): Promise<boolean> => {
    const valid = await methods.trigger(
      currentStep.fields as Path<OnboardingFormData>[],
    );
    if (!valid) return false;

    if (!isLastStep) {
      setStepIndex((i) => i + 1);
      return true;
    }
    return false;

    /*try {
      const data = methods.getValues();
      const result = await SubmitOnboardingRequest(data);
      if (result.success) return true;
      setSubmitError(t(`onboarding.errors.${result.errorCode}`));
      return false;
    } finally {
      setIsSubmitting(false);
    }*/
  };

  return {
    methods, // ← the screen needs this to spread into <FormProvider {...methods}>
    currentStep,
    stepIndex,
    totalSteps,
    isFirstStep,
    isLastStep,
    isSubmitting,
    submitError,
    handleNext,
    handleBack,
  };
}
