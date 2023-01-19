import { Button, Container, Group, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import useStyles from "./errorStyles";

const Custom500: React.FC = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>500</div>

      <Title className={classes.title}>Something bad just happened...</Title>

      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        Our servers could not handle your request. Don&apos;t worry, our
        development team was already notified. Try refreshing the page.
      </Text>

      <Group position="center">
        <Button variant="subtle" size="md" onClick={() => navigate(0)}>
          Refresh Page
        </Button>

        <Button variant="subtle" size="md" onClick={() => navigate("/")}>
          Take me to the home page
        </Button>
      </Group>
    </Container>
  );
};

export default Custom500;
