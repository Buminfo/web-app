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
      <Title className={classes.title}>
        Welcome to <span className={classes.highlight}>Buminfo</span>
      </Title>
      <Text c="dimmed" mt="md">
        Buminfo: Your ultimate news blog. Stay informed with accurate, engaging
        coverage. Politics, tech, science, entertainment, sports, and more. Join
        us as we explore the world&apos;s stories. Trust Buminfo for the latest
        updates.
      </Text>
    </Container>
  );
}
