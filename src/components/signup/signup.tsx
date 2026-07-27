import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button, Pressable, Text, View } from "react-native";
import OnaTextInputField from "../forms/ona-text-input-field";
import { SignUpProps } from "./signup-props";
import signUpSchema, { SignUpFormData } from "./signup-schema";

export default function SignUp({ width }: SignUpProps) {

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

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };



  const onLoginPress = () => { 
    router.replace("/auth/login");
  }

  return (
    <View style={{ width: width}}>
      <Text style={{ textAlign: "center" }}>{t("signup.title")}</Text>

      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value } }) => (
          <OnaTextInputField
            placeholder={t("signup.username")}
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
            placeholder={t("signup.password")}
            value={value}
            onChangeText={onChange}
            secureTextEntry
            error={errors.password?.message}
          />
        )}
      />

      <Button title={t("signup.submit")} onPress={handleSubmit(onSubmit)} />

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
        <Text style={{}}>
          {t("signup.isUser")}
        </Text>
        <Pressable onPress={onLoginPress}>
          <Text style={{ color: '#3C9FFE', marginLeft: 4 }}>
            {t("signup.login")}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}