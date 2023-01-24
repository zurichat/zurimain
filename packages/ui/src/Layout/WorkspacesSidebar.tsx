import { createStyles } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import React from "react";
import WorkspaceSidebarItem from "./components/WorkspaceSidebarItem";
const useStyles = createStyles(theme => ({
  aside: {
    paddingTop: 10,
    flex: "0 0 60px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.secondary[4],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`
  },
  chevrondown: {
    marginLeft: 5
  },
  editicon: {
    borderRadius: "50%"
  }
}));

const src =
  "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80";

const mainLinksMockdata = [
  { label: "ZuriChat", src: src },
  { label: "Abeg", src: src },
  { icon: IconPlus, label: "Add Workspace" }
];

type Props = {
  active: string;
  setActive: Function;
};

const WorkspacesSidebar = (props: Props) => {
  const { classes } = useStyles();
  const { active, setActive } = props;
  return (
    <div className={classes.aside}>
      {mainLinksMockdata.map((link, idx) => (
        <WorkspaceSidebarItem
          active={active}
          setActive={setActive}
          link={link}
          key={idx}
        />
      ))}
    </div>
  );
};

export default WorkspacesSidebar;
