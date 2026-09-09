import { useTheme } from "@/hooks/use-theme";
import { Dimensions, StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export const WAVE_TOP_HEIGHT = 200;
export const WAVE_BOTTOM_HEIGHT = 170;

export default function WaveBackground() {
  const theme = useTheme();

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <Svg
        width={SCREEN_WIDTH}
        height={WAVE_TOP_HEIGHT}
        viewBox={`0 0 ${SCREEN_WIDTH} ${WAVE_TOP_HEIGHT}`}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <Path
          d={`
            M0,0
            L0,${WAVE_TOP_HEIGHT * 0.55}
            C ${SCREEN_WIDTH * 0.3},${WAVE_TOP_HEIGHT * 0.85}
              ${SCREEN_WIDTH * 0.7},${WAVE_TOP_HEIGHT * 0.35} 
              ${SCREEN_WIDTH},${WAVE_TOP_HEIGHT * 0.6}
            L${SCREEN_WIDTH},0
            Z
          `}
          fill={theme.borderBackground}
        />
      </Svg>

      <Svg
        width={SCREEN_WIDTH}
        height={WAVE_BOTTOM_HEIGHT}
        viewBox={`0 0 ${SCREEN_WIDTH} ${WAVE_BOTTOM_HEIGHT}`}
        style={{ position: "absolute", bottom: 0, left: 0 }}
      >
        <Path
          d={`
            M0,${WAVE_BOTTOM_HEIGHT}
            L0,${WAVE_BOTTOM_HEIGHT * 0.4}
            C ${SCREEN_WIDTH * 0.18},${WAVE_BOTTOM_HEIGHT * 0.25}
              ${SCREEN_WIDTH * 0.32},${WAVE_BOTTOM_HEIGHT * 0.2}
              ${SCREEN_WIDTH * 0.5},${WAVE_BOTTOM_HEIGHT * 0.4}
            C ${SCREEN_WIDTH * 0.68},${WAVE_BOTTOM_HEIGHT * 0.6}
              ${SCREEN_WIDTH * 0.82},${WAVE_BOTTOM_HEIGHT * 0.2}
              ${SCREEN_WIDTH},${WAVE_BOTTOM_HEIGHT * 0.4}
            L${SCREEN_WIDTH},${WAVE_BOTTOM_HEIGHT}
            Z
          `}
          fill={theme.borderBackground}
        />
      </Svg>
    </View>
  );
}
