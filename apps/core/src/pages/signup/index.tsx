import { useState } from "react";
import {
  Anchor,
  Button,
  createStyles,
  Divider,
  Paper,
  Text,
  TextInput
} from "@mantine/core";
import { FormTitle } from "@zuri/ui";
import { Link } from "react-router-dom";
import { IconBrandGoogle } from "@tabler/icons";

const useStyles = createStyles(theme => ({
  form: {
    maxWidth: "420px",
    width: "100%",
    // background: theme.colors.secondary[6],
    padding: 40,
    background: "white",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingLeft: 20,
      paddingRight: 20
    },
    borderRadius: 15
  },
  label: {
    fontSize: 16,
    color: theme.colors.secondary[8]
  },
  outlineBtn: {
    color: theme.colors.secondary[5],
    borderColor: theme.colors.secondary[5]
  },
  link: {
    color: theme.colors.secondary[9]
  },
  continueBtn: {
    "&:invalid": { background: theme.colors.secondary[5] }
  }
}));

export const SignupPage = () => {
  const [emailInput, setEmailInput] = useState("");
  const { classes, theme } = useStyles();
  return (
    <Paper className={classes.form} radius={0}>
      <FormTitle
        title="Glad to have you"
        subtitle="Kindly enter your email address to proceed"
      />
      <Button
        fullWidth
        mt="xl"
        size="md"
        variant="outline"
        disabled={true}
        className={classes.outlineBtn}
        leftIcon={<IconBrandGoogle size={14} />}
      >
        Login with Google
      </Button>
      <Divider
        my="md"
        label="OR"
        labelPosition="center"
        variant="dashed"
        labelProps={{ color: theme.colors.secondary[5] }}
        color="#B5BEC1"
        classNames={{ label: classes.label }}
      />
      <TextInput
        label="Email Address"
        placeholder="name@workemail.com"
        size="md"
        mb={20}
        autoComplete="false"
        onChange={e => setEmailInput(e.target.value)}
        labelProps={{ mb: 5 }}
      />
      <Button
        disabled={!emailInput}
        fullWidth
        mt="xl"
        size="md"
        bg={theme.colors.secondary[5]}
        mb={25}
        className={classes.continueBtn}
      >
        Continue
      </Button>
      <Text
        align="left"
        color={theme.colors.secondary[7]}
        weight={"400"}
        size={16}
        mr={5}
      >
        Are you new to Zurichat ?{"  "}
        <Anchor
          component={Link}
          to="/signup"
          weight={400}
          color={theme.colors.secondary[9]}
          className={classes.link}
        >
          Sign Up
        </Anchor>
      </Text>
    </Paper>
  );
};

export default SignupPage;
