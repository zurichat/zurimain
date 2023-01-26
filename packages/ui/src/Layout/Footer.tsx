import {
  Box,
  Container,
  createStyles,
  Grid,
  Group,
  Image,
  Text
} from "@mantine/core";
import zuriChatLogo from "../assets/zurichat-logo.svg";

export function Footer() {
  const { classes } = useStyles();

  return (
    <Box component="footer" className={classes.wrapper}>
      <Container size={1240}>
        <Grid columns={10}>
          <Grid.Col md={1} lg={2}>
            <Group align="center" spacing={8}>
              <Image
                src={zuriChatLogo}
                alt="ZuriChat logo"
                width={30}
                height={30}
              />
              <Text>Zuri Chat</Text>
            </Group>
          </Grid.Col>
          <Grid.Col md={1} lg={2}>
            2
          </Grid.Col>
          <Grid.Col md={1} lg={2}>
            3
          </Grid.Col>
          <Grid.Col md={1} lg={2}>
            4
          </Grid.Col>
          <Grid.Col md={1} lg={2}>
            5
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

const useStyles = createStyles(theme => ({
  wrapper: {
    padding: "50px 0",
    background: theme.colors.gray[2]
  }
}));
