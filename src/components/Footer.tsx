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
    </Container>
  );
}

export default Footer;
