import { RouteObject } from "react-router-dom";
import { ContactPage } from "../pages";
import AboutPage from "../pages/about";
import HelpPage from "../pages/help/contact";
import HomePage from "../pages/home";
import PluginsPage from "../pages/plugins";

export function getExternalRoutes(): RouteObject[] {
  return [
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "/plugins", element: <PluginsPage /> },
    { path: "/help", element: <HelpPage /> }
    // add new external routes here
  ];
}
