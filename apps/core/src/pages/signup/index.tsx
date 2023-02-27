import {
  Paper,
  createStyles,
  TextInput,
  Button,
  Text,
  Anchor,
  Divider
} from "@mantine/core";
import { FormTitle } from "@zuri/ui";

const useStyles = createStyles(theme => ({
  loginPage: {
    height: "100vh",
    background: "#FCF7F1"
  },

  wrapper: {
    width: "100%",
    height: "100%",
    minHeight: "100vh"
  },

  formContainer: {
    width: "60%",
    height: "100%",
    positon: "relative",
    padding: "17px",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "100%"
    }
  },

  formHeader: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    height: "75px",
    borderBottom: "1px solid #F9DBB6",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    paddingLeft: "110px",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingLeft: "17px"
    }
  },

  formLogo: {
    display: "flex",
    gap: "10px",
    justifyContent: "start",
    alignItems: "center"
  },

  form: {
    maxWidth: "480px",
    width: "100%",
    background: "transparent",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "480px"
    }
  },

  formImage: {
    width: "40%",
    height: "100%",
    background: theme.colors.primary[9],
    color: "white",
    zIndex: 99,
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: "none"
    }
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: "44px",
    lineHeight: "50px",
    fontWeight: 700,
    color: "#1E2122"
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },

  label: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#373B3D"
  }
}));

export const SignupPage = () => {
  const { classes, theme } = useStyles();
  return (
    <Paper className={classes.form} radius={0}>
      <FormTitle
        title="Get Started"
        subtitle="We suggest you use your work email to register"
      />
      <TextInput
        placeholder="name@workemail.com"
        size="md"
        mb={20}
        autoComplete="false"
      />
      <Button fullWidth mt="xl" size="md" bg={theme.colors.primary[9]} mb={25}>
        Continue
      </Button>
      <Divider
        my="xs"
        label="OR"
        labelPosition="center"
        color="#B5BEC1"
        classNames={{ label: classes.label }}
      />
      <Button
        fullWidth
        mt="xl"
        size="md"
        bg={"transparent"}
        variant="outline"
        color={theme.colors.primary[9]}
        mb={25}
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
        <Anchor<"a">
          href="#"
          weight={700}
          color={theme.colors.primary[9]}
          onClick={event => event.preventDefault()}
        >
          Log In
        </Anchor>
      </Text>
    </Paper>
  );
};

export default SignupPage;
