import { Box, createStyles } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";

const useStyles = createStyles(theme => ({
  link: {
    width: "100%",
    boxSizing: "border-box",
    display: "block",
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}px`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: 35,
    lineHeight: "35px",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
      color: theme.colorScheme === "dark" ? theme.white : theme.black
    }
  },

  linkActive: {
    "&, &:hover": {
      borderLeftColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor
      }).background,
      backgroundColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor
      }).background,
      color: theme.white
    }
  }
}));

interface LinkType {
  label: string;
  icon: TablerIcon;
}

interface SidebarItemProps {
  activeLink: string;
  link: LinkType;
  setActiveLink: (label: string) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = (props:SidebarItemProps) => {
  const { classes, cx } = useStyles();
  const { activeLink, link, setActiveLink } = props;
  return (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: activeLink === link.label
      })}
      href="/"
      onClick={event => {
        event.preventDefault();
        setActiveLink(link.label);
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <link.icon size={18} stroke={1.5} />
        <Box ml="xs">{link.label}</Box>
      </Box>
    </a>
  );
};

export default SidebarItem;
