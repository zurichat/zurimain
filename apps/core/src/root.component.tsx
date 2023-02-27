import { MantineProvider } from "@mantine/core";
import { mantineConfig } from "@zuri/ui";
import { store } from "@zuri/utilities";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function Root() {
  return (
    <MantineProvider theme={mantineConfig} withGlobalStyles withNormalizeCSS>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </MantineProvider>
  );
}
