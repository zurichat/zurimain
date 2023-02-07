import { uiSliceActions, useAppDispatch } from "@zuri/utilities";
import { useState } from "react";
import {
  createStyles,
  Navbar,
  UnstyledButton,
  Tooltip,
  Title,
  Flex,
  Affix,
  Text,
  Anchor,
  Breadcrumbs,
  MediaQuery
} from "@mantine/core";
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings
} from "@tabler/icons";
import PrivacyScope from "./components/PrivacyScope";
import DataAuthority from "./components/DataAuthority";
import InformationCollection from "./components/InformationCollection";
import InformationProcessing from "./components/InformationProcessing";
import InformationSharing from "./components/InformationSharing";
import PrivacyModification from "./components/PrivacyModification";
import GlobalOperations from "./components/GlobalOperations";
import DataRetention from "./components/DataRetention";
import Security from "./components/Security";
// import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles(theme => ({
  wrapper: {
    display: "flex",
    width: "300px",
    backgroundColor: theme.colors.secondary[4]
  },
  pageheader: {
    marginTop: "60px",
    background: theme.colors.orange[0],
    padding: "24px 30px 32px 24px"
  },

  sidebar: {
    height: "100%",
    // width: "400px",
    // paddingLeft: "16px",
    paddingBottom: "50px"
    // position: "fixed"
  },

  sidebarSm: {
    display: "none"
  },

  mainWrap: {
    background: theme.colors.secondary[4]
  },

  subHeading: {
    marginBottom: "12px",
    lineHeight: "20px"
  },
  paragraph: {
    marginBottom: "20px"
  },

  pageintro: {
    fontSize: "34px",
    color: theme.white,
    marginBottom: "16px"
  },

  crumbs: {
    color: theme.white
  },

  mainSection: {
    // width: "calc(100% - 350px)",
    // marginLeft: "350px",
    padding: "40px 10px 100px 20px",
    height: "100vh",
    overflowY: "scroll",
    overflowX: "hidden"
  },

  aside: {
    flex: "0 0 60px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`
  },

  main: {
    flex: 1,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.secondary[4],
    padding: 0
  },

  mainLink: {
    width: 44,
    height: 44,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0]
    }
  },

  mainLinkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color
    }
  },

  title: {
    boxSizing: "border-box",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.secondary[4],
    padding: theme.spacing.md,
    paddingTop: 18,
    height: 60,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`
  },

  logo: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: 60,
    paddingTop: theme.spacing.md,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    marginBottom: theme.spacing.xl
  },

  link: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}px`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: 44,
    // lineHeight: "44px",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
      color: theme.colorScheme === "dark" ? theme.white : theme.black
    }
  },

  linkActive: {
    "&, &:hover": {
      borderLeftColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor
      }).background,
      backgroundColor: theme.fn.variant({
        variant: "filled",
        color: theme.primaryColor
      }).background,
      color: theme.white
    }
  }
}));


// breadcrumbs
const items = [
  { title: "Privacy & Terms ", href: "#" },
  { title: "Privacy policy", href: "#" }
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

const mainLinksMockdata = [
  { icon: IconHome2, label: "Home" },
  { icon: IconGauge, label: "Dashboard" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics" },
  { icon: IconCalendarStats, label: "Releases" },
  { icon: IconUser, label: "Account" },
  { icon: IconFingerprint, label: "Security" },
  { icon: IconSettings, label: "Settings" }
];

const linksMockdata = [
  { title: "The Scope of This Privacy Policy", id: "privacyScope" },
  { title: "Information we collect", id: "informationCollection" },
  {
    title: "How We Process Your Information, and the Laws That Support It",
    id: "information-processing"
  },
  { title: "Information we share", id: "information-sharing" },
  { title: "Data Retention", id: "data-retention" },
  { title: "Security", id: "security" },
  {
    title: "Modifications to this privacy policiy",
    id: "privacy-modification"
  },
  { title: "Our global operations", id: "global-ops" },
  { title: "Your Rights", id: "rights" },
  { title: "Data Protection Authority", id: "data-auth" },
  { title: "Limitation of liability", id: "limitation" },
  {
    title: "Member account, Password, and Security",
    id: ""
  },
  { title: "Use of services", id: "service-use" },
  { title: "Privacy Policy", id: "privacy" }
];

const PrivacyPage = () => {
  const dispatch = useAppDispatch();

  dispatch(uiSliceActions.setSidebarVisibility(false));
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Content");
  const [activeLink, setActiveLink] = useState("privacyScope");

  const mainLinks = mainLinksMockdata.map(link => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionDuration={0}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={cx(classes.mainLink, {
          [classes.mainLinkActive]: link.label === active
        })}
      >
        <link.icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = linksMockdata.map(link => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: activeLink === link.id
      })}
      href={`#${link.id}`}
      onClick={event => {
        // event.preventDefault();
        setActiveLink(link.id);
      }}
      key={link.id}
    >
      {link.title}
    </a>
  ));

  return (
    <>
      <div className={classes.pageheader}>
        <Title className={classes.pageintro}>Privacy policy</Title>
        <Breadcrumbs
          separator=">"
          className={classes.crumbs}
          styles={{
            breadcrumb: { color: "white" },
            separator: { color: "white" }
          }}
        >
          {items}
        </Breadcrumbs>
      </div>
      <Flex className={classes.mainWrap}>
        <MediaQuery query="(max-width: 426px)" styles={{ display: "none" }}>
          <Flex className={classes.sidebar}>
            <Flex className={classes.wrapper}>
              <div className={classes.main}>
                <Title order={4} className={classes.title}>
                  {active}
                </Title>
                {links}
              </div>
            </Flex>
          </Flex>
        </MediaQuery>

        <div className={classes.mainSection}>
          <div>
            <Text fw={700} fz="md" className={classes.subHeading}>
              Effective Date: January 23, 2023
            </Text>
            <Text className={classes.paragraph}>
              This Privacy Policy explains how Zuri Chat collects, uses, and
              discloses information associated with an identified or
              identifiable individual (referred to as "Personal Data" in this
              Privacy Policy) and what choices you have regarding this activity.
              Do not hesitate to contact us if you have any questions.
            </Text>
          </div>
          <PrivacyScope />
          <InformationCollection />
          <InformationProcessing />
          <InformationSharing />
          <Security />
          <DataRetention />
          <PrivacyModification />
          <GlobalOperations />
          <DataAuthority />
        </div>
      </Flex>
    </>
  );
};

export default PrivacyPage;
