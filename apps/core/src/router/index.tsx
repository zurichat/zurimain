import { Layout as Mainlayout, LoginWrapper } from "@zuri/ui";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error";
import LoginPage from "../pages/login";
import SignUpPage from "../pages/signup";
import AlternativeSignup from "../pages/alternativeSignup";
import WorkspaceLogin from "../pages/workspace";
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
  },
  {
    path: "alternative-signup",
    element: <LoginWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AlternativeSignup />
      }
    ]
  }
]);

export default router;
