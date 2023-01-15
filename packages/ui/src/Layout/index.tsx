import { AppShell, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { withMantine } from "../Wrappers/Mantine";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
  hideSideBar?: boolean;
}
export const Layout = withMantine<LayoutProps>(
  ({ children, hideHeader = false, hideSideBar = false }) => {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

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
          hideHeader ? <></> : <Header opened={opened} onOpen={setOpened} />
        }
        navbar={hideSideBar ? <></> : <Sidebar opened={opened} />}
      >
        {children}
      </AppShell>
    );
  }
);

export default Layout;
