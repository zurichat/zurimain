import { Button, Container, Group, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import useStyles from "./errorStyles";

const Custom404: React.FC = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>

      <Title className={classes.title}>You have found a secret place.</Title>

      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>

      <Group position="center">
        <Button variant="subtle" size="md" onClick={() => navigate(-1)}>
          Go Back
        </Button>

        <Button variant="subtle" size="md" onClick={() => navigate("/")}>
          Take me to the home page
        </Button>
      </Group>
    </Container>
  );
};

export default Custom404;
