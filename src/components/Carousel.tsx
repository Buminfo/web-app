import { Carousel } from "@mantine/carousel";
import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  Group,
  Image,
  Text,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { IconBookmark, IconHeart } from "@tabler/icons-react";
import TextTruncate from "react-text-truncate";
import Share from "./buttons/share";
import classes from "@/styles/CategoryCard.module.css";
import carouselClasses from "@/styles/Carousel.module.css";
import Link from "next/link";
import Moment from "./Moment";
import ExtractedImage from "../../utils/extractImage";
import Loading from "./loading";
// import { useEffect, useState } from "react";

export function CarouselGrid({ category }: any) {
  const theme = useMantineTheme();
  return (
    <Carousel
      withIndicators
      slideSize={{ base: "80%", sm: "40%", md: "30%", lg: "23%" }}
      slideGap="md"
      classNames={carouselClasses}
      align="start"
      slidesToScroll={"auto"}
    >
      {category?.blogs.map((post: any) => (
        <Carousel.Slide key={post.id}>
          <Card withBorder padding="lg" radius="md" className={classes.card}>
            <Card.Section mb="sm">
              <Link
                // onClick={() => {
                //   GetBlogsByCategory(category.name);
                // }}
                href={`/${post.slug}?category=${category.name}`}
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
                href={`/categories/${encodeURIComponent(category.name)}?c=${
                  category.name
                }`}
              >
                {category.name}
              </Link>
            </Badge>
            <Link href={`/${post.slug}?category=${category.name}`}>
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
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
