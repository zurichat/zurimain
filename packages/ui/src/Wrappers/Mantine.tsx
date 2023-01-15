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

export const withMantine = <T extends {}>(Component: React.FC<T>) => {
  return (props: T) => {
    return (
      <MantineWrapper>
        <Component {...props} />
      </MantineWrapper>
    );
  };
};

export default MantineWrapper;
