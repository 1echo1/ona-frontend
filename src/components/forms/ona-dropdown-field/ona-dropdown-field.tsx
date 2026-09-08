// ona-dropdown-field.tsx
import { useTheme } from "@/hooks/use-theme";
import { getFramedStyle } from "@/style/frames";
import { ThemedText } from "@/style/theme/themed-text";
import { ThemedView } from "@/style/theme/themed-view";
import { textSizes } from "@/style/tokens";
import { useRef, useState } from "react";
import { Dimensions, Modal, Pressable, ScrollView, View } from "react-native";
import { OnaDropdownFieldProps } from "./ona-dropdown-field-props";

const MAX_LIST_HEIGHT = 220;
const OPTION_HEIGHT = 44;

export default function OnaDropdownField<T extends string = string>({
  label,
  description,
  placeholder,
  disabled,
  value,
  onChange,
  options,
  compensateDescription,
  error,
  backgroundColor,
  width,
}: OnaDropdownFieldProps<T>) {
  const theme = useTheme();
  const framedStyle = getFramedStyle(theme);
  const triggerRef = useRef<View>(null);

  const [visible, setVisible] = useState(false);
  const [layout, setLayout] = useState<{
    top: number;
    left: number;
    width: number;
    openUp: boolean;
  } | null>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  const openDropdown = () => {
    if (disabled) return;
    triggerRef.current?.measureInWindow((x, y, w, h) => {
      const screenHeight = Dimensions.get("window").height;
      const listHeight = Math.min(
        MAX_LIST_HEIGHT,
        options.length * OPTION_HEIGHT + 16,
      );
      const spaceBelow = screenHeight - (y + h);
      const openUp = spaceBelow < listHeight && y > listHeight;

      setLayout({
        top: openUp ? y - listHeight - 6 : y + h + 6,
        left: x,
        width: w,
        openUp,
      });
      setVisible(true);
    });
  };

  const selectOption = (optionValue: T) => {
    onChange?.(optionValue);
    setVisible(false);
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

      <Pressable
        ref={triggerRef}
        disabled={disabled}
        onPress={openDropdown}
        style={[
          framedStyle.outer,
          compensateDescription && !description ? { marginTop: 24 } : undefined,
        ]}
      >
        <View style={framedStyle.bevelDark}>
          <View style={framedStyle.bevelLight}>
            <View
              style={{
                padding: 12,
                backgroundColor: backgroundColor ?? theme.backgroundElement,
                borderRadius: 12,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ThemedText
                style={{
                  fontSize: textSizes.medium,
                  color: selectedOption ? theme.text : theme.text + "80",
                }}
              >
                {selectedOption ? selectedOption.label : placeholder}
              </ThemedText>
              <ThemedText style={{ color: theme.text, fontSize: 17 }}>
                {visible ? "▲" : "▼"}
              </ThemedText>
            </View>
          </View>
        </View>
      </Pressable>

      {error && <ThemedText style={{ color: theme.error }}>{error}</ThemedText>}

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <Pressable style={{ flex: 1 }} onPress={() => setVisible(false)}>
          {layout && (
            <View
              style={[
                framedStyle.panel,
                {
                  position: "absolute",
                  top: layout.top,
                  left: layout.left,
                  width: layout.width,
                  padding: 6,
                  maxHeight: MAX_LIST_HEIGHT,
                },
              ]}
            >
              <ScrollView bounces={false}>
                {options.map((option) => {
                  const isSelected = option.value === value;
                  return (
                    <Pressable
                      key={option.value}
                      onPress={() => selectOption(option.value)}
                      style={{
                        paddingVertical: 11,
                        paddingHorizontal: 12,
                        borderRadius: 10,
                        backgroundColor: isSelected
                          ? theme.borderBackground
                          : "transparent",
                      }}
                    >
                      <ThemedText
                        style={{
                          fontSize: textSizes.medium,
                          color: isSelected ? theme.background : theme.text,
                          fontWeight: isSelected ? "600" : "400",
                        }}
                      >
                        {option.label}
                      </ThemedText>
                    </Pressable>
                  );
                })}
              </ScrollView>
            </View>
          )}
        </Pressable>
      </Modal>
    </ThemedView>
  );
}
