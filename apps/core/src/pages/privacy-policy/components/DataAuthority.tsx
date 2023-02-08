import { Text, Title } from "@mantine/core";
import { RefObject } from "react";
import useStyles from "./general";

type propType = {
  innerRef: RefObject<HTMLDivElement>;
};

const DataAuthority = ({ innerRef }: propType) => {
  const { classes } = useStyles();
  return (
    <div className={classes.pageSection} id="data-auth" ref={innerRef}>
      <Title className={classes.pageTitle}>Data Protection Authority</Title>
      <Text fz="md" className={classes.paragraph}>
        You also have the right, according to applicable legislation, to I limit
        Zuri Chat&apos;s use of Other Information that Zuri Chat has collected about
        you, and (ii) file a complaint with your local data protection
        authority. However, if you reside in the European Economic Area or the
        United Kingdom and think we were unable to address your complaint or
        concern, you have the right to file a complaint with the appropriate
        supervisory body. You may find the contact information for your local
        data protection authority on the following page if you work or live in a
        nation that is a member of the European Union or the EEA. If you live in
        the UK, you may contact the UK supervisory authority, the Information
        Commissioner&apos;s Office.
      </Text>
    </div>
  );
};

export default DataAuthority;
