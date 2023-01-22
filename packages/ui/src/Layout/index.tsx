import { AppShell, Center, Loader, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet, useNavigation } from "react-router-dom";
import { withMantine } from "../Wrappers/Mantine";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  hideHeader?: boolean;
  hideSideBar?: boolean;
}
export const Layout = withMantine<LayoutProps>(
  ({ hideHeader = false, hideSideBar = false }) => {
    const navigation = useNavigation();
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
                { link: "/pricing", label: "Pricing" },
                { link: "/about", label: "About ZuriChat" },
                { link: "/downloads", label: "Downloads" },
                { link: "/contact", label: "Contact Us" }
              ]}
            />
          )
        }
        navbar={hideSideBar ? <></> : <Sidebar opened={drawerOpened} />}
      >
        {navigation.state === "loading" ? (
          <Center style={{ height: "100%" }}>
            <Loader size="xl" />
          </Center>
        ) : (
          <Outlet />
        )}
      </AppShell>
    );
  }
);

export default Layout;
