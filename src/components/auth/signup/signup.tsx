import SignUpRequest from "@/api/auth/signup";
import OnaButton from "@/components/ui/forms/ona-button/ona-button";
import { useTheme } from "@/hooks/use-theme";
import { getFramedStyle } from "@/style/frames";
import { ThemedText } from "@/style/theme/themed-text";
import { ThemedView } from "@/style/theme/themed-view";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Pressable, View } from "react-native";
import OnaTextInputField from "../../ui/forms/ona-text-input-field/ona-text-input-field";
import { SignUpProps } from "./signup-props";
import signUpSchema, { SignUpFormData } from "./signup-schema";

export default function SignUp({ width }: SignUpProps) {
  const theme = useTheme();    
  const framedStyle = getFramedStyle(theme);

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
      <ThemedText type="title" style={{ textAlign: "center",  color: theme.text }}>{t("signup.title")}</ThemedText>

        <View style={[framedStyle.panel, { padding: 15, marginTop: 15 }]}>
      
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
              placeholder={t("signup.verifyPassword")}
              value={value}
              onChangeText={onChange}
              secureTextEntry
              error={errors.verify_password?.message}
              backgroundColor={theme.backgroundElement}
            />
          )}
        />

        <OnaButton title={t("signup.submit")} onPress={handleSubmit(onSubmit)} />

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10,  backgroundColor: 'transparent' }}>
          <ThemedText>
            {t("signup.isUser")}
          </ThemedText>
          
          <Pressable onPress={onLoginPress}>
            <ThemedText style={{ color: theme.link, marginLeft: 4 }}>
              {t("signup.login")}
            </ThemedText>
          </Pressable>
        </View>

        {!errors.verify_password && loginError && (
          <ThemedText style={{ color: theme.error ,  textAlign: 'center', marginBottom: 10}}>
            {loginError}
          </ThemedText>
        )}
      </View>

    </ThemedView>
  );
}