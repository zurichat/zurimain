import { Group, Image, Text } from "@mantine/core";
import zuriChatLogo from "../assets/zurichat-logo.svg";

interface BrandAvatarProps {
  hideLogo?: boolean;
  hideName?: boolean;
}
/**
 * A quick component to render the zuri chat brand avatar
 * (brand logo and name in horizontal flex)
 * This is used in header and footer and may be used elsewhere
 * when necessary. You may need to wrap it in a Link component
 * Props:
 *     hideLogo: use this prop to hide the brand logo and show only the brand name
 *     hideName: use this prop to hide the brand name and show only the brand logo
 *
 */
export function BrandAvatar(props: BrandAvatarProps): JSX.Element {
  return (
    <Group align="center" spacing={8}>
      {props?.hideLogo ? null : (
        <Image src={zuriChatLogo} width={30} height={30} alt="ZuriChat Logo" />
      )}
      {props?.hideName ? null : (
        <Text component="h1" size={22}>
          Zuri Chat
        </Text>
      )}
    </Group>
  );
}
