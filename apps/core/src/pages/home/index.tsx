import {
  Box,
  Button,
  Center,
  createStyles,
  Group,
  Image,
  Space,
  Stack,
  Text,
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
  const { hero0, hero1, hero2, hero3, hero4, ...companies } = useImages();

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
          <Center inline className={classes.linkWrapper}>
            <Link to="#">
              <Text>Create your own workspace</Text>

              <IconArrowRight />
            </Link>
          </Center>
        </div>
      </HeroContainer>

      {/* third hero */}
      <HeroContainer>
        <div>
          <Text size={20}>Remote Education</Text>
          <Title className={classes.smallerTitle}>Learn on the Go</Title>
          <Text className={classes.text}>
            Take your classroom everywhere,make learning fun,stay engaged and
            inspired with the virtual lounge and games
          </Text>
          <Space h={40} />
          <Center inline className={classes.link}>
            <Text color="primary">Learn more about the virtual lounge</Text>
            <IconArrowRight color="var(--color-primary)" />
          </Center>
        </div>
        <Image src={hero1.src} alt={hero1.alt} />
      </HeroContainer>

      {/* fourth hero */}
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
          <Button variant="subtle" size="lg" rightIcon={<IconArrowRight />}>
            Create your own workspace
          </Button>
        </div>
      </HeroContainer>
    </>
  );
}

const useStyles = createStyles({
  title: {
    fontSize: 48,
    paddingTop: 24,
    paddingBottom: 16,
    lineHeight: "62.4px"
  },
  smallerTitle: {
    fontSize: 36,
    paddingTop: 24,
    paddingBottom: 16,
    lineHeight: "46.8px"
  },
  text: {
    fontSize: 24
  },
  linkWrapper: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0em",
    textAlign: "left",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});
