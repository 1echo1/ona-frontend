import LoginRequest from "@/api/auth/login";
import OnaButton from "@/components/ui/ona-button";
import { useAuth } from "@/context/auth/authProvider";
import { useTheme } from "@/hooks/use-theme";
import { ThemedText } from "@/style/theme/themed-text";
import { ThemedView } from "@/style/theme/themed-view";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Pressable } from "react-native";
import OnaTextInputField from "../../ui/forms/ona-text-input-field/ona-text-input-field";
import { LoginProps } from "./login-props";
import loginSchema, { LoginFormData } from "./login-schema";

export default function Login({ width }: LoginProps) {
  const theme = useTheme();    
  const { setAuth } = useAuth();
  
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
  const [loginError, setLoginError] = useState<string | null>(null);

  const onSubmit = async (data: LoginFormData) => {
    setLoginError(null);
    const result = await LoginRequest(data.email, data.password);

    if (result.success) {
      setAuth({ token: result.data.access_token, user: data.email, user_id: "" });
      router.replace('/');
    } else {
      setLoginError(t(`login.errors.${result.errorCode}`));
    }
  };

  const onForgotPassword = () => {
    console.log("Forgot password");
  }

  const onSignUp = () => { 
    router.replace("/auth/signup");
  }

  return (
    <ThemedView style={{ width: width}}>
      <ThemedText type="title" style={{ textAlign: "center", color: theme.text,}}>
        {t("login.title")}
      </ThemedText>

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


      < OnaButton title={t("login.submit")} onPress={handleSubmit(onSubmit)} />

      <ThemedView style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
        <ThemedText>
          {t("login.newUser")}
        </ThemedText>

        <Pressable onPress={onSignUp}>
          <ThemedText style={{color: theme.link, marginLeft: 4 }}>
            {t("login.signUp")}
          </ThemedText>
        </Pressable>
      </ThemedView>
      
      {loginError && (
        <ThemedText style={{ color: 'red', textAlign: 'center', marginBottom: 10 }}>
          {loginError}
        </ThemedText>
      )}
    </ThemedView>
  );
}