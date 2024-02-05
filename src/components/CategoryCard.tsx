"use client";
import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Text,
  rem,
  useMantineTheme,
} from "@mantine/core";
import Share from "./buttons/share";
import parse from "html-react-parser";
import {
  IconBookmark,
  IconCategoryFilled,
  IconChevronRight,
  IconHeart,
  IconLine,
} from "@tabler/icons-react";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { IconShare } from "@tabler/icons-react";
import classes from "@/styles/CategoryCard.module.css";

function CategoryCard({ allBlogs }: { allBlogs: any }) {
  const theme = useMantineTheme();

  const articleNum = 4;
  return (
    <Container size={"100%"} my="md" mx={"xl"}>
      {allBlogs.map((category: any) => (
        <div className={classes.categoryParent} key={category.name}>
          <div className={classes.categoryTitleParent}>
            <Link
              href={`/categories/${category.name}`}
              className={classes.categoryTitle}
            >
              {category.name}
              <span className={classes.dash}>&mdash;</span>
            </Link>
            {category?.length > 2 && (
              <Link
                className={classes.categoryTitle}
                href={`/categories/${category.name}`}
              >
                Show more
                <span className={classes.ico}>
                  &rsaquo;
                  {/* <IconChevronRight /> */}
                </span>
              </Link>
            )}
          </div>
          <Grid
            gutter={"xl"}
            //   span={{ base: 12, xs: 6, lg: 4 }}
          >
            {category?.blogs.slice(0, articleNum).map((post: any) => (
              <Grid.Col
                span={{ base: 12, xs: 4, lg: 3 }}
                key={post.slug}
                className="category-card"
              >
                <Card
                  // key={post.id}
                  withBorder
                  padding="lg"
                  radius="md"
                  className={classes.card}
                >
                  <Card.Section mb="sm">
                    <Image
                      src={post.imageUrl}
                      alt="Top 50 underrated plants for house decoration"
                      height={180}
                    />
                  </Card.Section>

                  <Badge w="fit-content" variant="light">
                    {category.name}
                  </Badge>

                  <Text fw={700} className={classes.title} mt="xs">
                    {post.title}
                  </Text>
                  {/* <Text>{post.title}</Text> */}
                  {/* <div>{parse(post.description)}</div> */}

                  <Group mt="lg">
                    <Avatar src={post.imageUrl} radius="sm" />
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
                          {/* <IconShare
                            style={{ width: rem(20), height: rem(20) }}
                            color={theme.colors.blue[6]}
                            stroke={1.5}
                          /> */}
                          <Share post={post} theme={theme} />
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
    </Container>
  );
}

export default CategoryCard;
