"use client";
import { useEffect, useState } from "react";
// import { getData } from "../../../utils/getData";
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
  Grid,
  Modal,
  Button,
} from "@mantine/core";
import {
  IconArrowBack,
  IconBookmark,
  IconHeart,
  IconXboxX,
} from "@tabler/icons-react";
import classes from "./BlogPage.module.css";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Share from "@/components/buttons/share";
import Link from "next/link";
import Moment from "@/components/Moment";
import BlogDescription from "./BlogDescription";
import ExtractedImage from "../../../utils/extractImage";
import Skeleton from "@/components/Skeleton";
import GetOneBlog from "../../../utils/getOneBlog";
import RelatedNews from "@/components/RelatedNews";
import { useDisclosure } from "@mantine/hooks";

function Page({ params }: any) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams?.get("d");

  const theme = useMantineTheme();
  const [blog, setBlog] = useState<any>(undefined);
  const [opened, { open, close }] = useDisclosure(false);

  const slug = params.slug;
  const category = searchParams?.get("c");
  const categoryId = searchParams?.get("cd");

  const categoryName = decodeURIComponent(category!.replace(/\+/g, " "));

  useEffect(() => {
    async function Filter() {
      const data = await GetOneBlog({ id });
      const blog = data?.data;
      if (blog !== undefined || "") {
        setBlog(blog);
      }
    }

    Filter();
  }, [id]);

  const [iFrame, setIFrame] = useState<boolean>(false);

  const pathname = usePathname();
  if (blog !== undefined || "") {
    if (pathname == `/${blog.slug}?category=${categoryName}`) {
      setIFrame(false);
    }
  }

  return (
    <>
      <Container>
        {/* <Text fs="oblique" fz="lg" c={"teal"}>
        <h1>BumInfo</h1>
      </Text> */}
        {blog ? (
          <Container>
            <Card withBorder radius="md" p={0} className={classes.card}>
              <Grid>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <div className={classes.body}>
                    <Link
                      href={`/categories/${encodeURIComponent(
                        categoryName
                      )}?c=${categoryName}`}
                    >
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
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  {blog.imageUrl == "" ||
                  blog.imageUrl == null ||
                  !blog.imageUrl.startsWith("https://") ||
                  blog.imageUrl.endsWith(".mp4") ? (
                    <ExtractedImage
                      logo={blog.logo}
                      height={260}
                      data={blog.description}
                    />
                  ) : (
                    <Image alt={blog.title} src={blog.imageUrl} height={260} />
                  )}
                </Grid.Col>
              </Grid>
            </Card>

            <Card withBorder radius="md" className={classes.card}>
              <Badge
                className={classes.rating}
                variant="gradient"
                gradient={{ from: "yellow", to: "red" }}
              >
                <Link
                  passHref
                  href={`/categories/${encodeURIComponent(
                    categoryName
                  )}?c=${categoryName}`}
                >
                  {categoryName}
                </Link>
              </Badge>

              <Text className={classes.title} fw={500} component="a">
                {blog.title}
              </Text>
              <BlogDescription description={blog.description} />

              <Button size="md" onClick={open} style={{ marginTop: "15px" }}>
                Read more...
              </Button>

              <Group justify="space-between" className={classes.footer}>
                <Center>
                  <Avatar src={blog.logo} size={24} radius="xl" mr="xs" />
                  <Text fz="xs" inline>
                    {blog.websiteName}
                  </Text>
                </Center>

                <Group gap={8} mr={0}>
                  {/* <ActionIcon className={classes.action}>
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
                  </ActionIcon> */}
                  <ActionIcon className={classes.action}>
                    <Share category={categoryName} post={blog} theme={theme} />
                  </ActionIcon>
                </Group>
              </Group>
            </Card>
            <Modal
              // mih={"100vh"}
              style={{ zIndex: 9100 }}
              closeButtonProps={{
                icon: <IconXboxX color="red" size={30} stroke={1.5} />,
              }}
              fullScreen
              size={"xl"}
              opened={opened}
              onClose={close}
              title="Buminfo"
            >
              <iframe
                src={blog.link}
                name="iframe_target"
                className={classes.iframe}
              ></iframe>
              <Button
                style={{
                  position: "fixed",
                  right: "5%",
                  top: "84%",
                  zIndex: 910,
                }}
                className={classes.modalButton}
                onClick={(e) => {
                  close();
                }}
              >
                <IconArrowBack style={{ marginRight: "5px" }} /> Go Back
              </Button>
            </Modal>
          </Container>
        ) : (
          <Skeleton />
        )}

        <RelatedNews category={categoryId} />
      </Container>
    </>
  );
}

export default Page;
