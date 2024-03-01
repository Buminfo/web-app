"use client";
import { Container, Loader, useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CategorySkeleton } from "@/components/Skeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "@/components/PostCard";

function Page(this: any) {
  const router = useRouter();
  const theme = useMantineTheme();
  const [blogs, setBlogs] = useState<any>(undefined);
  const [categoryBlogs, setCategoryBlogs] = useState<any>(undefined);
  // const [data, setData] = useState<any>();
  const [pageNumber, setPageNumber] = useState<any>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const searchParams = useSearchParams();
  const category = searchParams?.get("c");
  //   const categoryBlogs.name = decodeURIComponent(category!);
  // const categoryBlogs.name = decodeURIComponent(category!.replace(/\+/g, " "));

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
      if (
        categoryBlogs?.data.blogs.meta.page ==
        categoryBlogs?.data.blogs.meta.last_page
      ) {
        setHasMore(false);
      } else {
        setPageNumber(pageNumber + 1);
      }

      // Fetch initial data
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
          <PostCard category={categoryBlogs} posts={blogs} slice={false} />
        </InfiniteScroll>
      ) : (
        <CategorySkeleton />
      )}
    </Container>
  );
}

export default Page;
