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
import { IconBookmark, IconHeart } from "@tabler/icons-react";
import TextTruncate from "react-text-truncate";
import Share from "@/components/buttons/share";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getData } from "../../../../utils/getData";
import { useSearchParams } from "next/navigation";
import classes from "@/styles/CategoryCard.module.css";
import Moment from "@/components/Moment";
import ExtractedImage from "../../../../utils/extractImage";
import { CategorySkeleton } from "@/components/loading";
function Page() {
  const theme = useMantineTheme();
  const [blogs, setBlogs] = useState<any>(undefined);
  const searchParams = useSearchParams();
  const category = searchParams?.get("c");
  //   const categoryName = decodeURIComponent(category!);
  const categoryName = decodeURIComponent(category!.replace(/\+/g, " "));

  useEffect(() => {
    async function Filter() {
      const allBlogs = await getData();
      const categoryBlogs = allBlogs?.find(
        (post: any) => post.name == categoryName
      );

      if (categoryBlogs !== undefined || "") {
        setBlogs(categoryBlogs.blogs);
      }
    }

    Filter();
  }, [categoryName]);

  return (
    <Container>
      {blogs ? (
        <Grid>
          {blogs?.map((post: any) => (
            <Grid.Col key={post.id} span={{ base: 12, xs: 4 }}>
              <Card
                withBorder
                padding="lg"
                radius="md"
                className={classes.card}
              >
                <Card.Section mb="sm">
                  <Link
                    // onClick={() => {
                    //   GetBlogsByCategory(categoryName);
                    // }}
                    href={`/${post.slug}?category=${categoryName}`}
                  >
                    {post.websiteName == "Naijanews" ? (
                      <ExtractedImage height={180} data={post.description} />
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
                  <Link
                    href={`/categories/${encodeURIComponent(
                      categoryName
                    )}?c=${categoryName}`}
                  >
                    {categoryName}
                  </Link>
                </Badge>
                <Link href={`/${post.slug}?category=${categoryName}`}>
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
      ) : (
        <CategorySkeleton />
      )}
    </Container>
  );
}

export default Page;
