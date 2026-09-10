import { useTheme } from "@/hooks/use-theme";
import { getFramedStyle } from "@/style/frames";
import { ThemedText } from "@/style/theme/themed-text";
import { ThemedTextInput } from "@/style/theme/themed-text-input";
import { ThemedView } from "@/style/theme/themed-view";
import { textSizes } from "@/style/tokens";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import {
  DatePart,
  OnaDate,
  OnaDateInputFieldProps,
} from "./ona-date-input-field-props";

function parsePart(text: string): number | undefined {
  const cleaned = text.replace(/[^0-9]/g, "");
  return cleaned === "" ? undefined : Number(cleaned);
}

const DATE_PARTS: DatePart[] = [
  { key: "day", labelKey: "DD", width: "23%" },
  { key: "month", labelKey: "MM", width: "23%" },
  { key: "year", labelKey: "YYYY", width: "43%" },
];

export default function OnaDateInputField({
  label,
  description,
  disabled,
  value,
  onChange,
  compensateDescription,
  error,
  backgroundColor,
  width,
}: OnaDateInputFieldProps) {
  const theme = useTheme();
  const framedStyle = getFramedStyle(theme);
  const { t } = useTranslation();

  const update = (part: Partial<OnaDate>) => {
    onChange?.({ ...value, ...part });
  };

  return (
    <ThemedView
      style={{
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "transparent",
        width: width,
      }}
    >
      {label && <ThemedText>{label}</ThemedText>}
      {description && <ThemedText>{description}</ThemedText>}

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {DATE_PARTS.map(({ key, labelKey, width: partWidth }) => (
          <View key={key} style={[framedStyle.outer, { width: partWidth }]}>
            <View style={framedStyle.bevelDark}>
              <View style={framedStyle.bevelLight}>
                <ThemedTextInput
                  keyboardType="number-pad"
                  editable={!disabled}
                  placeholder={t(labelKey)}
                  value={value?.[key]?.toString() ?? ""}
                  onChangeText={(text) => update({ [key]: parsePart(text) })}
                  placeholderTextColor={theme.text + "80"}
                  style={[
                    { padding: 12 },
                    compensateDescription && !description
                      ? { marginTop: 24 }
                      : undefined,
                    {
                      color: theme.text,
                      backgroundColor: theme.backgroundElement,
                      fontSize: textSizes.medium,
                      borderRadius: 12,
                      textAlignVertical: "center",
                    },
                  ]}
                />
              </View>
            </View>
          </View>
        ))}
      </View>

      {error && <ThemedText style={{ color: theme.error }}>{error}</ThemedText>}
    </ThemedView>
  );
}
