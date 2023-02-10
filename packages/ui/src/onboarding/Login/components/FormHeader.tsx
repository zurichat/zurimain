import { createStyles, Text, Image } from "@mantine/core";
import Logo from "./../assets/Zurilogo.svg";

const useStyles = createStyles(theme => ({
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
    background: "#FCF7F1",
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

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  }
}));

const FormHeader: React.FC = () => {
  const { classes } = useStyles();
  return (
    <header className={classes.formHeader}>
      <div className={classes.formLogo}>
        <Image src={Logo} />
        <Text color={"#1E2122"} size={25} weight={900}>
          ZuriChat
        </Text>
      </div>
    </header>
  );
};

export default FormHeader;
