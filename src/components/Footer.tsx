"use client";
import { Button, Container, Grid, Group, Text, TextInput } from "@mantine/core";
import { IconBrandFacebook, IconBrandTwitter } from "@tabler/icons-react";
import Link from "next/link";
import classes from "@/styles/Footer.module.css";

function Footer() {
  //   Home | About Us | Contact Us | Disclaimer | Privacy Policy | Copyright | Subscribe To News Alert | Facebook | Twitter

  // All trademarks and copyrights on this page are owned by their respective owners
  // Copyright © 2024. buminfo.com - All rights reserved
  return (
    <Container size={"lg"} mt={"xl"} mb={"xl"}>
      <Grid>
        <Grid.Col
          span={{ base: 12, md: 6 }}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/"}> About Us</Link>
          <Link href={"/"}>Contact Us </Link>
          <Link href={"/"}>Disclaimer</Link>
          <Link href={"/"}>Privacy Policy</Link>
          <a href={"/"}>
            <IconBrandFacebook />
          </a>
          <a href={"/"}>
            <IconBrandTwitter />
          </a>
        </Grid.Col>
        <Grid.Col
          style={{
            backgroundColor: `var(--mantine-color-blue-6)`,
            borderRadius: "20px",
          }}
          // bg={"blue"}
          span={{ base: 12, md: 6 }}
        >
          <form
            className={classes.form}
            // onSubmit={(event) => event.preventDefault()}
          >
            <Text c={"#fff"} fz="lg" fw={700} className={classes.title}>
              Sign Up for Newsletter
            </Text>

            <div className={classes.fields}>
              <TextInput
                type="email"
                label="Your email"
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
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Footer;
