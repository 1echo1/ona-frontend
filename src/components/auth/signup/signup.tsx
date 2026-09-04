import SignUpRequest from "@/api/auth/signup";
import { useTheme } from "@/hooks/use-theme";
import { ThemedText } from "@/style/theme/themed-text";
import { ThemedView } from "@/style/theme/themed-view";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button, Pressable } from "react-native";
import OnaTextInputField from "../../ui/forms/ona-text-input-field/ona-text-input-field";
import { SignUpProps } from "./signup-props";
import signUpSchema, { SignUpFormData } from "./signup-schema";

export default function SignUp({ width }: SignUpProps) {
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { t } = useTranslation();
  const [loginError, setLoginError] = useState<string | null>(null);

  const onSubmit = async (data: SignUpFormData) => {
     setLoginError(null);
     const result = await SignUpRequest(data.email, data.password);
 
     if (result.success) {
       router.replace('/auth/login');
     } else {
       setLoginError(t(`login.errors.${result.errorCode}`));
     }
  };

  const onLoginPress = () => { 
    router.replace("/auth/login");
  }

  return (
    <ThemedView style={{ width: width}}>
      <ThemedText style={{ textAlign: "center" }}>{t("signup.title")}</ThemedText>

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <OnaTextInputField
            placeholder={t("signup.email")}
            value={value}
            onChangeText={onChange}
            error={errors.email?.message}
            backgroundColor={theme.backgroundElement}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <OnaTextInputField
            placeholder={t("signup.password")}
            value={value}
            onChangeText={onChange}
            secureTextEntry
            error={errors.password?.message}
            backgroundColor={theme.backgroundElement}

          />
        )}
      />

      <Controller
        control={control}
        name="verify_password"
        render={({ field: { onChange, value } }) => (
          <OnaTextInputField
            placeholder={t("signup.verify_password")}
            value={value}
            onChangeText={onChange}
            secureTextEntry
            error={errors.verify_password?.message}
            backgroundColor={theme.backgroundElement}
          />
        )}
      />

      <Button title={t("signup.submit")} onPress={handleSubmit(onSubmit)} />

      <ThemedView style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
        <ThemedText style={{}}>
          {t("signup.isUser")}
        </ThemedText>
        <Pressable onPress={onLoginPress}>
          <ThemedText style={{ color: '#3C9FFE', marginLeft: 4 }}>
            {t("signup.login")}
          </ThemedText>
        </Pressable>
      </ThemedView>

      {!errors.verify_password && loginError && (
        <ThemedText style={{ color: 'red' }}>{loginError}</ThemedText>
      )}

    </ThemedView>
  );
}