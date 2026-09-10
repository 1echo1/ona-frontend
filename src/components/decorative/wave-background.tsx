import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import Svg, { Path } from "react-native-svg";

export const WAVE_TOP_HEIGHT_PERCENT = 0.22;
export const WAVE_BOTTOM_HEIGHT_PERCENT = 0.19;

export default function WaveBackground() {
  const theme = useTheme();
  const { width: rawWidth, height: rawHeight } = useWindowDimensions();

  // Round to whole pixels, and pad width slightly to eliminate rounding gaps at the edges
  const screenWidth = Math.ceil(rawWidth) + 2;
  const topHeight = Math.round(rawHeight * WAVE_TOP_HEIGHT_PERCENT);
  const bottomHeight = Math.round(rawHeight * WAVE_BOTTOM_HEIGHT_PERCENT);

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <Svg
        width={screenWidth}
        height={topHeight}
        viewBox={`0 0 ${screenWidth} ${topHeight}`}
        style={{ position: "absolute", top: 0, left: -1 }}
      >
        <Path
          d={`
            M0,0
            L0,${topHeight * 0.55}
            C ${screenWidth * 0.3},${topHeight * 0.85}
              ${screenWidth * 0.7},${topHeight * 0.35}
              ${screenWidth},${topHeight * 0.6}
            L${screenWidth},0
            Z
          `}
          fill={theme.borderBackground}
        />
      </Svg>

      <Svg
        width={screenWidth}
        height={bottomHeight}
        viewBox={`0 0 ${screenWidth} ${bottomHeight}`}
        style={{ position: "absolute", bottom: 0, left: -1 }}
      >
        <Path
          d={`
            M0,${bottomHeight}
            L0,${bottomHeight * 0.4}
            C ${screenWidth * 0.18},${bottomHeight * 0.25}
              ${screenWidth * 0.32},${bottomHeight * 0.2}
              ${screenWidth * 0.5},${bottomHeight * 0.4}
            C ${screenWidth * 0.68},${bottomHeight * 0.6}
              ${screenWidth * 0.82},${bottomHeight * 0.2}
              ${screenWidth},${bottomHeight * 0.4}
            L${screenWidth},${bottomHeight}
            Z
          `}
          fill={theme.borderBackground}
        />
      </Svg>
    </View>
  );
}
