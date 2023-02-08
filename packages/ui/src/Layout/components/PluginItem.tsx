import {
  Accordion,
  Avatar,
  Box,
  createStyles,
  Flex,
  Indicator,
  Text
} from "@mantine/core";
import { IconHash, TablerIcon } from "@tabler/icons";
import React, { useState } from "react";
import { ChannelAction } from "./ChannelAction";

const useStyles = createStyles(theme => ({
  pluginitem: { border: "none" },
  content: { padding: 0 },
  chevron: {
    transform: "rotate(-90deg)",
    "&[data-rotate]": {
      transform: "rotate(0deg)"
    },
    marginRight: "3px"
  },
  accordion: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.secondary[4]
  },
  buttonText: {
    fontWeight: 500,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,
    whiteSpace: "nowrap"
  },
  control: {
    width: "auto",
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.secondary[4],
      color: theme.colorScheme === "dark" ? theme.white : theme.black
    }
  },
  collectionsHeader: {
    paddingRight: theme.spacing.md,
    marginBottom: 5,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.secondary[4],
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.secondary[4],
      color: theme.colorScheme === "dark" ? theme.white : theme.black
    }
  },
  mainLink: {
    width: 23,
    height: 23,
    borderRadius: theme.radius.sm,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.primary[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.primary[0]
          : theme.colors.gray[3]
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
  hash: {
    color: "black",
    marginRight: 8
  },
  hashActive: { color: "white" }
}));

interface PluginItemProps {
  icon?: TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string; image?: string }[];
}

const PluginItem: React.FC<PluginItemProps> = ({ label, links }) => {
  const [active, setActive] = useState("");
  const [isShowAction, showActionButton] = useState(false);
  const { classes, cx, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const items = (hasLinks ? links : []).map(link => (
    <Text<"a">
      component="a"
      className={cx(classes.link, {
        [classes.linkActive]: active === link.label
      })}
      href={link.link}
      key={link.label}
      pl="40px"
      onClick={event => {
        event.preventDefault();
        setActive(link.label);
      }}
    >
      {link.image ? (
        <Flex align={"center"}>
          <Indicator
            mr={4}
            dot
            inline
            size={10}
            offset={4.5}
            position="bottom-end"
            color="green"
            withBorder
          >
            <Avatar
              mr={5}
              size={25}
              radius="xs"
              src={link.image ?? null}
              color={theme.colors.primary[9]}
              alt="Direct message avatar"
            />
          </Indicator>{" "}
          {link.label}
        </Flex>
      ) : (
        <Flex align={"center"}>
          <IconHash
            size={13}
            className={cx(classes.hash, {
              [classes.hashActive]: active === link.label
            })}
          />
          {link.label}
        </Flex>
      )}
    </Text>
  ));

  return (
    <Accordion
      p={0}
      variant="contained"
      chevronPosition="left"
      classNames={classes}
    >
      <Accordion.Item value="photos" className={classes.pluginitem}>
        <Flex
          className={classes.collectionsHeader}
          gap="5px"
          justify="space-between"
          align="center"
          direction="row"
          wrap="nowrap"
          onMouseEnter={() => showActionButton(true)}
          onMouseLeave={() => showActionButton(false)}
        >
          <Accordion.Control h="35px" className={classes.control}>
            <Text className={classes.buttonText}> {label}</Text>
          </Accordion.Control>
          {isShowAction && (
            <Flex
              gap="sm"
              justify="flex-end"
              align="center"
              direction="row"
              wrap="wrap"
            >
              <ChannelAction />
            </Flex>
          )}
        </Flex>
        <Accordion.Panel className={classes.accordion}>
          {hasLinks ? <Box>{items}</Box> : null}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default PluginItem;
