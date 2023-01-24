import {
  Avatar,
  createStyles,
  Tooltip,
  UnstyledButton
} from "@mantine/core";

const useStyles = createStyles(theme => ({
  mainLink: {
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
          : theme.colors.gray[0]
    }
  },

  mainLinkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color
    }
  },
  workspaceImage: {
    border: `solid 1px ${theme.colors.gray[3]}`,
    borderRadius: "5px",
    objectFit: "contain"
  }
}));

interface LinkType {
  label: string;
  src: string;
}

interface WorkspaceSidebarItemProps {
  active: string;
  link: LinkType;
  setActive: Function;
}

const WorkspaceSidebarItem: React.FC<WorkspaceSidebarItemProps> = (
  props: WorkspaceSidebarItemProps
) => {
  const { classes, cx } = useStyles();
  const { active, link, setActive } = props;
  return (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionDuration={0}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={cx(classes.mainLink, {
          [classes.mainLinkActive]: link.label === active
        })}
      >
        <Avatar
          size={40}
          className={classes.workspaceImage}
          src={link.src}
          alt="Workspace Logo"
        />
      </UnstyledButton>
    </Tooltip>
  );
};

export default WorkspaceSidebarItem;
