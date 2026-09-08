import OnaTextInputField from "@/components/forms/ona-text-input-field/ona-text-input-field";
import { useTheme } from "@/hooks/use-theme";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import onboardinGeneralStepSchema, {
  OnboardingGeneralStepFormData,
} from "./step-general-schema";

import OnaDateInputField from "@/components/forms/ona-date-input-field/ona-date-input-field";
import OnaDropdownField from "@/components/forms/ona-dropdown-field/ona-dropdown-field";
import { Sex } from "@/constants/sex";
import { View } from "react-native";
export default function StepGeneral() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OnboardingGeneralStepFormData>({
    resolver: zodResolver(onboardinGeneralStepSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <View>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <OnaTextInputField
            label="Name"
            placeholder={t("onboarding.name")}
            value={value}
            onChangeText={onChange}
            error={errors.name?.message}
            backgroundColor={theme.backgroundElement}
          />
        )}
      />

      <Controller
        control={control}
        name="dateOfBirth"
        render={({ field: { onChange, value } }) => (
          <OnaDateInputField
            label="Date of Birth"
            value={value}
            onChange={onChange}
            error={errors.dateOfBirth?.message}
            backgroundColor={theme.backgroundElement}
          />
        )}
      />

      <Controller
        control={control}
        name="sex"
        render={({ field: { onChange, value } }) => (
          <OnaDropdownField
            label="Sex"
            value={value}
            placeholder={t("onboarding.sex")}
            onChange={onChange}
            error={errors.sex?.message}
            options={[
              { label: t("sex.male"), value: Sex.MALE.toString() },
              { label: t("sex.female"), value: Sex.FEMALE.toString() },
            ]}
          />
        )}
      />
    </View>
  );
}
