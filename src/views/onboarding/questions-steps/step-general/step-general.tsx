import OnaTextInputField from "@/components/forms/ona-text-input-field/ona-text-input-field";
import { useTheme } from "@/hooks/use-theme";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import onboardingGeneralStepSchema, {
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
    resolver: zodResolver(onboardingGeneralStepSchema),
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
            placeholder={t("onboarding.general.name")}
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
            label={t("onboarding.general.birthDate")}
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
            value={value}
            placeholder={t("onboarding.general.sex")}
            onChange={onChange}
            error={errors.sex?.message}
            options={[
              { label: t("constants.sex.male"), value: Sex.MALE.toString() },
              {
                label: t("constants.sex.female"),
                value: Sex.FEMALE.toString(),
              },
            ]}
          />
        )}
      />
    </View>
  );
}
