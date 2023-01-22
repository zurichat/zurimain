import {
  Box,
  Collapse,
  createStyles,
  Group,
  Text,
  UnstyledButton
} from "@mantine/core";
import {
  IconChevronLeft,
  IconChevronRight,
  IconHash,
  TablerIcon
} from "@tabler/icons";
import React, { FC, useState } from "react";

const useStyles = createStyles(theme => ({
  control: {
    fontWeight: 500,
    display: "block",
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black
    }
  },
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
  },
  chevron: {
    transition: "transform 200ms ease"
  }
}));

interface PluginItemProps {
  icon: TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

const PluginItem: FC<PluginItemProps> = ({
  icon:Icon,
  label,
  initiallyOpened,
  links
}) => {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const ChevronIcon = theme.dir === "ltr" ? IconChevronRight : IconChevronLeft;
  const items = (hasLinks ? links : []).map(link => (
    <Text<"a">
      component="a"
      className={classes.link}
      href={link.link}
      key={link.label}
      pl="40px"
      onClick={event => event.preventDefault()}
    >
      <IconHash size={12} color="black" /> {link.label}
    </Text>
  ));
  return (
    <>
      <UnstyledButton
        onClick={() => setOpened(o => !o)}
        className={classes.control}
      >
        <Group spacing={0}>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              stroke={1.5}
              style={{
                transform: opened
                  ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                  : "none"
              }}
            />
          )}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box ml="xs">{label}</Box>
          </Box>
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
};

export default PluginItem;
