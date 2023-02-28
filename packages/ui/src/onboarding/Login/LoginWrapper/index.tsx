import { createStyles, Flex } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { withMantine } from "../../../Wrappers/Mantine";
import FormHeader from "../components/FormHeader";

const useStyles = createStyles(theme => ({
  pageContainer: {
    height: "100vh",
    background: theme.colors["secondary"][4]
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
  }
}));

export const LoginWrapper: React.FC = withMantine(() => {
  const { classes } = useStyles();
  return (
    <div className={classes.pageContainer}>
      <Flex className={classes.formContainer} justify="center" align="center">
        <FormHeader />
        <Outlet />
      </Flex>
    </div>
  );
});

export default LoginWrapper;
