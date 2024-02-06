async function fetchData() {
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
export async function getData() {
  const data = await fetchData();
  const allBlogs = data?.data.data;
  return allBlogs;
}
