import { Title, Text, List } from "@mantine/core";
import { RefObject } from "react";
import usePrivacyPolicyStyles from "./general";
interface Props {
  innerRef: RefObject<HTMLDivElement>;
}

const InformationProcessing: React.FC<Props> = ({ innerRef }) => {
  const { classes } = usePrivacyPolicyStyles();
  return (
    <div
      className={classes.pageSection}
      id="informationProcessing"
      ref={innerRef}
    >
      <Title className={classes.pageTitle}>
        How We Process Your Information, and the Laws That Support It
      </Title>
      <Text className={classes.paragraph}>
        To serve, enhance, and develop our Site and Activities, we analyze your
        information. You will be able to browse and explore our sites normally,
        get in touch with us for more information, access more resources, and
        register for free trials, among other things. In compliance with this
        Privacy Policy, we will also use your information to carry out our
        marketing initiatives. Additionally, we use the data you supply to
        deliver, enhance, and create surveys and/or feedback panels that you
        have opted into.
      </Text>
      <Text fw={700} fz="md" className={classes.subHeading}>
        Legal Obligation Compliance
      </Text>
      <Text className={classes.paragraph}>
        When Zuri Chat complies with a legal requirement, such as when
        responding to a legitimate legal request from a regulator, law
        enforcement agency, or another party, we may process more information.
        an order from law enforcement to produce documents, such as your profile
        picture or IP address, in connection with an investigation, such as a
        search warrant.
      </Text>
      <Text className={classes.paragraph}>
        In order to comply with a legal requirement, we use Workspace and
        account information, Usage information, Cookie information, Third-Party
        Services Information, Contact information, Third-Party data, Audio and
        video metadata, and Additional information submitted to Zuri chat.
      </Text>
      <Text fw={700} fz="md" className={classes.subHeading}>
        Legitimate Interests
      </Text>
      <Text className={classes.paragraph}>
        When your interests or basic rights and freedoms do not outweigh our
        legitimate interests or the legitimate interests of a third party, we
        depend on those (&quot;legitimate interests&quot;).
      </Text>
      <List>
        <List.Item className={classes.list}>
          To deliver, update, safeguard, and maintain our services, websites,
          and company.
        </List.Item>
        <List.Item className={classes.list}>
          To create and deliver search, education, and productivity
          applications, as well as extra features.
        </List.Item>
        <List.Item className={classes.list}>
          To look into and aid in stopping abuse and security issues.
        </List.Item>
        <List.Item className={classes.list}>
          To de-identify or aggregate data.
        </List.Item>
        <List.Item className={classes.list}>
          Respond to legal requests and share information with others, including
          law enforcement..
        </List.Item>
        <List.Item className={classes.list}>
          Your information may not be transferred, stored, or processed outside
          the African Economic Area.
        </List.Item>
        <List.Item className={classes.list}>
          To interact with you by responding to your inquiries, suggestions, and
          comments.
        </List.Item>
        <List.Item className={classes.list}>
          For managing accounts, paying bills, and other administrative tasks.
        </List.Item>
      </List>
    </div>
  );
};

export default InformationProcessing;
