export const lightColors = {
  background: "#F8F4E8",
  altBackground: "#F5E9DC",
  backgroundElement: "#FFFFFF",

  borderBackground: "#947C76",
  border: "#300303",
  text: "#300303",
  counterText: "#FFFFFF",

  success: "#6FCF97",
  error: "#C75C4A",
  link: "#7C9473",
};

export type ThemeColors = typeof lightColors;
export type ThemeColor = keyof ThemeColors;

export const darkColors: ThemeColors = {
  border: "#FEFEE7",
  background: "#300303",
  altBackground: "#4c1a1a",
  backgroundElement: "#4c1a1a",
  borderBackground: "#F8F4E8",
  text: "#FEFEE7",
  counterText: "#300303",

  success: "#6FCF97",
  error: "#FF6B6B",
  link: "#7C9473",
};
