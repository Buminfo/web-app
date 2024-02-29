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
import Link from "next/link";
import React from "react";
import ExtractedImage from "../../utils/extractImage";
import TextTruncate from "react-text-truncate";
import Moment from "./Moment";
import { IconBookmark, IconHeart } from "@tabler/icons-react";
import Share from "./buttons/share";
import classes from "@/styles/CategoryCard.module.css";

function PostCard({ category }: any) {
  const theme = useMantineTheme();
  //   const category = categoryBlogs?.name;
  return (
    <Grid mt={"xl"} justify="center">
      {category?.blogs.slice(0, 4).map((post: any) => (
        <Grid.Col key={post.id} span={{ base: 12, xs: 6, md: 3 }}>
          <Card withBorder padding="lg" radius="md" className={classes.card}>
            <Card.Section mb="sm">
              <Link
                // onClick={() => {
                //   GetBlogsByCategory(categoryBlogs.name);
                // }}
                // href={`/${post.slug}?d=${post.id}&c=${categoryBlogs.name}`}
                href={`/${post.slug}?d=${post.id}&c=${category.name}&cd=${category.id}`}
              >
                {post.imageUrl == "" ||
                post.imageUrl == null ||
                !post.imageUrl.startsWith("https://") ||
                post.imageUrl.endsWith(".mp4") ? (
                  <ExtractedImage
                    logo={post.logo}
                    height={180}
                    data={post.description}
                  />
                ) : (
                  <Image
                    src={post.imageUrl}
                    alt="Top 50 underrated plants for house decoration"
                    height={180}
                  />
                )}
              </Link>
            </Card.Section>
            <Badge w="fit-content" variant="light">
              {/* <Link
                    href={`/categories/${encodeURIComponent(
                      categoryBlogs.name
                    )}?c=${categoryBlogs.name}`}
                  >
                </Link> */}
              {category.name}
            </Badge>
            <Link
              href={`/${post.slug}?d=${post.id}&c=${category.name}&cd=${category.id}`}
            >
              <Text fw={700} className={classes.title} mt="xs">
                <TextTruncate
                  line={2}
                  element="span"
                  truncateText="…"
                  text={post.title}
                  // textTruncateChild={<a href="#">Read on</a>}
                />
              </Text>
            </Link>

            <Group mt="lg">
              <Avatar src={post.logo} radius="sm" />
              <div>
                <Text fz={"xs"} fw={500}>
                  {post.websiteName}
                </Text>
                <Text fz="xs" c="dimmed">
                  posted <Moment time={post.created_at} />
                </Text>
              </div>
            </Group>

            <Card.Section className={classes.footer}>
              <Group justify="space-between">
                {/* <Text fz="xs" c="dimmed">
                  733 people liked this
                </Text> */}
                <Group gap={0}>
                  {/* <ActionIcon variant="subtle" color="gray">
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
                  </ActionIcon> */}
                  <ActionIcon variant="subtle" color="gray">
                    <Share category={category} post={post} theme={theme} />
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

export default PostCard;
