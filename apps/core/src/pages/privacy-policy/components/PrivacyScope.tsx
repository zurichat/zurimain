import { RefObject } from "react";

import { Title, Text } from "@mantine/core";
import useStyles from "./general";

interface propType {
  innerRef: RefObject<HTMLDivElement>;
}

const PrivacyScope = ({ innerRef }: propType) => {
  const { classes } = useStyles();
  return (
    <div id="privacyScope" ref={innerRef} className={classes.pageSection}>
      <Title tt="capitalize" fw={700} className={classes.pageTitle}>
        The Scope of This Privacy Policy{" "}
      </Title>
      <Text className={classes.paragraph}>
        This privacy statement describes the data practices we use to provide
        our Websites, as well as the marketing and customer service-related
        activities we engage in (collectively, "Activities"). We outline the
        data we gather about you in connection with our sites and activities in
        this privacy statement. We then go over how we use and disclose this
        information, as well as how you can exercise any applicable rights.
      </Text>
      <Text className={classes.paragraph}>
        This Privacy Policy does not apply to any third-party products,
        services, or businesses who offer their services in accordance with
        their own terms of service and privacy policies, including any
        third-party software or applications that connect with the Services via
        the Zuri Chat platform ("Third-Party Services"). The processing of data,
        including messages, files, and other content supplied through Services
        accounts (collectively, "Customer Data"), is governed separately by a
        separate agreement (the "Customer Agreement"), which also controls
        delivery, access, and use of the Services. The instance of the Services
        (its "Workspace") and any related Customer Data are under the control of
        the business (such as your employer or another company or person) that
        entered into the Customer Agreement (the "Customer"). Please get in
        touch with the to ask any queries you may have concerning specific
        Workspace settings and privacy policies.
      </Text>
      <Text className={classes.paragraph}>
        If you have an account, you may look up the administrators and owner(s)
        of your workspace by visiting http://zurichat.com/account/team(s). You
        should ask the Customer who provided the invitation for help if you have
        received an invitation to join a Workspace but have not yet made an
        account.
      </Text>
    </div>
  );
};

export default PrivacyScope;
