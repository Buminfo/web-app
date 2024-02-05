"use client";
import { useState } from "react";
import {
  Container,
  Anchor,
  Group,
  Burger,
  Box,
  Image,
  Button,
  Drawer,
  ScrollArea,
  Divider,
  Center,
  Collapse,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "@/styles/Header.module.css";
import { InputSearch } from "./inputs/InputSearch";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
  IconChevronDown,
} from "@tabler/icons-react";

const userLinks = [
  { link: "#", label: "Privacy & Security" },
  { link: "#", label: "Account settings" },
  { link: "#", label: "Support options" },
];

const mainLinks = [
  { link: "#", label: "Book a demo" },
  { link: "#", label: "Documentation" },
  { link: "#", label: "Community" },
  { link: "#", label: "Academy" },
  { link: "#", label: "Forums" },
];

export function Header({ allBlogs }: { allBlogs: any }) {
  // const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  // {
  //   Object.entries(groupedData).map(([category, items]) => (
  //     <Link
  //       onClick={() => setMobileMenuOpen(false)}
  //       key={category}
  //       className={
  //         pathname.includes(category)
  //           ? "block navbar-links"
  //           : "block navbar-links-hover pb-2"
  //       }
  //       href={`/categories/${category}`}
  //     >
  //       {category}
  //     </Link>
  //   ));
  // }

  const mainItems = allBlogs?.map((category: any, index: any) => (
    <Link
      href={"/" + category.name}
      key={category.name}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {category.name}
      {/* {items?.length} */}
    </Link>
  ));

  const secondaryItems = userLinks.map((item) => (
    <Anchor
      href={item.link}
      key={item.label}
      onClick={(event) => event.preventDefault()}
      className={classes.secondaryLink}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container size={"lg"}>
        <div className={classes.inner}>
          {/* <MantineLogo size={34} /> */}
          <Image height={40} src={"./next.svg"} alt="dfghj" />
          <InputSearch />

          <Box className={classes.links} visibleFrom="sm">
            <Group justify="flex-end">
              {/* {secondaryItems} */}
              <IconBrandYoutube />
              <IconBrandFacebook />
              <IconBrandTwitter />
            </Group>
          </Box>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.burger}
            size="sm"
            hiddenFrom="sm"
          />
        </div>
        <Group gap={0} justify="flex-end" className={classes.mainLinks}>
          {mainItems}
        </Group>
      </Container>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <Button className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </Button>
          {/* <Collapse in={linksOpened}>{links}</Collapse> */}
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </header>
  );
}
