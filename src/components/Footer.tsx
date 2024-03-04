"use client";
import {
  Button,
  Container,
  Grid,
  Group,
  Modal,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconBrandFacebook, IconBrandTwitter } from "@tabler/icons-react";
import Link from "next/link";
import classes from "@/styles/Footer.module.css";
import { useDisclosure } from "@mantine/hooks";

function Footer() {
  const [aboutOpened, { open: openAbout, close: closeAbout }] =
    useDisclosure(false);
  const [contactOpened, { open: openContact, close: closeContact }] =
    useDisclosure(false);
  const [disclaimerOpened, { open: openDisclaimer, close: closeDisclaimer }] =
    useDisclosure(false);
  const [privacyOpened, { open: openPrivacy, close: closePrivacy }] =
    useDisclosure(false);
  const [copyrightOpened, { open: openCopyright, close: closeCopyright }] =
    useDisclosure(false);
  //   Home | About Us | Contact Us | Disclaimer | Privacy Policy | Copyright | Subscribe To News Alert | Facebook | Twitter

  const links = [
    {
      id: 1,
      title: "About Us",
      onclick: openAbout,
    },
    {
      id: 2,
      title: "Contact Us ",
      onclick: openContact,
    },
    {
      id: 3,
      title: "Disclaimer",
      onclick: openDisclaimer,
    },
    {
      id: 4,
      title: "Privacy Policy",
      onclick: openPrivacy,
    },
    {
      id: 5,
      title: "Copyright",
      onclick: openCopyright,
    },
  ];

  // All trademarks and copyrights on this page are owned by their respective owners
  // Copyright © 2024. buminfo.com - All rights reserved
  return (
    <Container
      className={classes.container}
      size={"lg"}
      mt={"xl"}
      mb={"xl"}
      p={"xl"}
    >
      <Title className={classes.title}>
        Welcome to <span className={classes.highlight}>Buminfo</span>
      </Title>
      <Text mb={"xl"} c="dimmed" mt="md">
        Buminfo: Your ultimate news blog. Stay informed with accurate, engaging
        coverage. Politics, tech, science, entertainment, sports, and more. Join
        us as we explore the world&apos;s stories. Trust Buminfo for the latest
        updates.
      </Text>
      <Grid className={classes.linksContainer}>
        <Grid.Col span={{ base: 6, xs: 4, md: 2 }}>
          <Link href={"/"}>Home</Link>
        </Grid.Col>
        {links.map((link) => (
          <Grid.Col span={{ base: 6, xs: 4, md: 2 }} key={link.id}>
            <Text
              style={{ cursor: "pointer" }}
              td={"underline"}
              c={"gray"}
              onClick={link.onclick}
            >
              {link.title}
            </Text>
          </Grid.Col>
        ))}
      </Grid>
      <div
        style={{
          backgroundColor: "#3f4b75",
          borderRadius: "20px",
        }}
      >
        <form className={classes.form}>
          <Text c={"#fff"} fz="lg" fw={700} className={classes.title}>
            Sign Up for Newsletter
          </Text>

          <div className={classes.fields}>
            <TextInput
              // variant="light"
              type="email"
              label={<span style={{ color: "white" }}>Your email</span>}
              placeholder="hello@buminfo.dev"
              required
            />

            <Group justify="flex-end" mt="md">
              <Button type="button" className={classes.control}>
                Sign Up
              </Button>
            </Group>
          </div>
        </form>
      </div>
      {/* </Grid> */}
      <Modal
        size={"lg"}
        opened={aboutOpened}
        onClose={closeAbout}
        title="Buminfo"
      >
        <Title fz={"xl"} ta={"center"} my={"md"}>
          About Us
        </Title>
        <Title fz={"md"} my={"md"}>
          Unleashing Technology&apos;s Potential: Making a Difference Through
          Innovation
        </Title>
        <Text fz={"sm"}>
          Technology is a powerful tool, but its true impact lies in how we
          harness it. At our company, we&apos;re driven by a mission to develop
          groundbreaking applications that empower individuals and
          organizations. We strive to create positive change by transforming the
          way people access information, work, and live.
        </Text>
        <Title fz={"md"} my={"md"}>
          Bringing News Closer to Home: Buminfo.com
        </Title>
        <Text fz={"sm"}>
          Buminfo.com is your one-stop destination for curated news relevant to
          Nigerians around the world. We carefully select and organize news
          items from trusted sources, including major Nigerian newspapers and
          diverse online platforms. Our aim is to keep you informed and engaged
          with stories that matter to you.
        </Text>

        <Title fz={"md"} my={"md"}>
          Fueled by Passion and Expertise: Digitalsoft Applications Ltd
        </Title>
        <Text fz={"sm"}>
          Buminfo.com is a product of Digitalsoft Applications Ltd, a
          Lagos-based startup fueled by passionate individuals and supported by
          a network of international investors. We&apos;re committed to
          innovation and excellence, constantly striving to deliver the best
          possible experience for our users.
        </Text>

        <Title fz={"md"} my={"md"}>
          Beyond Headlines: Exploring a Diverse News Landscape
        </Title>
        <Text fz={"sm"}>
          We go beyond simply aggregating headlines. We curate a wide range of
          news items, covering everything from politics and business to
          entertainment and sports. Whether you&apos;re looking for in-depth
          analysis or quick updates, you&apos;ll find what you need on
          Buminfo.com.
        </Text>

        <Title fz={"md"} my={"md"}>
          Join the Conversation: Stay Informed and Connected
        </Title>
        <Text fz={"sm"}>
          Stay up-to-date on the latest developments and connect with a global
          community of Nigerians. Visit Buminfo.com today and discover the power
          of information at your fingertips.
        </Text>
      </Modal>
      <Modal
        size={"lg"}
        opened={contactOpened}
        onClose={closeContact}
        title="Buminfo"
      >
        <Title fz={"xl"} ta={"center"} my={"md"}>
          Contact Us
        </Title>
        <Text fz={"sm"}>
          {" "}
          Buminfo.com is owned and operated by Digitalsoft Applications Ltd, a
          Start-Up company based in Lagos, Nigeria. The company is supported and
          funded by a group of international investors.
        </Text>
        <Title fz={"md"} my={"md"}>
          You can contact us using the information below:
        </Title>
        <Text fz={"sm"}>Digitalsoft Applications Ltd Lagos, Nigeria.</Text>
        <Text c={"blue"} fz={"sm"}>
          <a href="mailto:buminfocom@gmail.com">buminfocom@gmail.com</a>
        </Text>
      </Modal>
      <Modal
        size={"lg"}
        opened={disclaimerOpened}
        onClose={closeDisclaimer}
        title="Buminfo"
      >
        <Title fz={"xl"} ta={"center"} my={"md"}>
          Disclaimer
        </Title>
        {/* <Title fz={"md"} my={"md"}></Title> */}
        <Text fz={"sm"}>
          Buminfo.com only organizes news items from different sources and
          should not be held responsible for any news item on this website.
          Opinions and issues conveyed here are not ours but our respective
          sources.
        </Text>
      </Modal>
      <Modal
        size={"lg"}
        opened={privacyOpened}
        onClose={closePrivacy}
        title="Buminfo"
      >
        <Title fz={"xl"} ta={"center"} my={"md"}>
          Privacy Policy
        </Title>
        <Title fz={"md"} my={"md"}>
          We Respect Your Privacy
        </Title>
        <Text fz={"sm"}>
          We use third-party advertising companies to serve ads when you visit
          our Web site. These companies may use information (not including your
          name, address email address or telephone number) about your visits to
          this and other Web sites in order to provide advertisements about
          goods and services of interest to you. If you would like more
          information about this practice and to know your choices about not
          having this information used by these companies, click here
        </Text>
        <Text fz={"sm"} mt={"md"}>
          This site uses a tool which collects your requests for pages and
          passes elements of them to search engines to assist them in indexing
          this site. We control the configuration of the tool and are
          responsible for any information sent to the search engines.
        </Text>
        <Text fz={"sm"}></Text>
      </Modal>

      <Modal
        size={"lg"}
        opened={copyrightOpened}
        onClose={closeCopyright}
        title="Buminfo"
      >
        <Title fz={"xl"} ta={"center"} my={"md"}>
          Copyright Issues
        </Title>
        <Text fz={"sm"}>
          Buminfo.com is an online news aggregation website whose major aim is
          to organize News Items we believe are of interest to Nigerians based
          locally and in the Diaspora. In carrying out our objectives, we source
          news items from various sources including major Nigerian Newspapers.
          In doing this, we try not to infringe on any right-of-usage by
          reviewing the TOS of most of our sources, but because TOS could change
          at any time and we do not guaranttee to keep track of all our
          sources&apos; TOS. We implore any source (medium) that feels we
          encroached on its copyright to give us notice of de-linking source via
          our Contact Page, we promise to delist the medium/source from our
          source database and discontinue accessing new news items within 48
          hours of confirming the request originated from the news
          medium/source.
        </Text>
        <Text mt={"md"} fz={"sm"}>
          We only access news headlines and summaries of our source news items,
          and offcourse we link back the items&apos; sources for full news.
          Thanks.
        </Text>
      </Modal>

      {/* <Button onClick={open}>Open modal</Button> */}
    </Container>
  );
}

export default Footer;
