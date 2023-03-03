import { BackgroundImage, createStyles, Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { withMantine } from "../../../Wrappers/Mantine";
import FormHeader from "../components/FormHeader";
import OnboardingPattern from "../../../assets/onboarding-bg-pattern.svg";

const useStyles = createStyles(theme => ({
  pageContainer: {
    height: "100vh",
    background: theme.colors["secondary"][5]
  },

  wrapper: {
    width: "100%",
    height: "100%",
    minHeight: "100vh"
  },

  formContainer: {
    width: "100%",
    height: "100%",
    positon: "relative",
    padding: "17px"
  },

  onboardingPattern: {
    height: "100%"
  }
}));

export const LoginWrapper: React.FC = withMantine(() => {
  const { classes } = useStyles();
  return (
    <div className={classes.pageContainer}>
      <BackgroundImage
        src={OnboardingPattern}
        className={classes.onboardingPattern}
      >
        <Flex className={classes.formContainer} justify="center" align="center">
          <FormHeader />
          <Outlet />
        </Flex>
      </BackgroundImage>
    </div>
  );
});

export default LoginWrapper;
