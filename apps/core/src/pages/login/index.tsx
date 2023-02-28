import {
  Alert,
  Anchor,
  Button,
  createStyles,
  Divider,
  Paper,
  PasswordInput,
  Text,
  TextInput
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAlertCircle } from "@tabler/icons";
import { FormTitle } from "@zuri/ui";
import { authApi } from "@zuri/utilities";
import { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = createStyles(theme => ({
  form: {
    maxWidth: "480px",
    width: "100%",
    background: "transparent",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "480px"
    }
  },

  label: {
    fontSize: "20px",
    fontWeight: 700
  },

  inputField: {
    backgroundColor: "transparent",
    color: "black"
  },

  passwordIcon: {
    color: "black"
  },

  outlineBtn: {
    border: "1px solid #14466F",
    color: theme.colors.primary[9]
  },

  link: {
    color: theme.colors.primary[9]
  }
}));

export const LoginPage: React.FC = () => {
  const { classes, theme } = useStyles();
  const { useLoginUserMutation } = authApi;
  const [mutate, { isLoading: loginRequestLoading, data }] =
    useLoginUserMutation();

  const [error, setError] = useState<string | null>("");

  const LoginForm = useForm({
    initialValues: {
      email: "",
      password: ""
    },

    validate: {
      password: value =>
        value.length > 2 ? null : "Password must have at least 2 letters",
      email: value => (/^\S+@\S+$/.test(value) ? null : "Invalid email")
    }
  });

  const handleSubmit = async (values: typeof LoginForm.values) => {
    setError(null);
    await mutate(values);

    if (!data) {
      setError("An Error occured");
    }
  };

  return (
    <Paper className={classes.form} radius={0}>
      <FormTitle title="Welcome back" />

      {error && (
        <Alert
          icon={<IconAlertCircle size={16} />}
          title="Bummer!"
          color="red"
          variant="filled"
          my="md"
        >
          {error}
        </Alert>
      )}

      <form onSubmit={LoginForm.onSubmit(values => handleSubmit(values))}>
        <TextInput
          placeholder="name@workemail.com"
          size="md"
          mb={20}
          autoComplete="false"
          classNames={{ input: classes.inputField }}
          {...LoginForm.getInputProps("email")}
        />
        <PasswordInput
          placeholder="Enter password"
          mt="md"
          size="md"
          mb={20}
          autoComplete="false"
          classNames={{
            input: classes.inputField,
            visibilityToggle: classes.passwordIcon
          }}
          {...LoginForm.getInputProps("password")}
        />
        <Text align="right" mb={20} size={12} color={"#626769"}>
          Forgot Password
        </Text>
        <Button
          fullWidth
          mt="xl"
          size="md"
          bg={theme.colors.primary[9]}
          mb={25}
          type="submit"
          loading={loginRequestLoading}
        >
          Login
        </Button>
      </form>
      <Divider
        my="xs"
        label="OR"
        labelPosition="center"
        labelProps={{ color: "#373B3D" }}
        color="#B5BEC1"
        classNames={{ label: classes.label }}
      />
      <Button
        fullWidth
        mt="xl"
        size="md"
        variant="outline"
        color={theme.colors.primary[9]}
        mb={25}
        className={classes.outlineBtn}
        disabled={true}
      >
        Login with Google
      </Button>
      <Text
        align="center"
        mt="md"
        color={"#373B3D"}
        weight={"700"}
        size={20}
        mb={25}
      >
        New to Zurichat ?{" "}
        <Anchor
          component={Link}
          to="/signup"
          weight={700}
          color={theme.colors.primary[9]}
          className={classes.link}
        >
          Sign Up
        </Anchor>
      </Text>
    </Paper>
  );
};

export default LoginPage;
