"use client";

import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  Grid,
  Group,
  Image,
  Menu,
  Text,
  rem,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ExtractedImage from "../../utils/extractImage";
import TextTruncate from "react-text-truncate";
import Moment from "./Moment";
import { IconBookmark, IconHeart, IconShare } from "@tabler/icons-react";
import Share from "./buttons/share";
import classes from "@/styles/CategoryCard.module.css";
import {
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

function PostCard({ category, posts, slice }: any) {
  const theme = useMantineTheme();
  const [blogs, setBlogs] = useState<number>();
  const [md, setMd] = useState<number>(4);
  // const [xs, setXs] = useState<number>()
  //   const category = categoryBlogs?.name;
  useEffect(() => {
    if (slice) {
      setBlogs(4);
      setMd(3);
    }
  }, [slice]);

  return (
    <Grid mt={"xl"} justify="center">
      {posts?.slice(0, blogs).map((post: any) => (
        <Grid.Col key={post.id} span={{ base: 12, xs: 6, md: md }}>
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
                    {/* <Share category={category} post={post} theme={theme} /> */}
                    <Menu
                      // className={classes.action}
                      transitionProps={{ transition: "pop-top-right" }}
                      position="top-end"
                      // width={220}
                      withinPortal
                    >
                      <Menu.Target>
                        <IconShare
                          style={{ width: rem(25), height: rem(25) }}
                          color={theme.colors.blue[6]}
                          stroke={1.5}
                        />
                      </Menu.Target>
                      <Menu.Dropdown className={classes.dropdown}>
                        <TwitterShareButton
                          hashtags={["Buminfo", "buminfo", category.name]}
                          related={["buminfo"]}
                          url={`https://www.buminfo.co/${post.slug}?d=${post.id}&c=${category.name}&cd=${category.id}`}
                          title={post.title}
                          className={classes.dropItem}
                        >
                          <XIcon size={32} round />
                        </TwitterShareButton>
                        <FacebookMessengerShareButton
                          url={`https://www.buminfo.co/${post.slug}?d=${post.id}&c=${category.name}&cd=${category.id}`}
                          appId="521270401588372"
                          className={classes.dropItem}
                        >
                          <FacebookMessengerIcon size={32} round />
                        </FacebookMessengerShareButton>
                        <TelegramShareButton
                          url={`https://www.buminfo.co/${post.slug}?d=${post.id}&c=${category.name}&cd=${category.id}`}
                          title={post.title}
                          className={classes.dropItem}
                        >
                          <TelegramIcon size={32} round />
                        </TelegramShareButton>
                        <WhatsappShareButton
                          url={`https://www.buminfo.co/${post.slug}?d=${post.id}&c=${category.name}&cd=${category.id}`}
                          title={post.title}
                          separator=":: "
                          className={classes.dropItem}
                        >
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                        <LinkedinShareButton
                          url={`https://www.buminfo.co/${post.slug}?d=${post.id}&c=${category.name}&cd=${category.id}`}
                          className={classes.dropItem}
                        >
                          <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                      </Menu.Dropdown>
                    </Menu>
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
