import { createStyles, Image, Tooltip, UnstyledButton } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";

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
    border: "solid 2px black",
    borderRadius: "5px",
    objectFit: "contain"
  }
}));

type LinkType = {
  label: string;
  icon?: TablerIcon;
  src?: string;
};

type Props = {
  active: string;
  link: LinkType;
  setActive: Function;
};

const WorkspaceSidebarItem = (props: Props) => {
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
        {link.src && (
          <Image
            height={40}
            className={classes.workspaceImage}
            withPlaceholder
            src={link.src}
            alt="Random unsplash image"
          />
        )}
        {link.icon && <link.icon stroke={1.5} />}
      </UnstyledButton>
    </Tooltip>
  );
};

export default WorkspaceSidebarItem;
