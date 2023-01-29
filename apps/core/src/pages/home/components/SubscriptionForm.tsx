import {
  Button,
  createStyles,
  Group,
  Image,
  Modal,
  Stack,
  Text,
  TextInput,
  Title
} from "@mantine/core";
import { useState } from "react";
import emailVerified from "../assets/email-verified.svg";

export default function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const { classes } = useStyles();

  const submit = () => {
    const isValid = verifyEmail(email);
    if (!isValid) {
      setError(true);
      return;
    }
    // TODO - make POST req to /external/subscribe
    setError(false);
    setModalOpened(true);
    setEmail("");
  };

  return (
    <>
      <Group align="center">
        <TextInput
          value={email}
          onChange={e => {
            setEmail(e.target.value);
            setError(false);
          }}
          size="lg"
          placeholder="Ex: jazeelandteam@yes.com"
          style={{ flexGrow: 1, position: "relative" }}
          {...(error && {
            error: "Email is not valid"
          })}
          errorProps={{ style: { position: "absolute" } }}
        />

        <Button size="lg" onClick={submit}>
          Subscribe
        </Button>
      </Group>

      <Modal
        size={830}
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        withCloseButton={false}
        overlayOpacity={0.1}
        shadow="1px 1px 44px rgba(64, 64, 64, 0.5)"
      >
        <Stack align="center" spacing={16} style={{ padding: 75 }}>
          <Image src={emailVerified} alt="Email verified" width={150} />
          <Title className={classes.title}>Thank you for subscribing!</Title>
          <Text className={classes.text}>
            Now, you&apos;ll be the first to receive updates and unique offers
            from the Zuri Chat team.
          </Text>
        </Stack>
      </Modal>
    </>
  );
}

function verifyEmail(email: string) {
  // TODO
  return Boolean(email);
}

const useStyles = createStyles(theme => ({
  title: {
    maxWidth: 440,
    fontSize: 36,
    fontWeight: 500,
    textAlign: "center",
    color: theme.colors.gray[7],

    "@media screen and (max-width: 400px)": {
      fontSize: 32
    }
  },
  text: {
    maxWidth: 440,
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "29px",
    textAlign: "center",
    color: theme.colors.gray[6]
  }
}));
