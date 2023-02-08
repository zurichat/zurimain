import { Title, Text } from "@mantine/core";
import { RefObject } from "react";
import useStyles from "./general";

type propType = {
  innerRef: RefObject<HTMLDivElement>;
};
const DataRetention = ({ innerRef }: propType) => {
  const { classes } = useStyles();

  return (
    <div className={classes.pageSection} id="data-retention" ref={innerRef}>
      <Title className={classes.pageTitle}>Data Retention</Title>
      <Text fz="md" className={classes.paragraph}>
        Your personal information will only be kept by us for as long as it&apos;s
        required to fulfill the goals outlined in this privacy statement. For
        the life of the project and for as long beyond that as is necessary to
        conduct analyses, reply to peer review, or otherwise verify the input,
        Meta will keep the information it has collected from you when you take
        part in a feedback panel or feedback research. To the extent necessary
        to comply with our legal duties (for instance, if we must keep your
        personal information to comply with applicable legislation), to settle
        disputes, and to enforce our conditions, Meta will store and utilize
        your personal information. Once this period of time for retention has
        expired and we no longer have a clear need to keep that personal
        information on file, the relevant personal information will be deleted.
      </Text>
    </div>
  );
};

export default DataRetention;
