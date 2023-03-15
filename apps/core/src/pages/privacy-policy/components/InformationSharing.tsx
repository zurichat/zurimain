import { Title, Text } from "@mantine/core";
import React, { RefObject } from "react";
import usePrivacyPolicyStyles from "./general";
interface Props {
  innerRef: RefObject<HTMLDivElement>;
}

const InformationSharing: React.FC<Props> = ({ innerRef }) => {
  const { classes } = usePrivacyPolicyStyles();
  
  return (
    <div
      className={classes.pageSection}
      id="information-sharing"
      ref={innerRef}
    >
      <Title className={classes.pageTitle}>Information we share</Title>
      <Text className={classes.paragraph}>
        We provide guidelines that partners and other parties must abide by when
        using and disclosing the information we supply. Below is further
        information about the people we exchange information with:
      </Text>
      <Text fw={700} fz="md" className={classes.subHeading}>
        Service Providers and Third-Party Partners
      </Text>
      <Text className={classes.paragraph}>
        To carry out our Sites and Activities, we collaborate with third-party
        partners and service providers. When we share information with
        third-party service providers in this capacity, depending on how they
        support or collaborate with us, we require them to use your information
        on our behalf in accordance with our guidelines and agreements. We
        collaborate with a variety of partners and service providers,
        particularly those who help us with marketing, analytics, surveys,
        feedback panels, and refining our goods and services.
      </Text>
      <Text fw={700} fz="md">
        Zuri Chat Companies
      </Text>
      <Text className={classes.paragraph}>
        With other Zuri Chat Companies, we exchange data that we gather through
        our Activities, Sites, infrastructure, systems, and technology. Sharing
        enables us to advance integrity, security, and safety; customize offers
        and advertisements; adhere to legal requirements; create and supply
        features and integrations; and comprehend how users utilize and interact
        with Zuri Chat Company Products.
      </Text>
      <Text fw={700} fz="md" className={classes.subHeading}>
        Legal and Compliance
      </Text>
      <Text className={classes.paragraph}>
        Your information may be accessed, stored, used, and shared I in response
        to legal processes including search warrants, court orders, production
        orders, or subpoenas. Third parties, including civil litigants, law
        enforcement, and other government agencies, make these requests. In
        addition, I in accordance with the law that may be applicable, (ii) to
        help us investigate and respond to such requests, and (iii) to protect
        the safety, security, and integrity of Meta Products, users, employees,
        property, and the general public, we may also share your information
        with other organizations, including other Meta companies or third
        parties. This includes for the purposes of determining whether there has
        been a breach of contract, a violation of our terms or policies, a
        breaking of the law, or the detection, remediation, or prevention of
        fraud. When it is essential for the establishment, exercise, or defense
        of legal claims, as well as to look into or stop real or suspected loss
        or harm to people or property, your personal information may also be
        revealed.
      </Text>
      <Text fw={700} fz="md" className={classes.subHeading}>
        Sale of Business
      </Text>
      <Text className={classes.paragraph}>
        In accordance with current legislation, we may disclose your information
        to the prospective buyer if we sell or transfer all or a portion of our
        business to another party.
      </Text>
    </div>
  );
};

export default InformationSharing;
