import { Layout } from "@zuri/ui";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages";
import { getExternalRoutes } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout hideSideBar />,
    errorElement: <ErrorPage />,
    children: getExternalRoutes()
  }
]);

export default router;
