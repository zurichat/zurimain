import {
  Burger,
  createStyles,
  Header as MantineHeader,
  MediaQuery,
  Text
} from "@mantine/core";

const useStyles = createStyles(theme => {
  return {
    MediaQueryWrapper: {
      display: "flex",
      alignItems: "center",
      height: "100%"
    }
  };
});
export interface HeaderProps {
  opened: boolean;
  onOpen: (value: ((prevState: boolean) => boolean) | boolean) => void;
}
export const Header: React.FC<HeaderProps> = props => {
  const { opened, onOpen } = props;
  const { classes, theme } = useStyles();
  console.log(theme.colorScheme);

  return (
    <MantineHeader height={{ base: 50, md: 70 }} p="md">
      <div className={classes.MediaQueryWrapper}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => onOpen(o => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Text>Application header</Text>
      </div>
    </MantineHeader>
  );
};

export default Header;
