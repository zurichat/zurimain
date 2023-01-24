import {
  Box,
  Burger,
  Button,
  Center,
  createStyles,
  Divider,
  Drawer,
  Group,
  Header as MantineHeader,
  Menu,
  NavLink,
  ScrollArea,
  Text,
  Title
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";

const useStyles = createStyles(theme => ({
  header:{background:
    theme.colorScheme === "dark"
      ? theme.colors.dark[8]
      : theme.colors.secondary[4]},
  innerLink: {
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0]
    },
    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%"
    }
  },

  linkLabel: {
    marginRight: 5
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none"
    }
  }
}));

export interface ILink {
  label: string;
  link?: string;
  links?: Omit<ILink, "links">[];
}
export interface HeaderProps {
  drawerOpened: boolean;
  toggleDrawer: () => void;
  closeDrawer: () => void;
  links: ILink[];
}
export const DrawerLinks: React.FC<{ link: ILink }> = props => {
  const { link } = props;
  const { classes } = useStyles();

  if (link.links) {
    return (
      <NavLink label={link.label} className={classes.link} childrenOffset={28}>
        {link.links.map(item => (
          <NavLink
            component="a"
            key={item.label}
            className={classes.link}
            label={item.label}
            href={item.link}
          />
        ))}
      </NavLink>
    );
  }

  return (
    <a key={link.label} href={link.link} className={classes.link}>
      {link.label}
    </a>
  );
};
export const Header: React.FC<HeaderProps> = props => {
  const { drawerOpened, toggleDrawer, closeDrawer, links } = props;
  const { classes, theme } = useStyles();

  const items = links.map(item => {
    const { label, link, links } = item;

    if (links) {
      return (
        <Menu key={label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <Text className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </Text>
          </Menu.Target>

          <Menu.Dropdown>
            {links.map(inner => (
              <Menu.Item key={inner.link}>
                <a href={inner.link} className={classes.innerLink}>
                  {inner.label}
                </a>
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a key={label} href={link} className={classes.link}>
        {label}
      </a>
    );
  });

  const appTitle = <Title>Zuri Chat</Title>;

  return (
    <Box>
      <MantineHeader className={classes.header} height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          {appTitle}

          <Group sx={{ height: "100%" }} className={classes.hiddenMobile}>
            {items}
          </Group>

          <Group className={classes.hiddenMobile}>
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </MantineHeader>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={appTitle}
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Divider
            mb="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          {links.map(link => (
            <DrawerLinks key={link.label} link={link} />
          ))}

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Header;
