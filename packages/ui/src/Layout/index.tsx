import { AppShell, Center, Loader, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useAppSelector } from "@zuri/utilities";
import { Outlet, useNavigation } from "react-router-dom";
import { withMantine } from "../Wrappers/Mantine";
import Header from "./Header";
import Sidebar from "./Sidebar";

/**
 * This layout expects to be wrapped in a react redux provider
 * The store is found in the zuri utilities export
 */
export const Layout = withMantine(() => {
  const navigation = useNavigation();
  const theme = useMantineTheme();

  const { headerVisible, sideBarVisible } = useAppSelector(({ ui }) => {
    return {
      headerVisible: ui.headerVisible,
      sideBarVisible: ui.sideBarVisible
    };
  });

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
        headerVisible ? (
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
        ) : (
          <></>
        )
      }
      navbar={sideBarVisible ? <Sidebar opened={drawerOpened} /> : <></>}
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
});

export default Layout;
