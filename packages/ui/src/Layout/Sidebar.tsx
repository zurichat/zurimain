import React, { useState } from "react";
import {
  createStyles,
  Navbar,
  Title,
  Box,
  ThemeIcon,
  Divider
} from "@mantine/core";
import {
  IconCalendarStats,
  IconMessageCircle,
  IconMessages,
  IconNotes,
  IconGridDots,
  IconFileDescription,
  IconChevronDown,
  IconEdit
} from "@tabler/icons";
import SidebarItem from "./components/SidebarItem";
import PluginItem from "./components/PluginItem";
import WorkspacesSidebar from "./WorkspacesSidebar";

const useStyles = createStyles(theme => ({
  wrapper: {
    display: "flex"
  },
  aside: {
    paddingTop: 10,
    flex: "0 0 60px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`
  },
  main: {
    flex: 1,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
  },
  title: {
    boxSizing: "border-box",
    cursor: "pointer",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    marginBottom: 5,
    padding: theme.spacing.md,
    paddingTop: 7,
    height: 45,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`
  },
  chevrondown: {
    marginLeft: 5
  },
  divider: {
    marginTop: 10,
    marginBottom: 10
  },
  editicon: {
    borderRadius: "50%"
  }
}));

const mockdata = {
  label: "Channels",
  icon: IconCalendarStats,
  links: [
    { label: "Upcoming releases", link: "/" },
    { label: "Previous releases", link: "/" },
    { label: "Releases schedule", link: "/" }
  ]
};

const linksMockdata = [
  { label: "Thread", icon: IconMessageCircle },
  { label: "AllDMs", icon: IconMessages },
  { label: "Drafts", icon: IconNotes },
  { label: "Files", icon: IconFileDescription },
  { label: "Plugins", icon: IconGridDots }
];

export interface SidebarProps {
  opened: boolean;
}
export const Sidebar: React.FC<SidebarProps> = props => {
  const { opened } = props;
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Releases");
  const [activeLink, setActiveLink] = useState("Settings");

  return (
    <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 210, lg: 310 }}>
      <Navbar.Section grow className={classes.wrapper}>
        {/* Workspaces Sidebar */}
        <WorkspacesSidebar active={active} setActive={setActive} />
        {/* Main Sidebar */}
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {/* {active} */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Box>
                ZuriChat
                <IconChevronDown
                  className={classes.chevrondown}
                  size={14}
                  stroke={1.5}
                />
              </Box>
              <ThemeIcon className={classes.editicon} variant="light" size={30}>
                <IconEdit size={18} />
              </ThemeIcon>
            </Box>
          </Title>
          {/* Sidebar Items */}
          {linksMockdata.map((link, idx) => (
            <SidebarItem
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              link={link}
              key={idx}
            />
          ))}
          <Divider className={classes.divider} />
          {/* Plugins Section */}
          <PluginItem {...mockdata} />
        </div>
      </Navbar.Section>
    </Navbar>
  );
};

export default Sidebar;
