import { Image, Title } from "@mantine/core";
import { uiSliceActions, useAppDispatch } from "@zuri/utilities";
import hero0Image from "./assets/hero-0.png";
import HeroContainer from "./components/HeroContainer";

export default function HomePage() {
  const dispatch = useAppDispatch();
  dispatch(uiSliceActions.setSidebarVisibility(false));

  return (
    <HeroContainer>
      <Title>Hello World</Title>
      <Image src={hero0Image} />
    </HeroContainer>
  );
}
