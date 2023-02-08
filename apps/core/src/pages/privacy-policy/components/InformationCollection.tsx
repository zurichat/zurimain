import { RefObject } from "react";
import { Title, Text } from "@mantine/core";
import useStyles from "./general";

type propType = {
  innerRef: RefObject<HTMLDivElement>;
};
const InformationCollection = ({ innerRef }: propType) => {
  const { classes } = useStyles();
  return (
    <div
      className={classes.pageSection}
      ref={innerRef}
      id="informationCollection"
    >
      <Title className={classes.pageTitle}>Information we collect</Title>
      <Text className={classes.paragraph}>
        We collect the following information about you:
      </Text>
      <Text fw={700} fz="md">
        Your Contact Information
      </Text>
      <Text className={classes.paragraph}>
        We collect your email address as well as basic information like as your
        name, job title, organization name, and phone number when you, for
        example, seek information about our products, including Workplace,
        download resources, sign up for marketing mailings, request a free
        trial, or attend one of our events or conventions. You won&apos;t be
        able to, for instance, create an account to begin your free Workplace
        trial if you don&apos;t give us this information. When you agree to
        receive marketing-related electronic messages from us and are the
        administrator of your organization&apos;s account, we will gather your
        contact information.
      </Text>
      <Text fw={700} fz="md" className={classes.subHeading}>
        Data You Provide to Us
      </Text>
      <Text className={classes.paragraph}>
        You could give us further information when you get in touch with us. The
        kind of information depends on why you&apos;ve gotten in touch with us.
        For instance, if you experience a problem while using one of our sites,
        you can give us any information you deem necessary to resolve the
        problem including contact information (e.g., an email address). You
        could, for instance, write us an email containing details on the
        functionality of our website or other problems. Similar to this, you can
        provide us with information about your workplace or other details to
        help us answer to your inquiry if you ask us for details about, say, the
        Workplace Services.
      </Text>
      <Text fw={700} fz="md" className={classes.subHeading}>
        Data from surveys and user feedback
      </Text>
      <Text className={classes.paragraph}>
        Additionally, when you voluntarily take part in one of our surveys or
        comment panels, we learn more about you. For instance, we collaborate
        with outside service providers who manage our surveys and feedback
        panels, such as hosting a group of Workplace users who have chosen to
        join a panel. In certain situations, these businesses give us the data
        they gather about you, such as your age, gender, email, information
        about your job function and how you use our products, as well as any
        comments you may provide.
      </Text>
      <Text fw={700} fz="md" className={classes.subHeading}>
        Usage and Log Data
      </Text>
      <Text className={classes.paragraph}>
        We track data regarding your use of our websites, including
        service-related, diagnostic, and performance data. This information
        includes log files, diagnostic, crash, website, and performance logs and
        reports, as well as details about your activity (such as how you use our
        site and the timing, frequency, and length of your actions).
      </Text>
      <Text fw={700} fz="md" className={classes.subHeading}>
        Device And Connection Information
      </Text>
      <Text className={classes.paragraph}>
        When you visit or use our sites, we may collect information specific to
        your device and connection. Information like the hardware model,
        operating system details, battery life, signal quality, app version,
        browser details, mobile network details, connection details (like phone
        number, mobile operator, or ISP), language and time zone details, IP
        address, device operations details, and identifiers are included in this
        (including identifiers unique to Zuri Chat Company Products associated
        with the same device or account).
      </Text>
      <Text fw={700} fz="md" className={classes.subHeading}>
        Third Party Information
      </Text>
      <Text className={classes.paragraph}>
        We obtain information about you from third-party service providers and
        partners who assist us in running, providing, understanding,
        customizing, and supporting{" "}
      </Text>
      <Text fw={700} fz="md" className={classes.subHeading}>
        Cookie information
      </Text>
      <Text className={classes.paragraph}>
        Our websites employ cookies. A cookie is a very small piece of
        information that our website transmits to a user&apos;s browser and that
        the user&apos;s browser may then save on their hard disk so that we may
        recognize their computer or other device when they visit again. We also
        employ other technologies for a related purpose. In our Cookies Policy,
        you may read more about how we use cookies and other similar
        technologies on our workplace website.
      </Text>
    </div>
  );
};

export default InformationCollection;
