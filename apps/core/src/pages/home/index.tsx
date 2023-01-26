import {
  Box,
  Button,
  Container,
  createStyles,
  Grid,
  Group,
  Image,
  Input,
  Space,
  Stack,
  Text,
  TextInput,
  Title
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons";
import { uiSliceActions, useAppDispatch } from "@zuri/utilities";
import { Link } from "react-router-dom";
import HeroContainer from "./components/HeroContainer";
import useImages from "./utils/useImages";

export default function HomePage() {
  const dispatch = useAppDispatch();
  dispatch(uiSliceActions.setSidebarVisibility(false));

  const { classes } = useStyles();
  const { hero0, hero1, hero2, hero3, hero4, hero5, hero6, ...companies } =
    useImages();

  return (
    <>
      {/* first hero */}
      <HeroContainer>
        <div>
          <Text size={20}>For Organizations &amp; Institutions</Text>
          <Title className={classes.title}>
            A fully Integrated way to connect and interact
          </Title>
          <Text className={classes.text}>
            Create your future with us, network, collaborate, educate and learn
            remotely
          </Text>
          <Space h={60} />
          <Button size="lg">Try Zuri.chat for free</Button>
        </div>
        <Image src={hero0.src} alt={hero0.alt} />
      </HeroContainer>
      <Space h={28} />

      {/* band - trusted companies */}
      <Stack align="center" spacing={48}>
        <Text weight={700} className={classes.text}>
          Trusted by top companies worldwide
        </Text>
        <Group grow position="apart" spacing={65}>
          {Object.values(companies).map(image => (
            <Box key={image.src} sx={{ maxHeight: "100%" }}>
              <Image src={image.src} alt={image.alt} />
            </Box>
          ))}
        </Group>
      </Stack>

      {/* second hero */}
      <HeroContainer>
        <Image src={hero1.src} alt={hero1.alt} />
        <div>
          <Text size={20}>Seemless collaboration</Text>
          <Title className={classes.smallerTitle}>
            Communicate and collaborate from wherever you are
          </Title>
          <Text className={classes.text}>
            Invite your team to your workspace. Stay connected,stay in sync,and
            explore idea together from anywhere
          </Text>
          <Space h={40} />
          <Link to="#">
            <Button
              size="lg"
              variant="subtle"
              rightIcon={<IconArrowRight />}
              className={classes.linkButton}
            >
              Create your own workspace
            </Button>
          </Link>
        </div>
      </HeroContainer>

      {/* third hero */}
      <HeroContainer>
        <div>
          <Text size={20}>Remote Education</Text>
          <Title className={classes.smallerTitle}>Learn on the Go</Title>
          <Text className={classes.text}>
            Take your classroom everywhere, make learning fun, stay engaged and
            inspired with the virtual lounge and games
          </Text>
          <Space h={40} />
          <Link to="#">
            <Button
              size="lg"
              variant="subtle"
              rightIcon={<IconArrowRight />}
              className={classes.linkButton}
            >
              Learn more about the virtual lounge
            </Button>
          </Link>
        </div>
        <Image src={hero2.src} alt={hero2.alt} />
      </HeroContainer>

      {/* fourth hero */}
      <HeroContainer>
        <Image src={hero3.src} alt={hero3.alt} />
        <div>
          <Text size={20}>All-in-one Workspace</Text>
          <Title className={classes.smallerTitle}>
            Customise your Workspace
          </Title>
          <Text className={classes.text}>
            One tool, several plugins. Track company expenses, send information
            fast and smoothly. Manage files and integrate tools all with
            Zuri.chat
          </Text>
          <Space h={40} />
          <Button
            size="lg"
            variant="subtle"
            rightIcon={<IconArrowRight />}
            className={classes.linkButton}
          >
            Explore Plugins
          </Button>
        </div>
      </HeroContainer>

      {/* fifth hero */}
      <HeroContainer>
        <div>
          <Text size={20}>Advanced Search</Text>
          <Title className={classes.smallerTitle}>
            Access Files and Messages in your Workspace Effortlessly
          </Title>
          <Text className={classes.text}>
            With the search tool, find previously shared messages, files and
            links with ease
          </Text>
          <Space h={40} />
          <Button
            size="lg"
            variant="subtle"
            rightIcon={<IconArrowRight />}
            className={classes.linkButton}
          >
            Learn more about Search
          </Button>
        </div>
        <Image src={hero4.src} alt={hero4.alt} />
      </HeroContainer>

      {/* green section */}
      <Box className={classes.greenSection}>
        <Container size={1240}>
          <Grid columns={13} align="center" gutter={56}>
            <Grid.Col md={7}>
              <Title className={classes.smallerTitle}>
                A Flexible Way to Educate, Collaborate and Team Up From Wherever
                You Are
              </Title>
              <Space h={30} />
              <Button size="lg" variant="white">
                Sign up now for Free!!
              </Button>
            </Grid.Col>
            <Grid.Col md={6}>
              <img src={hero5.src} alt={hero5.alt} />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* seventh hero */}
      <HeroContainer>
        <Image src={hero6.src} alt={hero6.alt} />
        <div>
          <Title className={classes.smallerTitle}>
            Be the First to get updates and exclusive offers from Zuri Chat
          </Title>
          <Text className={classes.text}>
            Enrich your Zuri Chat experience by signing up here to get the
            latest news and special deals on Zuri Chat
          </Text>
          <Space h={40} />
          <Group>
            <TextInput
              size="lg"
              placeholder="Ex: jazeelandteam@yes.com"
              style={{ flexGrow: 1 }}
            />
            <Button size="lg">Subscribe</Button>
          </Group>
        </div>
      </HeroContainer>
    </>
  );
}

const useStyles = createStyles(theme => ({
  title: {
    fontSize: 48,
    paddingTop: 24,
    paddingBottom: 16,
    lineHeight: "62.4px",
    color: theme.colors.dark[7]
  },
  smallerTitle: {
    fontSize: 36,
    paddingTop: 24,
    paddingBottom: 16,
    lineHeight: "46.8px",
    color: theme.colors.dark[7]
  },
  text: {
    fontSize: 24,
    color: theme.colors.dark[7]
  },
  linkButton: {
    paddingLeft: 0,
    paddingRight: 0,
    "&:hover": {
      textDecoration: "underline",
      background: "inherit"
    }
  },
  greenSection: {
    position: "relative",
    width: "100%",
    paddingTop: 150,
    paddingBottom: 150,
    overflow: "hidden",
    background: theme.colors.primary[6],

    "& .mantine-Title-root": {
      color: theme.white
    },
    "& .mantine-Container-root": {
      paddingRight: 0
    },
    "& img": {
      position: "absolute",
      top: 100
    }
  }
}));
