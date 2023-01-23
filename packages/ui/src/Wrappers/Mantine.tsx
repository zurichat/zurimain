import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import React from "react";
import { mantineConfig } from "../config";

interface MantineWrapperProps {
  children: React.ReactNode;
}
const MantineWrapper: React.FC<MantineWrapperProps> = ({ children }) => {
  return (
    <MantineProvider theme={mantineConfig as MantineThemeOverride} inherit>
      {children}
    </MantineProvider>
  );
};

export const withMantine = <T extends Record<string, unknown>>(
  Component: React.FC<T>
) => {
  const EnhancedComponent = (props: T) => {
    return (
      <MantineWrapper>
        <Component {...props} />
      </MantineWrapper>
    );
  };

  EnhancedComponent.displayName = `withMantine(${
    Component.displayName || Component.name
  })`;

  return EnhancedComponent;
};

export default MantineWrapper;
