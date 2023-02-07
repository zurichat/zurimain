import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ContactPage, ErrorPage } from "../pages";
import PrivacyPage from "../pages/privacy-policy"

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
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPage />
      }
    ]
  }
]);

export default router;
