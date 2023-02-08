import { Text, Title } from "@mantine/core";
import { RefObject } from "react";
import useStyles from "./general";

type propType = {
  innerRef: RefObject<HTMLDivElement>;
};
const PrivacyModification = ({ innerRef }: propType) => {
  const { classes } = useStyles();
  return (
    <div
      className={classes.pageSection}
      id="privacyModification"
      ref={innerRef}
    >
      <Title className={classes.pageTitle}>
        Modifications To This Privacy Policy
      </Title>
      <Text className={classes.paragraph}>
        Zuri Chat may occasionally modify our privacy policies. The need for
        those modifications may arise as laws, rules, and industry standards
        change, or we may alter our offerings or operations. To stay updated, we
        invite you on examine our Privacy Policy. We will post any changes to
        this page. Zuri Chat will give you extra notice if we make changes that
        significantly modify your privacy rights, such as through the Services
        or by email. You should deactivate your Services account if you object
        to the changes made to this Privacy Policy. If you want to ask for the
        deletion of Personal Data that is under the Customer&apos;s control, get
        in touch with them.
      </Text>
    </div>
  );
};

export default PrivacyModification;
