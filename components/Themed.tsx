import * as React from "react";
import { Text as DefaultText, View as DefaultView } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type FontWeightProps = {
  weight?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5";
};

export type TextProps = FontWeightProps & ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  let fontSize = 14;
  let fontFamily:
    | "sora-bold"
    | "sora-extra-bold"
    | "sora-extra-light"
    | "sora-light"
    | "sora-medium"
    | "sora-regular"
    | "sora-semi-bold"
    | "sora-thin" = "sora-regular";

  switch (props.weight) {
    case "normal":
      fontSize = 12;
      break;
    case "h1":
      fontSize = 24;
      break;
    case "h2":
      fontSize = 24;
      fontFamily = "sora-semi-bold";
      break;
    case "h3":
      fontSize = 18;
      break;
    case "h4":
      fontSize = 16;
      break;
    case "h5":
      fontSize = 16;
      fontFamily = "sora-semi-bold";

      break;
    default:
      fontSize = 12;
  }

  return (
    <DefaultText
      style={[{ fontSize, fontFamily }, { color }, style]}
      {...otherProps}
    />
  );
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={style} {...otherProps} />;
}
