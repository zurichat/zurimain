import { AppShell, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import { withMantine } from "../Wrappers/Mantine";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  hideHeader?: boolean;
  hideSideBar?: boolean;
}
export const Layout = withMantine<LayoutProps>(
  ({ hideHeader = false, hideSideBar = false }) => {
    const theme = useMantineTheme();
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
      useDisclosure(false);

    return (
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0]
          }
        }}
        navbarOffsetBreakpoint="sm"
        header={
          hideHeader ? (
            <></>
          ) : (
            <Header
              drawerOpened={drawerOpened}
              toggleDrawer={toggleDrawer}
              closeDrawer={closeDrawer}
              links={[
                { link: "/downloads", label: "Downloads" },
                { link: "/documentation", label: "Documentation" },
                {
                  label: "About",
                  links: [{ link: "/contact", label: "Contact" }]
                }
              ]}
            />
          )
        }
        navbar={hideSideBar ? <></> : <Sidebar opened={drawerOpened} />}
      >
        <Outlet />
      </AppShell>
    );
  }
);

export default Layout;
