"use client";
import { useEffect, useState } from "react";
import { getData } from "../../../utils/getData";
import {
  Badge,
  Card,
  Image,
  Text,
  ActionIcon,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  rem,
  Container,
} from "@mantine/core";
import { IconBookmark, IconHeart, IconShare } from "@tabler/icons-react";
import classes from "./BlogPage.module.css";
import parse from "html-react-parser";
// import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import Share from "@/components/buttons/share";
import Link from "next/link";
import Moment from "@/components/Moment";

function Page({ params }: any) {
  const searchParams = useSearchParams();
  const category = searchParams?.get("category");

  const theme = useMantineTheme();
  const [blog, setBlog] = useState<any>(undefined);

  const slug = params.slug;

  const categoryName = decodeURIComponent(category!.replace(/\+/g, " "));

  useEffect(() => {
    async function Filter() {
      const allBlogs = await getData();
      const categoryBlogs = allBlogs?.find(
        (post: any) => post.name == categoryName
      );

      if (categoryBlogs !== undefined || "") {
        const blogs = categoryBlogs.blogs;
        if (blogs !== undefined || "") {
          const gottenBlog = blogs.find((post: any) => post.slug == slug);
          if (gottenBlog !== undefined || "") {
            setBlog(gottenBlog);
          }
        }
      }
    }

    Filter();
  }, [categoryName]);

  return (
    <Container>
      {/* <Text fs="oblique" fz="lg" c={"teal"}>
        <h1>BumInfo</h1>
      </Text> */}
      {blog ? (
        <Container>
          <Card withBorder radius="md" p={0} className={classes.card}>
            <Group wrap="nowrap" gap={0}>
              <div className={classes.body}>
                <Link href={`/categories/${categoryName}`}>
                  <Text tt="uppercase" c="dimmed" fw={700} size="xs">
                    {categoryName}
                  </Text>
                </Link>
                <Text fz="xl" className={classes.title} mt="xs" mb="md">
                  <h2>{blog.title}</h2>
                </Text>
                <Group wrap="nowrap" gap="xs">
                  <Group gap="xs" wrap="nowrap">
                    <Avatar size={20} src={blog.logo} />
                    <Text size="xs">{blog.websiteName}</Text>
                  </Group>
                  <Text size="xs" c="dimmed">
                    •
                  </Text>
                  <Text size="xs" c="dimmed">
                    <Moment time={blog.created_at} />
                  </Text>
                </Group>
              </div>
              <Image src={blog.imageUrl} height={260} />
            </Group>
          </Card>

          <Card withBorder radius="md" className={classes.card}>
            {/* <Card.Section>
              <Image src={blog.imageUrl} />
            </Card.Section> */}
            <Link href={`/categories/${categoryName}`}>
              <Badge
                className={classes.rating}
                variant="gradient"
                gradient={{ from: "yellow", to: "red" }}
              >
                {categoryName}
              </Badge>
            </Link>

            <Text className={classes.title} fw={500} component="a">
              {blog.title}
            </Text>

            <div>{parse(blog.description)}</div>
            <Group justify="space-between" className={classes.footer}>
              <Center>
                <Avatar src={blog.logo} size={24} radius="xl" mr="xs" />
                <Text fz="xs" inline>
                  {blog.websiteName}
                </Text>
              </Center>

              <Group gap={8} mr={0}>
                <ActionIcon className={classes.action}>
                  <IconHeart
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.red[6]}
                  />
                </ActionIcon>
                <ActionIcon className={classes.action}>
                  <IconBookmark
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.yellow[7]}
                  />
                </ActionIcon>
                <ActionIcon className={classes.action}>
                  <Share category={categoryName} post={blog} theme={theme} />
                </ActionIcon>
              </Group>
            </Group>
          </Card>
        </Container>
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
}

export default Page;
