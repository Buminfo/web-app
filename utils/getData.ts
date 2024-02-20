// import { cache } from "react";

async function fetchData() {
  try {
    const res = await fetch(
      "https://buminfo-api-4ul5i.ondigitalocean.app/blog_category/post"

      // }
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {}
}
export async function getData() {
  const data = await fetchData();
  const allBlogs = data?.data.data;
  // console.log(allBlogs);
  return allBlogs;
}
