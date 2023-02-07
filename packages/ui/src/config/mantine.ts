import { MantineThemeOverride, Tuple, DefaultMantineColor } from "@mantine/core";

type ExtendedCustomColors = 'primary' | 'secondary' | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}

export const mantineConfig: Partial<MantineThemeOverride> = {
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
    secondary:[
      "#FBBB6A",//primary 1
      "#FDCB8C",//primary 2
      "#FCDAB0",//primary 3
      "#FBE9D2",//primary 4
      "#FCF7F1", //primary 5
      "#F24F4F", //
    ],
    orange: [
      "#F24F4F"
    ]
  },
  primaryColor: "primary",
};
export default mantineConfig;
