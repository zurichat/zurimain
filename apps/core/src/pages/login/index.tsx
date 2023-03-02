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
import { IconAlertCircle, IconBrandGoogle } from "@tabler/icons";
import { FormTitle } from "@zuri/ui";
import { authApi } from "@zuri/utilities";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  inputField: {
    backgroundColor: "transparent",
    color: "black"
  },

  passwordIcon: {
    color: "black"
  },

  outlineBtn: {
    color: theme.colors.secondary[5],
    borderColor: theme.colors.secondary[5]
  },

  link: {
    color: theme.colors.secondary[9]
  },

  loginBtn: {
    "&:hover": {
      backgroundColor: theme.fn.lighten(theme.colors.secondary[5], 0.05)
    }
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
      <FormTitle
        title="Welcome back"
        subtitle="We are so excited to have you here"
      />
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
        <Text align="right" mb={20} size={16} color={theme.colors.secondary[9]}>
          Forgot Password
        </Text>
        <Button
          fullWidth
          mt="xl"
          size="md"
          bg={theme.colors.secondary[5]}
          mb={20}
          type="submit"
          loading={loginRequestLoading}
          className={classes.loginBtn}
        >
          Login
        </Button>
      </form>
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

export default LoginPage;
