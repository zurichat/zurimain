import type {
  Tuple,
  DefaultMantineColor,
  MantineThemeOverride
} from "@mantine/core";

type ExtendedCustomColors = "primary" | "secondary" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}

export const mantineConfig: Partial<MantineThemeOverride> = {
  fontFamily: "Lato",
  headings: {
    fontFamily: "Lato"
  },
  colorScheme: "light",
  colors: {
    primary: [
      "#d9e1e8",
      "#b9c8d4",
      "#91a9bc",
      "#7c98af",
      "#5f819d",
      "#466d8d",
      "#2b587d",
      "#194a72",
      "#0f3555",
      "#14466F"
    ],
    secondary: [
      "#FBBB6A", //primary 1
      "#FDCB8C", //primary 2
      "#FCDAB0", //primary 3
      "#FBE9D2", //primary 4
      "#FCF7F1", //primary 5
      "#14466F", //primary 6
      "#C3DFF6", //primary 7
      "#626769", //primary 8
      "#5DA7E3", //primary 9
      "#4978F0" //primary 10
    ],
    tertiary: ["#94C8F3", "#1E2122"],
    orange: ["#F24F4F"]
  },
  primaryColor: "primary"
};
export default mantineConfig;
