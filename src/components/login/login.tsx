import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button, Pressable, Text, View } from "react-native";
import OnaTextInputField from "./../forms/ona-text-input-field";
import { LoginProps } from "./login-props";
import loginSchema, { LoginFormData } from "./login-schema";

export default function Login({ width }: LoginProps) {

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
    <View style={{ width: width}}>
      <Text style={{ textAlign: "center" }}>{t("login.title")}</Text>

      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value } }) => (
          <OnaTextInputField
            placeholder={t("login.username")}
            value={value}
            onChangeText={onChange}
            error={errors.username?.message}
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
          />
        )}
      />

      <Pressable onPress={onForgotPassword}>
        <Text style={{ textAlign: "right", marginBottom: 10 }}>
          {t("login.forgotPassword")}
        </Text>
      </Pressable>

      <Button title={t("login.submit")} onPress={handleSubmit(onSubmit)} />

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
        <Text style={{}}>
          {t("login.newUser")}
        </Text>
        <Pressable onPress={onSignUp}>
          <Text style={{ color: '#3C9FFE', marginLeft: 4 }}>
            {t("login.signUp")}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}