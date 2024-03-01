"use client";
import { Box, Button, Container, Loader } from "@mantine/core";
import Link from "next/link";
import classes from "@/styles/CategoryCard.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { MainSkeleton } from "./Skeleton";
import PostCard from "./PostCard";

function CategoryCard() {
  const [data, setData] = useState<any>();
  const [pageNumber, setPageNumber] = useState<any>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://buminfo-api-4ul5i.ondigitalocean.app/blog_category/post"
      );
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        console.log("Failed to fetch data");
      }
      const allBlogs = await res.json();
      // const data = allBlogs?.data.data

      //
      setData(allBlogs?.data.data);
      if (allBlogs?.data.meta.page == allBlogs?.data.meta.last_page) {
        setHasMore(false);
      } else {
        setPageNumber(pageNumber + 1);
      }
    }
    // Fetch initial data
    getData();
  }, []);

  const fetchData = async () => {
    // Simulated API call or data fetching
    const response = await fetch(
      `https://buminfo-api-4ul5i.ondigitalocean.app/blog_category/post?page=${pageNumber}`
    );
    const newData = await response.json();
    setPageNumber(newData?.data.meta.page);
    // Update the data state
    setData((prevData: any) => prevData.concat(newData?.data.data));

    // Set hasMore to false if there is no more data to load
    if (newData?.data.meta.page == newData?.data.meta.last_page) {
      setHasMore(false);
    } else {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <Container size={"100%"} my="md" mx={"xl"}>
      {data ? (
        <InfiniteScroll
          dataLength={data.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<Loader color="blue" type="dots" />}
          endMessage={<div>No more data to load</div>}
        >
          {data?.map((category: any) => (
            <>
              {category?.blogs.length >= 5 && (
                <div className={classes.categoryParent} key={category.name}>
                  <div className={classes.categoryTitleParent}>
                    <Link
                      href={`/categories/${encodeURIComponent(
                        category.name
                      )}?c=${category.id}`}
                      className={classes.categoryTitle}
                    >
                      {category.name}
                      <span className={classes.dash}>&mdash;</span>
                    </Link>
                    <Box visibleFrom="md">
                      <Link
                        className={classes.categoryTitle}
                        href={`/categories/${encodeURIComponent(
                          category.name
                        )}?c=${category.id}`}
                      >
                        Show more
                        <span className={classes.ico}>
                          &rsaquo;
                          {/* <IconChevronRight /> */}
                        </span>
                      </Link>
                    </Box>
                  </div>
                  <PostCard
                    category={category}
                    posts={category.blogs}
                    slice={true}
                  />
                  <Box
                    style={{ display: "flex", justifyContent: "end" }}
                    hiddenFrom="md"
                  >
                    <Link
                      className={classes.categoryTitle}
                      href={`/categories/${encodeURIComponent(
                        category.name
                      )}?c=${category.id}`}
                    >
                      Show more
                      <span className={classes.ico}>
                        &rsaquo;
                        {/* <IconChevronRight /> */}
                      </span>
                    </Link>
                  </Box>
                  {/* <CarouselGrid category={category} /> */}
                </div>
              )}
            </>
          ))}
        </InfiniteScroll>
      ) : (
        <MainSkeleton />
      )}
    </Container>
  );
}

export default CategoryCard;
