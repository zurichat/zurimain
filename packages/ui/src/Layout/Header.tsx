import {
  Burger,
  Header as MantineHeader,
  MediaQuery,
  Text,
  useMantineTheme
} from "@mantine/core";

export interface HeaderProps {
  opened: boolean;
  onOpen: (value: ((prevState: boolean) => boolean) | boolean) => void;
}
export const Header: React.FC<HeaderProps> = props => {
  const { opened, onOpen } = props;
  const theme = useMantineTheme();

  return (
    <MantineHeader height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
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
