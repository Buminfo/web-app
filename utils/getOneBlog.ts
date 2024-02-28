async function GetOneBlog({ id }: any) {
  async function fetchData() {
    try {
      const res = await fetch(
        `https://buminfo-api-4ul5i.ondigitalocean.app/blog/${id}`

        // }
      );
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        console.log("Failed to fetch data");
      }
      return res.json();
    } catch (error) {}
  }
  const data = await fetchData();

  // const Blogs = data?.data;
  return data;
}

export default GetOneBlog;

// Usage:
// const post = await getPost("my-post");
