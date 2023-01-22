import { MantineTheme } from "@mantine/core";
// eslint-disable-next-line @typescript-eslint/ban-types
export type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;

export const mantineConfig: DeepPartial<MantineTheme> = {
  colorScheme: "light",
  colors:{
    brand:[
    "#d9e1e8","#b9c8d4","#91a9bc","#7c98af","#5f819d","#466d8d","#2b587d","#194a72","#0f3555",'#14466F']
  },
  primaryColor:"brand"
};
export default mantineConfig;
