import { MantineProvider } from "@mantine/core";
import React from "react";
import { mantineConfig } from "../config";

interface MantineWrapperProps {
  children: React.ReactNode;
}
const MantineWrapper: React.FC<MantineWrapperProps> = ({ children }) => {
  return (
    <MantineProvider theme={mantineConfig} inherit>
      {children}
    </MantineProvider>
  );
};

export default MantineWrapper;
