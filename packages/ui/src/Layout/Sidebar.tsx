import { Navbar, Text } from "@mantine/core";
import React from "react";

export interface SidebarProps {
  opened: boolean;
}
export const Sidebar: React.FC<SidebarProps> = props => {
  const { opened } = props;

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>Application Sidebar</Text>
    </Navbar>
  );
};

export default Sidebar;
