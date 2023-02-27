import { Layout as Mainlayout, LoginWrapper } from "@zuri/ui";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error/error";
import LoginPage from "../pages/onboarding/LoginPage";
import SignUpPage from "../pages/onboarding/Register";
import WorkspaceLogin from "../pages/onboarding/WorkspaceLogin";
import { getExternalRoutes } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <ErrorPage />,
    children: getExternalRoutes()
  },
  {
    path: "login",
    element: <LoginWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LoginPage />
      }
    ]
  },
  {
    path: "signup",
    element: <LoginWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SignUpPage />
      }
    ]
  },
  {
    path: "workspace",
    element: <LoginWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <WorkspaceLogin />
      }
    ]
  }
]);

export default router;
