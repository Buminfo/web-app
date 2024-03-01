"use client";

import { Text, useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";

function RelatedNews({ category }: any) {
  const theme = useMantineTheme();
  const [blogs, setBlogs] = useState<any>(undefined);
  const [categoryBlogs, setCategoryBlogs] = useState<any>(undefined);
  // const [data, setData] = useState<any>();
  useEffect(() => {
    async function Filter() {
      const res = await fetch(
        `https://buminfo-api-4ul5i.ondigitalocean.app/blog_category/${category}`
      );
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        console.log("Failed to fetch data");
      }
      const categoryBlogs = await res.json();
      // const data = allBlogs?.data.data
      if (categoryBlogs !== undefined && categoryBlogs !== "") {
        setCategoryBlogs(categoryBlogs.data);
        setBlogs(categoryBlogs.data.blogs.data);
        // setPageNumber(2);
      }
      //
      // setData(allBlogs?.data.data);
      // if (
      //   categoryBlogs?.data.blogs.meta.page ==
      //   categoryBlogs?.data.blogs.meta.last_page
      // ) {
      //   setHasMore(false);
      // } else {
      //   setPageNumber(pageNumber + 1);
      // }

      // Fetch initial data
      // getData();
    }
    if (category !== undefined) {
      Filter();
    }
  }, [category]);

  return (
    <>
      <Text m={"xl"} fs={"italic"} size="xl">
        Related News
      </Text>
      <PostCard category={categoryBlogs} posts={blogs} slice={false} />
    </>
  );
}

export default RelatedNews;
