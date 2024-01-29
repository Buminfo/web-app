"use client";
import { useState } from "react";
import { Container, Anchor, Group, Burger, Box, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
// import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "@/styles/Header.module.css";
import { InputSearch } from "./inputs/InputSearch";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
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

export function Header({ groupedData }: { groupedData: any }) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

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

  const mainItems = Object.entries(groupedData).map(
    ([category, items]: any, index) => (
      <Link
        href={"/" + category}
        key={category}
        className={classes.mainLink}
        data-active={index === active || undefined}
        onClick={(event) => {
          event.preventDefault();
          setActive(index);
        }}
      >
        {category}
        {/* {items?.length} */}
      </Link>
    )
  );

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
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            hiddenFrom="sm"
          />
        </div>
        <Group gap={0} justify="flex-end" className={classes.mainLinks}>
          {mainItems}
        </Group>
      </Container>
    </header>
  );
}
