import { createStyles, Text, Title } from "@mantine/core";

interface Props {
  title: string;
  subtitle?: string;
  boldSubtitle?: string;
}

const useStyles = createStyles(theme => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: "40px",
    lineHeight: "50px",
    fontWeight: 700,
    color: theme.colors.text[3]
  }
}));

export const FormTitle: React.FC<Props> = ({
  title,
  subtitle,
  boldSubtitle
}) => {
  const { classes, theme } = useStyles();
  return (
    <div>
      <Title order={2} className={classes.title} align="center" mt="md" mb={20}>
        {title}
      </Title>
      <Text
        align="center"
        mb={20}
        size={20}
        weight={400}
        color={theme.colors.text[1]}
      >
        {subtitle}{" "}
        <Text display={"inline"} weight={700}>
          {boldSubtitle}
        </Text>
      </Text>
    </div>
  );
};

export default FormTitle;
