import { createStyles } from "@mantine/core";

const usePrivacyPolicyStyles = createStyles(() => ({
  pageTitle: {
    fontSize: "1.5rem",
    marginBottom: "0.75rem",
    textTransform: "capitalize"
  },
  pageSection: {
    paddingTop: "0"
  },
  subHeading: {
    marginBottom: "0.75rem",
    lineHeight: "1.25rem"
  },
  paragraph: {
    marginBottom: "1.25rem"
  },
  list: {
    marginBottom: "1rem"
  }
}));

export default usePrivacyPolicyStyles;
