"use client";
import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  Grid,
  Group,
  Image,
  Text,
  rem,
  useMantineTheme,
} from "@mantine/core";
import parse from "html-react-parser";
import { IconBookmark, IconHeart } from "@tabler/icons-react";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { IconShare } from "@tabler/icons-react";
import classes from "@/styles/CategoryCard.module.css";

function CategoryCard({ groupedData }: { groupedData: any }) {
  const theme = useMantineTheme();

  const articleNum = 4;
  return (
    <div>
      {Object.entries(groupedData).map(([category, items]: any) => (
        <div key={category}>
          <div className={classes.categoryTitleParent}>
            <Link
              href={`/categories/${category}`}
              className={classes.categoryTitle}
            >
              {category}
            </Link>
            {items.length > 2 && (
              <Link href={`/categories/${category}`}>Show more</Link>
            )}
          </div>
          <Grid
            gutter={"xl"}
            //   span={{ base: 12, xs: 6, lg: 4 }}
          >
            {items?.slice(0, articleNum).map((post: any) => (
              <Grid.Col
                span={{ base: 12, xs: 4, lg: 3 }}
                key={category}
                className="category-card"
              >
                <Card
                  key={post.id}
                  withBorder
                  padding="lg"
                  radius="md"
                  className={classes.card}
                >
                  <Card.Section mb="sm">
                    <Image
                      src={post.photo_url}
                      alt="Top 50 underrated plants for house decoration"
                      height={180}
                    />
                  </Card.Section>

                  <Badge w="fit-content" variant="light">
                    {post.category}
                  </Badge>

                  <Text fw={700} className={classes.title} mt="xs">
                    {post.title}
                  </Text>
                  <Text>{post.description}</Text>
                  {/* <div>{parse(post.content_html)}</div> */}

                  <Group mt="lg">
                    <Avatar src={post.photo_url} radius="sm" />
                    <div>
                      <Text fw={500}>Elsa Gardenowl</Text>
                      <Text fz="xs" c="dimmed">
                        posted{" "}
                        {moment(post.created_at, "YYYYMMDDhhmmss").fromNow()}
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

            {/* </Grid> */}
          </Grid>
        </div>
      ))}
    </div>
  );
}

export default CategoryCard;
