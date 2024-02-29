"use client";
import {
  Button,
  Container,
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
  const [opened, { open, close }] = useDisclosure(false);
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
    // {
    //   title: "",
    //   onclick: "",
    // },
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
      <div className={classes.linksContainer}>
        <Link href={"/"}>Home</Link>

        {links.map((link) => (
          <Text
            style={{ cursor: "pointer" }}
            td={"underline"}
            c={"gray"}
            onClick={link.onclick}
            key={link.id}
          >
            {link.title}
          </Text>
        ))}
      </div>
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
              <Button type="submit" className={classes.control}>
                Sign Up
              </Button>
            </Group>
          </div>
        </form>
      </div>
      {/* </Grid> */}
      <Modal opened={aboutOpened} onClose={closeAbout} title="About Us">
        {/* Modal content */}
        <h1>Modal modal1</h1>
      </Modal>
      <Modal opened={contactOpened} onClose={closeContact} title="Contact Us">
        {/* Modal content */}
        <h1>Modal modal 2</h1>
      </Modal>
      <Modal
        opened={disclaimerOpened}
        onClose={closeDisclaimer}
        title="Disclaimer"
      >
        {/* Modal content */}
        <h1>Modal modal 3</h1>
      </Modal>
      <Modal
        opened={privacyOpened}
        onClose={closePrivacy}
        title="Privacy Policy"
      >
        {/* Modal content */}
        <h1>Modal modal 4</h1>
      </Modal>

      {/* <Button onClick={open}>Open modal</Button> */}
    </Container>
  );
}

export default Footer;
