export const lightColors = {
  background: '#FEFEE7',
  altBackground: '#FBEFC6',
  backgroundElement: '#FFFFFF',

  border: '#5C2A1E',
  text: '#3D1B12',

  success: '#6FCF97',
  error: '#C75C4A',
  link: '#4A7A9E',
};

export type ThemeColors = typeof lightColors;
export type ThemeColor = keyof ThemeColors;

export const darkColors : ThemeColors = {
  border: '#FEFEE7',
  background: '#300303',
  altBackground: '#4c1a1a',
  backgroundElement: '#4c1a1a',
  text: '#FEFEE7',
  success: '#6FCF97',
  error: '#FF6B6B',
  link: '#1E90FF',
};

