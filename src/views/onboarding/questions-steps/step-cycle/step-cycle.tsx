import OnaTextInputField from "@/components/forms/ona-text-input-field/ona-text-input-field";
import { useTheme } from "@/hooks/use-theme";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import onboardingCycleStepSchema, {
  OnboardingCycleStepFormData,
} from "./step-cycle-schema";

import OnaDateInputField from "@/components/forms/ona-date-input-field/ona-date-input-field";
import { View } from "react-native";

export default function StepCycle() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OnboardingCycleStepFormData>({
    resolver: zodResolver(onboardingCycleStepSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <View>
      <Controller
        control={control}
        name="conditions"
        render={({ field: { onChange, value } }) => (
          <OnaTextInputField
            placeholder={t("onboarding.cycle.conditions")}
            value={value}
            onChangeText={onChange}
            error={errors.conditions?.message}
            backgroundColor={theme.backgroundElement}
          />
        )}
      />

      <Controller
        control={control}
        name="cycleLength"
        render={({ field: { onChange, value } }) => (
          <OnaTextInputField
            placeholder={t("onboarding.cycle.cycleLength")}
            value={value?.toString() ?? ""}
            onChangeText={onChange}
            error={errors.cycleLength?.message}
            backgroundColor={theme.backgroundElement}
            numeric
          />
        )}
      />

      <Controller
        control={control}
        name="lastPeriod"
        render={({ field: { onChange, value } }) => (
          <OnaDateInputField
            label={t("onboarding.cycle.lastPeriod")}
            value={value}
            onChange={onChange}
            error={errors.lastPeriod?.message}
            backgroundColor={theme.backgroundElement}
          />
        )}
      />
    </View>
  );
}
