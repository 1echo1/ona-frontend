import OnaTextInputField from "@/components/forms/ona-text-input-field/ona-text-input-field";
import { useTheme } from "@/hooks/use-theme";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { OnboardingMeasuresStepFormData } from "./step-measures-schema";

import { View } from "react-native";
import onboardingMeasuresStepSchema from "./step-measures-schema";

export default function StepMeasures() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OnboardingMeasuresStepFormData>({
    resolver: zodResolver(onboardingMeasuresStepSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <View>
      <Controller
        control={control}
        name="weight"
        render={({ field: { onChange, value } }) => (
          <OnaTextInputField
            placeholder={t("onboarding.measures.weight")}
            value={value?.toString() ?? ""}
            onChangeText={onChange}
            error={errors.weight?.message}
            backgroundColor={theme.backgroundElement}
            numeric
          />
        )}
      />

      <Controller
        control={control}
        name="height"
        render={({ field: { onChange, value } }) => (
          <OnaTextInputField
            placeholder={t("onboarding.measures.height")}
            value={value?.toString() ?? ""}
            onChangeText={onChange}
            error={errors.weight?.message}
            backgroundColor={theme.backgroundElement}
            numeric
          />
        )}
      />
    </View>
  );
}
