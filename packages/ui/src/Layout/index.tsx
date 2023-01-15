import { AppShell, createStyles } from "@mantine/core";
import { useState } from "react";
import MantineWrapper from "../Wrappers/Mantine";
import Header from "./Header";
import Sidebar from "./Sidebar";

const useStyles = createStyles(theme => {
  return {
    main: {
      background:
        theme.colorScheme === "light"
          ? theme.colors.dark[8]
          : theme.colors.gray[0]
    }
  };
});

interface LayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
  hideSideBar?: boolean;
}
export const Layout: React.FC<LayoutProps> = ({
  children,
  hideHeader = false,
  hideSideBar = false
}) => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <MantineWrapper>
      <AppShell
        className={classes.main}
        navbarOffsetBreakpoint="sm"
        header={
          hideHeader ? <></> : <Header opened={opened} onOpen={setOpened} />
        }
        navbar={hideSideBar ? <></> : <Sidebar opened={opened} />}
      >
        {children}
      </AppShell>
    </MantineWrapper>
  );
};

export default Layout;
