"use client";
import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  ScrollArea,
  ScrollAreaAutosize,
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
import TextTruncate from "react-text-truncate";
import { CarouselGrid } from "./Carousel";

function CategoryCard({ allBlogs }: { allBlogs: any }) {
  const theme = useMantineTheme();

  const articleNum = 8;
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

          <CarouselGrid category={category} />
        </div>
      ))}
    </Container>
  );
}

export default CategoryCard;
