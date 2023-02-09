import { Container, createStyles, Grid } from "@mantine/core";
import React from "react";

interface HeroContainerProps {
  children: React.ReactNode[];
  reverseOnXs?: boolean;
  className?: string;
}

export default function HeroContainer(props: HeroContainerProps) {
  const { classes } = useStyles();

  return (
    <Container
      size={1240}
      className={
        classes.wrapper + (props.className ? ` ${props.className}` : "")
      }
    >
      <Grid
        align="center"
        gutter={56}
        {...(props.reverseOnXs ? { className: classes.reverseOnXs } : {})}
      >
        <Grid.Col sm={6}>{props.children[0]}</Grid.Col>
        <Grid.Col sm={6}>{props.children[1]}</Grid.Col>
      </Grid>
    </Container>
  );
}

const useStyles = createStyles(theme => ({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 80,
    color: theme.colors.dark[9],
    [`@media screen and (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingTop: 40,
      paddingBottom: 0
    }
  },
  reverseOnXs: {
    [`@media screen and (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column-reverse"
    }
  }
}));
