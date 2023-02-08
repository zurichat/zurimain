import { Menu, Group, Text, createStyles, ActionIcon } from "@mantine/core";
import { IconPlus } from "@tabler/icons";

const useStyles = createStyles(theme => ({
  text: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black
  },
  wrapper: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.secondary[4]
  }
}));
//
export function ChannelAction() {
  const { classes } = useStyles();

  //
  return (
    <Group position="center">
      <Menu withArrow width={200} position="right" transition="scale-x">
        <Menu.Target>
          <ActionIcon>
            <IconPlus size={16} stroke={2} />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown className={classes.wrapper}>
          <Menu.Item>
            <Text className={classes.text} size="xs">
              Browse channels
            </Text>
          </Menu.Item>
          <Menu.Item>
            <Text className={classes.text} size="xs">
              Create a channel
            </Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
