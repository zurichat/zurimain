import { Container, createStyles, Grid } from "@mantine/core";

interface HeroContainerProps {
  children: React.ReactNode[];
}

export default function HeroContainer(props: HeroContainerProps) {
  const { classes } = useStyles();

  return (
    <Container size={1240} className={classes.wrapper}>
      <Grid align="center" gutter={56}>
        <Grid.Col md={6}>{props.children[0]}</Grid.Col>
        <Grid.Col md={6}>{props.children[1]}</Grid.Col>
      </Grid>
    </Container>
  );
}

const useStyles = createStyles(theme => ({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 80,
    color: theme.colors.dark[9]
  }
}));
