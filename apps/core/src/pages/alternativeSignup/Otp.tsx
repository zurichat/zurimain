import { useState } from "react";
import {
  Anchor,
  Button,
  createStyles,
  Flex,
  NumberInput,
  Paper,
  Text
} from "@mantine/core";
import { FormTitle } from "@zuri/ui";
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
  outlineBtn: {
    color: theme.colors.secondary[5],
    borderColor: theme.colors.secondary[5]
  },
  link: {
    color: theme.colors.secondary[9]
  },
  continueBtn: {
    "&:invalid": { background: theme.colors.secondary[5] }
  },
  input: {
    textAlign: "center"
  }
}));

export const AlternativeSignupOtp = () => {
  const [emailInput, setEmailInput] = useState("");
  const { classes, theme } = useStyles();
  return (
    <Paper className={classes.form} radius={0}>
      <FormTitle
        title="Verify your email address!"
        subtitle="We have sent your code "
        boldSubtitle={"Kamsiyo@gmail.com"}
        subtitleContinue=" Please enter it below before it expires."
      />
      <Text
        color={theme.colors.tertiary[1]}
        weight="700"
        size={16}
        mt={15}
        mb={5}
      >
        Header here
      </Text>
      <Flex gap={10} justify="space-between">
        <NumberInput hideControls className={classes.input} h={45} w={50} />
        <NumberInput hideControls className={classes.input} h={45} w={50} />
        <NumberInput hideControls className={classes.input} h={45} w={50} />
        <NumberInput hideControls className={classes.input} h={45} w={50} />
        <NumberInput hideControls className={classes.input} h={45} w={50} />
        <NumberInput hideControls className={classes.input} h={45} w={50} />
      </Flex>
      <Text
        align="right"
        color={theme.colors.secondary[7]}
        weight={"400"}
        size={16}
        mr={5}
      >
        Didn't get the code ?{"  "}
        <Anchor
          component={Link}
          to="/signup"
          weight={400}
          color={theme.colors.secondary[9]}
          className={classes.link}
        >
          Resend Code
        </Anchor>
      </Text>
      <Button
        disabled={!emailInput}
        fullWidth
        mt={20}
        size="md"
        bg={theme.colors.secondary[5]}
        className={classes.continueBtn}
      >
        Continue
      </Button>
    </Paper>
  );
};

export default AlternativeSignupOtp;
