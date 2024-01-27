"use client";

import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Container,
  Grid,
} from "@mantine/core";
import { ArticleCard } from "./ArticleCard";
import CategoryCard from "./CategoryCard";

export default function Demo({ groupedData }: { groupedData: any }) {
  return (
    <Container size={"100%"} my="md" mx={"xl"}>
      <CategoryCard groupedData={groupedData} />

      {/* <Grid.Col span={{ base: 12, xs: 8 }}></Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}></Grid.Col>
          <Grid.Col span={{ base: 12, xs: 3 }}></Grid.Col>
          <Grid.Col span={{ base: 12, xs: 3 }}></Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}></Grid.Col> */}
    </Container>
    // <Card shadow="sm" padding="lg" radius="md" withBorder>
    //   <Card.Section>
    //     <Image
    //       src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
    //       height={160}
    //       alt="Norway"
    //     />
    //   </Card.Section>

    //   <Group justify="space-between" mt="md" mb="xs">
    //     <Text fw={500}>Norway Fjord Adventures</Text>
    //     <Badge color="pink">On Sale</Badge>
    //   </Group>

    //   <Text size="sm" c="dimmed">
    //     With Fjord Tours you can explore more of the magical fjord landscapes
    //     with tours and activities on and around the fjords of Norway
    //   </Text>

    //   <Button color="blue" fullWidth mt="md" radius="md">
    //     Book classic tour now
    //   </Button>
    // </Card>
  );
}
