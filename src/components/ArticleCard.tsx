"use client";
import {
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Avatar,
  Badge,
  useMantineTheme,
  rem,
  Grid,
} from "@mantine/core";
import parse from "html-react-parser";
import { IconHeart, IconBookmark, IconShare } from "@tabler/icons-react";
import classes from "@/styles/ArticleCard.module.css";
import moment from "moment";

export function ArticleCard({ data }: { data: any }) {
  const theme = useMantineTheme();

  return (
    <Grid>
      <Grid.Col span={{ base: 12, xs: 4 }}>
        <Card withBorder radius="md" p={0} className={classes.card1}>
          <Group wrap="nowrap" gap={0}>
            <Image
              src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
              height={100}
            />
            <div className={classes.body}>
              <Text tt="uppercase" c="dimmed" fw={700} size="xs">
                technology
              </Text>
              <Text className={classes.title1} mt="xs" mb="md">
                The best laptop for Frontend engineers in 2022
              </Text>
              <Group wrap="nowrap" gap="xs">
                <Group gap="xs" wrap="nowrap">
                  <Avatar
                    size={20}
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                  />
                  <Text size="xs">Elsa Typechecker</Text>
                </Group>
                <Text size="xs" c="dimmed">
                  •
                </Text>
                <Text size="xs" c="dimmed">
                  Feb 6th
                </Text>
              </Group>
            </div>
          </Group>
        </Card>
      </Grid.Col>
      {data?.map((blog: any) => (
        <Grid.Col key={blog.id} span={{ base: 12, xs: 4 }}>
          <Card withBorder padding="lg" radius="md" className={classes.card}>
            <Card.Section mb="sm">
              <Image
                src={blog.photo_url}
                alt="Top 50 underrated plants for house decoration"
                height={180}
              />
            </Card.Section>

            <Badge w="fit-content" variant="light">
              {blog.category}
            </Badge>

            <Text fw={700} className={classes.title} mt="xs">
              {blog.title}
            </Text>
            {/* <div>{parse(blog.content_html)}</div> */}

            <Group mt="lg">
              <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
                radius="sm"
              />
              <div>
                <Text fw={500}>Elsa Gardenowl</Text>
                <Text fz="xs" c="dimmed">
                  posted {moment(blog.created_at, "YYYYMMDDhhmmss").fromNow()}
                </Text>
              </div>
            </Group>

            <Card.Section className={classes.footer}>
              <Group justify="space-between">
                <Text fz="xs" c="dimmed">
                  733 people liked this
                </Text>
                <Group gap={0}>
                  <ActionIcon variant="subtle" color="gray">
                    <IconHeart
                      style={{ width: rem(20), height: rem(20) }}
                      color={theme.colors.red[6]}
                      stroke={1.5}
                    />
                  </ActionIcon>
                  <ActionIcon variant="subtle" color="gray">
                    <IconBookmark
                      style={{ width: rem(20), height: rem(20) }}
                      color={theme.colors.yellow[6]}
                      stroke={1.5}
                    />
                  </ActionIcon>
                  <ActionIcon variant="subtle" color="gray">
                    <IconShare
                      style={{ width: rem(20), height: rem(20) }}
                      color={theme.colors.blue[6]}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Group>
              </Group>
            </Card.Section>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
}
