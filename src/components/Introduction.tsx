"use client";
import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Grid,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
// import image from "./image.svg";
import classes from "@/styles/Introduction.module.css";

export function Introduction() {
  return (
    <Container size="lg">
      <Grid className={classes.inne}>
        <Grid.Col span={{ base: 12, lg: 6 }} className={classes.contnt}>
          <Title className={classes.title}>
            Welcome to <span className={classes.highlight}>Buminfo</span>
          </Title>
          <Text c="dimmed" mt="md">
            Buminfo: Your ultimate news blog. Stay informed with accurate,
            engaging coverage. Politics, tech, science, entertainment, sports,
            and more. Join us as we explore the world&apos;s stories. Trust
            Buminfo for the latest updates.
          </Text>

          {/* <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              Source code
            </Button>
          </Group> */}
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Image
            src="/images/buminfo.png"
            alt="img"
            // height={0}
            radius={"lg"}
            mah={250}
            className={classes.imae}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}
