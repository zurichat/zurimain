import { Button, Container, Group, Text, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import useStyles from "./errorStyles";

const Custom401: React.FC = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>401</div>

      <Title className={classes.title}>You are not authorized.</Title>

      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        You are not authorized to view this page. Please contact the support if
        you should have access to the page.
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

export default Custom401;
