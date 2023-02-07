import React from 'react'
import { createStyles, Navbar, Title, Text, List } from "@mantine/core";
const useStyles = createStyles(theme => ({
  pageTitle: {
    fontSize: "24px",
    marginBottom: "12px"
  },
  pageSection: {
   marginBottom: "34px"
 },
 subHeading: {
  marginBottom: "12px",
  lineHeight: "20px"
},
paragraph: {
  marginBottom: "20px"
}
 }))
const Security = () => {
    const { classes } = useStyles();
  return (
    <div  className={classes.pageSection} id="security">
    <Title className={classes.pageTitle}>Security</Title>
    <Text className={classes.paragraph}>
      Data security is a top priority for Zuri Chat. Zuri Chat makes every
      effort to safeguard the information you submit against theft,
      mishandling, and unapproved access or disclosure. These procedures
      account for the sensitivity of the Information we gather, analyze, and
      store as well as the state of technology at the time. Internationally
      renowned security certifications have been awarded to Zuri Chat. Please
      visit our Security Practices to find out more about the policies and
      practices in place currently for the security and confidentiality of the
      Services. Zuri Chat cannot guarantee that Information will be completely
      protected from outside intervention during Internet transmission, while
      stored on our systems, or while otherwise in our care due to the nature
      of communications and information processing technology. You will be
      leaving our website when you click a link to a third-party website and e
      don't control or endorse what is on third-party sites.
    </Text>
  </div>
  )
}

export default Security