import { Group, Image, Text } from "@mantine/core";
import zuriChatLogo from "../assets/zurichat-logo.svg";

interface BrandAvatarProps {
  /** hide the brand logo */
  hideLogo?: boolean;
  /** hide the brand name */
  hideName?: boolean;
}
/**
 * A quick component to render the zuri chat brand avatar
 * (brand logo and name in horizontal flex).
 *
 * This is used in header and footer and may be used elsewhere
 * when necessary. You may need to wrap it in a Link component.
 *
 * @param {boolean} hideLogo hide the brand logo
 * @param {boolean} hideName hide the brand name
 */
export function BrandAvatar(props: BrandAvatarProps): JSX.Element {
  return (
    <Group align="center" spacing={8}>
      {props?.hideLogo ? null : (
        <Image src={zuriChatLogo} width={30} height={30} alt="ZuriChat Logo" />
      )}
      {props?.hideName ? null : (
        <Text component="h1" size={22} style={{ margin: 0 }}>
          Zuri Chat
        </Text>
      )}
    </Group>
  );
}
