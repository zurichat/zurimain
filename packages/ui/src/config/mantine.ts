import { MantineThemeOverride } from "@mantine/core";

import { Tuple, DefaultMantineColor } from "@mantine/core";

type ExtendedCustomColors = "primary" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}

export const mantineConfig: Partial<MantineThemeOverride> = {
  fontFamily: "Lato",
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
    ]
  },
  primaryColor: "primary"
};
export default mantineConfig;
