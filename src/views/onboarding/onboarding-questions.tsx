import OnaButton from "@/components/forms/ona-button/ona-button";
import Card from "@/components/panel/panel";
import { useTheme } from "@/hooks/use-theme";
import { ThemedView } from "@/style/theme/themed-view";
import { borders } from "@/style/tokens";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LayoutChangeEvent, View } from "react-native";
import * as Progress from "react-native-progress";
import { OnboardingQuestionsProps } from "./onboarding-questions-props";
import StepGeneral from "./questions-steps/step-general/step-general";
import { OnboardingGeneralStepFormData } from "./questions-steps/step-general/step-general-schema";
export default function OnboardingQuestions({
  width,
}: OnboardingQuestionsProps) {
  const { t } = useTranslation();
  const theme = useTheme();

  const [currentStep, setCurrentStep] = useState(0);

  const [containerWidth, setContainerWidth] = useState(0);
  const onLayout = (e: LayoutChangeEvent) => {
    setContainerWidth(e.nativeEvent.layout.width);
  };

  const onSubmit = async (data: OnboardingGeneralStepFormData) => {};

  return (
    <ThemedView style={{ width: width }} onLayout={onLayout}>
      {containerWidth > 0 && (
        <View style={{ width: "100%", marginBottom: 40 }}>
          <Progress.Bar
            progress={0.6}
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
      <Card title="Tell us about...">
        <StepGeneral></StepGeneral>
      </Card>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <OnaButton title="Previous" width="80%" />
        </View>

        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <OnaButton title="Next" width="80%" />
        </View>
      </View>
    </ThemedView>
  );
}
