import { AppShell, Center, Loader, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useAppSelector } from "@zuri/utilities";
import { Outlet, useNavigation } from "react-router-dom";
import { withMantine } from "../Wrappers/Mantine";
import { Footer } from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

/**
 * This layout expects to be wrapped in a react redux provider
 * The store is found in the zuri utilities export
 */
export const Layout = withMantine(() => {
  const navigation = useNavigation();
  const theme = useMantineTheme();

  const { headerVisible, sideBarVisible, footerVisible } = useAppSelector(
    ({ ui }) => {
      return {
        headerVisible: ui.headerVisible,
        sideBarVisible: ui.sideBarVisible,
        footerVisible: ui.footerVisible
      };
    }
  );

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <AppShell
      styles={{
        main: {
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 0,
          overflowX: "hidden",
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.white
        }
      }}
      navbarOffsetBreakpoint={0}
      header={
        headerVisible ? (
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
        <>
          <Outlet />
          {footerVisible ? <Footer /> : <></>}
        </>
      )}
    </AppShell>
  );
});

export default Layout;
