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
      "#FBBB6A", //primary 0
      "#FDCB8C", //primary 1
      "#FCDAB0", //primary 2
      "#FBE9D2", //primary 3
      "#FCF7F1", //primary 4
      "#F9DBB6" //primary 5
    ],
    orange: ["#F24F4F"],
    text: ["#626769", "#373B3D", "#B5BEC1", "#1E2122"],
    border: ["#14466F"]
  },
  primaryColor: "primary"
};
export default mantineConfig;
