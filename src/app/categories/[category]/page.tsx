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
  Loader,
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
import { useRouter, useSearchParams } from "next/navigation";
import classes from "@/styles/CategoryCard.module.css";
import Moment from "@/components/Moment";
import ExtractedImage from "../../../../utils/extractImage";
import { CategorySkeleton } from "@/components/Skeleton";
import GetBlogsByCategory from "../../../../utils/getBlogsByCategory";
import InfiniteScroll from "react-infinite-scroll-component";
function Page(this: any) {
  const router = useRouter();
  const theme = useMantineTheme();
  const [blogs, setBlogs] = useState<any>(undefined);
  const [categoryBlogs, setCategoryBlogs] = useState<any>(undefined);
  // const [data, setData] = useState<any>();
  const [pageNumber, setPageNumber] = useState<any>();
  const [hasMore, setHasMore] = useState<boolean>(true);

  const searchParams = useSearchParams();
  const category = searchParams?.get("c");
  //   const categoryBlogs.name = decodeURIComponent(category!);
  // const categoryBlogs.name = decodeURIComponent(category!.replace(/\+/g, " "));

  useEffect(() => {
    async function Filter() {
      const categoryBlogs = await GetBlogsByCategory({ category });

      if (categoryBlogs !== undefined || "") {
        setCategoryBlogs(categoryBlogs.data);
        setBlogs(categoryBlogs.data.blogs.data);
        setPageNumber(2);
      }
    }
    if (category !== undefined) {
      Filter();
    }
  }, [category]);

  const fetchData = async () => {
    // Simulated API call or data fetching
    const response = await fetch(
      `https://buminfo-api-4ul5i.ondigitalocean.app/blog_category/${category}?page=${pageNumber}`
    );
    const data = await response.json();
    const newData = data?.data.blogs;
    setPageNumber(newData?.meta.page);
    // Update the data state
    setBlogs((prevData: any) => prevData.concat(newData?.data));

    // Set hasMore to false if there is no more data to load
    if (newData?.meta.page == newData?.meta.last_page) {
      setHasMore(false);
    } else {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <Container>
      <h1>{category}</h1>
      {blogs ? (
        <InfiniteScroll
          dataLength={blogs.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<Loader color="blue" type="dots" />}
          endMessage={<div>No more data to load</div>}
          refreshFunction={router.refresh}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={
            <h3 style={{ textAlign: "center" }}>
              &#8595; Pull down to refresh
            </h3>
          }
          releaseToRefreshContent={
            <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
          }
        >
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
                      //   GetBlogsByCategory(categoryBlogs.name);
                      // }}
                      href={`/${post.slug}?category=${categoryBlogs.name}`}
                    >
                      {post.websiteName == "Naijanews" ||
                      post.websiteName == "Jadore-fashion" ||
                      post.websiteName == "Premiumtimesng" ? (
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
                    {/* <Link
                    href={`/categories/${encodeURIComponent(
                      categoryBlogs.name
                    )}?c=${categoryBlogs.name}`}
                  >
                </Link> */}
                    {categoryBlogs.name}
                  </Badge>
                  <Link href={`/${post.slug}?category=${categoryBlogs.name}`}>
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
                          <Share
                            category={category}
                            post={post}
                            theme={theme}
                          />
                        </ActionIcon>
                      </Group>
                    </Group>
                  </Card.Section>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </InfiniteScroll>
      ) : (
        <CategorySkeleton />
      )}
    </Container>
  );
}

export default Page;
