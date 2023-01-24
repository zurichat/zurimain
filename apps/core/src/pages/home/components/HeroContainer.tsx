import { Container, createStyles, Grid } from "@mantine/core";

interface HeroContainerProps {
  children: React.ReactNode[];
}

export default function HeroContainer(props: HeroContainerProps) {
  const { classes } = useStyles();

  return (
    <Container size={1240} className={classes.wrapper}>
      <Grid align="center" gutter={56}>
        <Grid.Col span={6}>{props.children[0]}</Grid.Col>
        <Grid.Col span={6}>{props.children[1]}</Grid.Col>
      </Grid>
    </Container>
  );
}

const useStyles = createStyles(theme => ({
  wrapper: {
    paddingTop: 100,
    paddingBottom: 100,
    color: theme.colors.dark[9]
  }
}));
