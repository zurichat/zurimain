import { createStyles, Text, Image } from "@mantine/core";
import Logo from "./../assets/zurichat-white.svg";

const useStyles = createStyles(theme => ({
  formHeader: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    // height: "75px",
    marginTop: 60,
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    paddingLeft: "110px",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingLeft: "17px",
      marginTop: 30
    }
  },

  formLogo: {
    display: "flex",
    gap: "10px",
    justifyContent: "start",
    alignItems: "center"
  }
}));

export const FormHeader: React.FC = () => {
  const { classes } = useStyles();
  return (
    <header className={classes.formHeader}>
      <div className={classes.formLogo}>
        <Image src={Logo} />
      </div>
    </header>
  );
};

export default FormHeader;
