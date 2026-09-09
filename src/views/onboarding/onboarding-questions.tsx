import OnaButton from "@/components/forms/ona-button/ona-button";
import Card from "@/components/panel/panel";
import { useOnboardingSteps } from "@/hooks/use-onboarding-steps";
import { useTheme } from "@/hooks/use-theme";
import { ThemedView } from "@/style/theme/themed-view";
import { borders } from "@/style/tokens";
import { router } from "expo-router";
import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { LayoutChangeEvent, View } from "react-native";
import * as Progress from "react-native-progress";
import { OnboardingQuestionsProps } from "./onboarding-questions-props";

export default function OnboardingQuestions({
  width,
}: OnboardingQuestionsProps) {
  const { t } = useTranslation();
  const theme = useTheme();

  const {
    methods,
    currentStep,
    stepIndex,
    totalSteps,
    isFirstStep,
    isLastStep,
    isSubmitting,
    submitError,
    handleNext,
    handleBack,
  } = useOnboardingSteps();

  const CurrentStepComponent = currentStep.component;

  const [containerWidth, setContainerWidth] = useState(0);
  const onLayout = (e: LayoutChangeEvent) => {
    setContainerWidth(e.nativeEvent.layout.width);
  };

  const onNextPress = async () => {
    const success = await handleNext();
    if (success && isLastStep) {
      router.replace("/");
    }
  };

  return (
    <FormProvider {...methods}>
      <ThemedView style={{ width: width }} onLayout={onLayout}>
        {containerWidth > 0 && (
          <View style={{ width: "100%", marginBottom: 40 }}>
            <Progress.Bar
              progress={stepIndex / (totalSteps - 1)}
              width={containerWidth}
              color={theme.borderBackground}
              unfilledColor={theme.altBackground}
              borderColor={theme.border}
              borderWidth={borders.thick}
              height={10}
              borderRadius={10}
            />
          </View>
        )}
        <Card title={t("onboarding.title")}>
          <CurrentStepComponent />
        </Card>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            {!isFirstStep && (
              <OnaButton
                title={t("buttons.previous")}
                width="80%"
                onPress={handleBack}
              />
            )}
          </View>

          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <OnaButton
              title={isLastStep ? t("buttons.submit") : t("buttons.next")}
              width="80%"
              onPress={onNextPress}
            />
          </View>
        </View>
      </ThemedView>
    </FormProvider>
  );
}
