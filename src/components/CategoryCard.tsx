"use client";
import { Container } from "@mantine/core";
import Link from "next/link";
import classes from "@/styles/CategoryCard.module.css";
import { CarouselGrid } from "./Carousel";

function CategoryCard({ allBlogs }: { allBlogs: any }) {
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
          </div>

          <CarouselGrid category={category} />
        </div>
      ))}
    </Container>
  );
}

export default CategoryCard;
