// "use client";

import { groupDataByCategory } from "../../utils/groupData";
import CategoryCard from "@/components/CategoryCard";
import { Introduction } from "@/components/Introduction";
import { Header } from "@/components/Header";
// import { useContext } from "react";
// import { DataContext } from "@/dataContext";

async function getData() {
  const res = await fetch(
    "https://api.jsonsilo.com/public/ef9df789-0db9-4402-8bd1-d33254214790"

    // "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=300"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
  // console.log(res);
}

export default async function Page() {
  const data = await getData();
  const allBlogs = data.data.data;
  console.log(allBlogs);
  // const groupedData = await groupDataByCategory(Blogs);

  // const { setData } = useContext(DataContext);

  // setData(groupedData);

  return (
    <div>
      {allBlogs[0].name}
      <Header allBlogs={allBlogs} />
      <Introduction />
      <CategoryCard allBlogs={allBlogs} />

      <div>
        <h1>BLOG</h1>
      </div>
    </div>
  );
}
