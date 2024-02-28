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
import ExtractedImage from "../../utils/extractImage";
import TextTruncate from "react-text-truncate";
import { IconBookmark, IconHeart } from "@tabler/icons-react";
import Share from "./buttons/share";
import { useEffect, useState } from "react";
import classes from "@/styles/CategoryCard.module.css";
import Moment from "./Moment";

function RelatedNews({ category }: any) {
  const theme = useMantineTheme();
  const [blogs, setBlogs] = useState<any>(undefined);
  const [categoryBlogs, setCategoryBlogs] = useState<any>(undefined);
  // const [data, setData] = useState<any>();
  useEffect(() => {
    async function Filter() {
      const res = await fetch(
        `https://buminfo-api-4ul5i.ondigitalocean.app/blog_category/${category}`
      );
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        console.log("Failed to fetch data");
      }
      const categoryBlogs = await res.json();
      // const data = allBlogs?.data.data
      if (categoryBlogs !== undefined && categoryBlogs !== "") {
        setCategoryBlogs(categoryBlogs.data);
        setBlogs(categoryBlogs.data.blogs.data);
        // setPageNumber(2);
      }
      //
      // setData(allBlogs?.data.data);
      // if (
      //   categoryBlogs?.data.blogs.meta.page ==
      //   categoryBlogs?.data.blogs.meta.last_page
      // ) {
      //   setHasMore(false);
      // } else {
      //   setPageNumber(pageNumber + 1);
      // }

      // Fetch initial data
      // getData();
    }
    if (category !== undefined) {
      Filter();
    }
  }, [category]);

  return (
    <>
      <Text m={"xl"} fs={"italic"} size="xl">
        Related News
      </Text>
      <Grid mt={"xl"}>
        {blogs?.map((post: any) => (
          <Grid.Col key={post.id} span={{ base: 12, xs: 4 }}>
            <Card withBorder padding="lg" radius="md" className={classes.card}>
              <Card.Section mb="sm">
                <Link
                  // onClick={() => {
                  //   GetBlogsByCategory(categoryBlogs.name);
                  // }}
                  // href={`/${post.slug}?d=${post.id}&c=${categoryBlogs.name}`}
                  href={`/${post.slug}?d=${post.id}&c=${categoryBlogs.name}&cd=${categoryBlogs.id}`}
                >
                  {post.imageUrl == "" || post.imageUrl == null ? (
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
                {categoryBlogs.name}
              </Badge>
              <Link
                href={`/${post.slug}?d=${post.id}&c=${categoryBlogs.name}&cd=${categoryBlogs.id}`}
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
                      <Share category={category} post={post} theme={theme} />
                    </ActionIcon>
                  </Group>
                </Group>
              </Card.Section>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}

export default RelatedNews;
