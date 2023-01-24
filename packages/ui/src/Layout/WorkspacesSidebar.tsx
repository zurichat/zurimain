import { createStyles, Tooltip, UnstyledButton } from "@mantine/core";
import { IconPlus, TablerIcon } from "@tabler/icons";
import { FC } from "react";
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
  }, mainLink: {
    marginTop: 10,
    width: 44,
    height: 44,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.primary[0]
    }
  },
}));

const AddWorkSpaceButton:FC = () => {
  const { classes, cx } = useStyles();
  return (
    <Tooltip
      label={"Add Workpaces"}
      position="right"
      withArrow
      transitionDuration={0}
      key={"Add Workspaces"}
    >
      <UnstyledButton
        className={cx(classes.mainLink)}
      >
       <IconPlus stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
};

const src =
  "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80";

const mainLinksMockdata = [
  { label: "ZuriChat", src: src },
  { label: "Abeg", src: src },
];

interface WorkspacesSidebarProps {
  active: string;
  setActive: Function;
};

const WorkspacesSidebar: FC<WorkspacesSidebarProps> = (props: WorkspacesSidebarProps) => {
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
      <AddWorkSpaceButton/>
    </div>
  );
};

export default WorkspacesSidebar;
