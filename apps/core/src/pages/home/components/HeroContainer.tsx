import { Container, Grid } from "@mantine/core";

interface HeroContainerProps {
  children: React.ReactNode[];
}

export default function HeroContainer(props: HeroContainerProps) {
  return (
    <Container size={1240} fluid>
      <Grid>
        <Grid.Col span={6}>{props.children[0]}</Grid.Col>
        <Grid.Col span={6}>{props.children[1]}</Grid.Col>
      </Grid>
    </Container>
  );
}
