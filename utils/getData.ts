import { cache } from "react";

async function fetchData() {
  try {
    const res = await fetch(
      "http://139.59.145.27:3000/blog_category/post"
      // "https://api.jsonsilo.com/public/ef9df789-0db9-4402-8bd1-d33254214790"
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {}

  // console.log(res);
}
export const getData = cache(async () => {
  const data = await fetchData();
  const allBlogs = data?.data.data;
  // console.log(allBlogs);
  return allBlogs;
});
