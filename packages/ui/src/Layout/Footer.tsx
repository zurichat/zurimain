import { Box, Grid, Image } from "@mantine/core";
import zuriChatLogo from "../assets/zurichat-logo.svg";

export function Footer() {
  return (
    <Box component="footer">
      <Grid columns={10}>
        <Grid.Col md={1} lg={2}>
          <Image src={zuriChatLogo} alt="ZuriChat logo" />
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
    </Box>
  );
}
