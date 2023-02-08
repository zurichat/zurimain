import { Title, Text } from "@mantine/core";
import { RefObject } from "react";
import { Link } from "react-router-dom";
import useStyles from "./general";

type propType = {
  innerRef: RefObject<HTMLDivElement>;
};
const YourRights = ({ innerRef }: propType) => {
  const { classes } = useStyles();
  return (
    <div className={classes.pageSection} id="rights" ref={innerRef}>
      <Title className={classes.pageTitle}>Your Rights</Title>
      <Text className={classes.paragraph}>
        People have legal rights related to their personal data anywhere in the
        world. You may have the right to ask for access to your personal
        information and to ask to update, modify, or delete it, subject to any
        legal exceptions. Use your Services account's settings and tools to
        accomplish this. Contact the Customer who manages your workspace for
        further access and help if you are unable to use the settings and tools.
        For customer contact details, please visit{" "}
        <Link to="#">https://zuri.chat./account/settings.</Link>
      </Text>
      <Text className={classes.paragraph}>
        Zuri Chat primarily uses its legitimate interests, outlined above, to
        process your Personal Data when processing it in accordance with the
        General Data Protection Regulation or other applicable laws that call
        for a legal basis for processing Personal Data, such as the UK Data
        Protection Act and the Brazilian General Data Protection Act (Lei Geral
        de Proteço de Dados). You can object to the processing of your Personal
        Data where we depend on our legitimate interests to do so by getting in
        touch with us as instructed in the section below titled "Contacting Zuri
        Chat." Upon receiving your objection, we shall cease processing your
        information for the pertinent purposes unless we have sufficient
        justification in the situation or the processing is required by law.
      </Text>
    </div>
  );
};

export default YourRights;
