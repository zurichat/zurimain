import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ContactPage, ErrorPage } from "../pages";

// Onboarding
import Login from "../pages/onboarding/Login";
import WorkspaceLogin from "../pages/onboarding/WorkspaceLogin";
import LoginLayout from "../pages/onboarding/components/LoginLayout";

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
    path: "/login",
    element: <LoginLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: "workspace",
        element: <WorkspaceLogin />
      },
    ]
  },
  
]);

export default router;
