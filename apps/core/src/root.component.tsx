import { MantineProvider } from "@mantine/core";
import { mantineConfig } from "@zuri/ui";
import App from "./App";

export default function Root() {
  return (
    <MantineProvider theme={mantineConfig} withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  );
}
