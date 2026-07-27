import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useTheme } from "@/hooks/use-theme";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button, Pressable } from "react-native";
import OnaTextInputField from "../../ui/forms/ona-text-input-field/ona-text-input-field";
import { LoginProps } from "./login-props";
import loginSchema, { LoginFormData } from "./login-schema";


export default function Login({ width }: LoginProps) {
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const { t } = useTranslation();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  const onForgotPassword = () => {
    console.log("Forgot password");
  }

  const onSignUp = () => { 
    router.replace("/auth/signup");
  }

  return (
    <ThemedView style={{ width: width}}>
      <ThemedText style={{ textAlign: "center" }}>{t("login.title")}</ThemedText>

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <OnaTextInputField
            placeholder={t("login.email")}
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
            placeholder={t("login.password")}
            value={value}
            onChangeText={onChange}
            secureTextEntry
            error={errors.password?.message}
            backgroundColor={theme.backgroundElement}
          />
        )}
      />

      <Pressable onPress={onForgotPassword}>
        <ThemedText style={{ textAlign: "right", marginBottom: 10 }}>
          {t("login.forgotPassword")}
        </ThemedText>
      </Pressable>

      <Button title={t("login.submit")} onPress={handleSubmit(onSubmit)} />

      <ThemedView style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
        <ThemedText>
          {t("login.newUser")}
        </ThemedText>
        <Pressable onPress={onSignUp}>
          <ThemedText style={{ color: '#3C9FFE', marginLeft: 4 }}>
            {t("login.signUp")}
          </ThemedText>
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
}