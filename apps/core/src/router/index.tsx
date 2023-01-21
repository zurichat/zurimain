import { Layout } from "@zuri/ui";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages";
import { getExternalRoutes, getWorkspaceRoutes } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout hideSideBar />,
    errorElement: <ErrorPage />,
    children: getExternalRoutes()
  },
  {
    path: "/workspace",
    element: <div>Workspace root layout</div>,
    errorElement: <div>Workspace root error layout</div>,
    children: getWorkspaceRoutes()
  }
]);

export default router;
