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
import moment from "moment";
import Link from "next/link";

export function CarouselGrid({ category }: any) {
  const theme = useMantineTheme();

  return (
    <Carousel
      withIndicators
      // height={200}
      slideSize={{ base: "80%", sm: "40%", md: "30%", lg: "23%" }}
      slideGap="md"
      classNames={carouselClasses}
      // loop
      align="start"
      slidesToScroll={3}
    >
      {category?.blogs.map((post: any) => (
        <Carousel.Slide key={post.id}>
          <Link href={`/${category.name}/${post.slug}`}>
            <Card withBorder padding="lg" radius="md" className={classes.card}>
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
                <TextTruncate
                  line={2}
                  element="span"
                  truncateText="…"
                  text={post.title}
                  // textTruncateChild={<a href="#">Read on</a>}
                />
              </Text>
              {/* <div>{parse(post.description)}</div> */}

              <Group mt="lg">
                <Avatar src={post.logo} radius="sm" />
                <div>
                  <Text fw={500}>{post.websiteName}</Text>
                  <Text fz="xs" c="dimmed">
                    posted {moment(post.created_at, "YYYYMMDDhhmmss").fromNow()}
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
          </Link>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
