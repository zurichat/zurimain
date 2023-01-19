import { MantineProvider } from "@mantine/core";
import { mantineConfig } from "@zuri/ui";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";

export default function Root() {
  return (
    <MantineProvider theme={mantineConfig} withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
