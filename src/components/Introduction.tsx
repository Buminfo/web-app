"use client";
import { Image, Container, Title, Text } from "@mantine/core";
import classes from "@/styles/Introduction.module.css";

export function Introduction() {
  return (
    <Container size="lg">
      <Image
        src="/images/buminfo.png"
        alt="img"
        // height={0}
        radius={"lg"}
        mah={250}
        className={classes.image}
      />
    </Container>
  );
}
