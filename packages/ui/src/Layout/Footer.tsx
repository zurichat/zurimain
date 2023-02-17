import {
  ActionIcon,
  Box,
  Container,
  createStyles,
  Divider,
  Grid,
  Group,
  Space,
  Stack,
  Text,
  Title
} from "@mantine/core";
import { Link } from "react-router-dom";
import { BrandAvatar } from "../BrandAvatar";
import FacebookIcon from "../assets/facebook-icon.svg";
import InstagramIcon from "../assets/instagram-icon.svg";
import TwitterIcon from "../assets/twitter-icon.svg";
import LinkedinIcon from "../assets/linkedin-icon.svg";

export function Footer() {
  const { classes } = useStyles();

  return (
    <Box component="footer" className={classes.wrapper}>
      <Container size={1240}>
        <Grid grow columns={20} gutter={70} gutterXs={35}>
          <Grid.Col sm={20} md={4}>
            <Link to="/" className={classes.brandLink}>
              <BrandAvatar />
            </Link>
          </Grid.Col>

          <Grid.Col span={10} sm={4}>
            <Stack spacing={20}>
              <Title order={5}>Company</Title>
              <Stack spacing={12}>
                <Link to="/careers" className={classes.link}>
                  Careers
                </Link>
                <Link to="/about" className={classes.link}>
                  About ZuriChat
                </Link>
              </Stack>
            </Stack>
          </Grid.Col>

          <Grid.Col span={10} sm={4}>
            <Stack spacing={20}>
              <Title order={5}>Info</Title>
              <Stack spacing={12}>
                <Link to="/privary-and-terms" className={classes.link}>
                  Privacy &amp; Terms
                </Link>
                <Link to="/marketplace" className={classes.link}>
                  Market Place
                </Link>
              </Stack>
            </Stack>
          </Grid.Col>

          <Grid.Col span={10} sm={4}>
            <Stack spacing={20}>
              <Title order={5}>Know Us</Title>
              <Stack spacing={12}>
                <Link to="/downloads" className={classes.link}>
                  Downloads
                </Link>
                <Link to="/contact" className={classes.link}>
                  Contact Us
                </Link>
              </Stack>
            </Stack>
          </Grid.Col>

          <Grid.Col span={10} sm={4}>
            <Stack spacing={20}>
              <Title order={5}>Social Media</Title>
              <Group spacing={8}>
                <Link to="#">
                  <ActionIcon size="lg">
                    <img src={FacebookIcon} alt="Facebook Icon" />
                  </ActionIcon>
                </Link>
                <Link to="#">
                  <ActionIcon size="lg">
                    <img src={InstagramIcon} alt="Instagram Icon" />
                  </ActionIcon>
                </Link>
                <Link to="#">
                  <ActionIcon size="lg">
                    <img src={TwitterIcon} alt="Twitter Icon" />
                  </ActionIcon>
                </Link>
                <Link to="#">
                  <ActionIcon size="lg">
                    <img src={LinkedinIcon} alt="LinkedIn Icon" />
                  </ActionIcon>
                </Link>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
        <Space h={90} />
        <Divider />
        <Space h={39} />
        <Text align="center" color="dimmed">
          &copy;2021 Zurichat. All Rights Reserved.{" "}
        </Text>
      </Container>
    </Box>
  );
}

const useStyles = createStyles(theme => ({
  wrapper: {
    padding: "50px 0",
    background: theme.colors.gray[1],
    "& .mantine-Title-root": {
      color: theme.colors.gray[8]
    }
  },
  link: {
    textDecoration: "none",
    color: theme.colors.gray[6]
  },
  brandLink: {
    textDecoration: "none",
    color: theme.colors.gray[8]
  }
}));
