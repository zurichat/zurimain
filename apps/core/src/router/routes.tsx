import { RouteObject } from "react-router-dom";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import HelpPage from "../pages/help";
import HomePage from "../pages/home";
import PluginsPage from "../pages/plugins";
import PrivacyPage from "../pages/privacy-policy"

export function getExternalRoutes(): RouteObject[] {
  return [
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "/plugins", element: <PluginsPage /> },
    { path: "/help", element: <HelpPage /> },
    { path: "/privacy-policy", element: <PrivacyPage /> }
    // add new external routes here
  ];
}
