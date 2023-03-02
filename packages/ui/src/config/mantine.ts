import type {
  Tuple,
  DefaultMantineColor,
  MantineThemeOverride
} from "@mantine/core";

type ExtendedCustomColors = "primary" | DefaultMantineColor;

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
      "#CEFFEF",
      "#71B7A0",
      "#55B898",
      "#3CB990",
      "#28B788",
      "#14B681",
      "#00B87C",
      "#11956A",
      "#1B7A5B",
      "#21654F"
    ],
    secondary: [
      "#FBBB6A", //primary 1
      "#FDCB8C", //primary 2
      "#FCDAB0", //primary 3
      "#FBE9D2", //primary 4
      "#FCF7F1",
      "#14466F",
      "#C3DFF6",
      "#626769",
      "#5DA7E3",
      "#4978F0"
    ],
    tertiary: ["#94C8F3"]
  },
  primaryColor: "primary"
};
export default mantineConfig;
