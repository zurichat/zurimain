import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ContactPage, ErrorPage } from "../pages";

// Onboarding Pages
import LoginPage from "../pages/onboarding/LoginPage";
import SignUpPage from "../pages/onboarding/Register";
import WorkspaceLogin from "../pages/onboarding/WorkspaceLogin/index";

// Login pages layout
import { LoginWrapper } from "@zuri/ui";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div>Home</div>
      },
      {
        path: "/contact",
        element: <ContactPage />
      }
    ]
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
