import { createStyles, Text, Title } from "@mantine/core";

interface Props {
  title: string;
  subtitle?: string;
  boldSubtitle?: string;
}

const useStyles = createStyles(theme => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: "26px",
    lineHeight: "30px",
    fontWeight: 700,
    color: theme.colors.secondary[5],
    textAlign: "left"
  },
  subtitle: {
    textAlign: "left",
    marginBottom: 15,
    fontSize: 16,
    color: theme.colors.secondary[7],
    fontWeight: 400
  }
}));

export const FormTitle: React.FC<Props> = ({
  title,
  subtitle,
  boldSubtitle
}) => {
  const { classes } = useStyles();
  return (
    <div>
      <Title order={2} className={classes.title} align="center" mb={5}>
        {title}
      </Title>
      <Text className={classes.subtitle}>
        {subtitle}{" "}
        <Text display={"inline"} weight={700}>
          {boldSubtitle}
        </Text>
      </Text>
    </div>
  );
};

export default FormTitle;
