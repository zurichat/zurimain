import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ContactPage, ErrorPage } from "../pages";

// Onboarding
import Login from "../pages/onboarding/Login";
import WorkspaceLogin from "../pages/onboarding/WorkspaceLogin";

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
    element: <Login />
  },
  {
    path: "/workspace-login",
    element: <WorkspaceLogin />
  }
]);

export default router;
