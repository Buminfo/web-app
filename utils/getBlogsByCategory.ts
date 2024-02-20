// import { MyUserContext } from "@/dataContext";

// import { getData } from "./getData";

async function GetBlogsByCategory({ category }: any) {
  console.log(category);
  //   const { allBlogs } = MyUserContext();
  async function fetchData() {
    try {
      const res = await fetch(
        `https://buminfo-api-4ul5i.ondigitalocean.app/blog_category/${category}`

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
  const data = await fetchData();

  // const Blogs = data?.data;
  return data;
  //   return allBlogs.filter((category: any) =>
  //     category.name.includes(categoryName)
  //   );

  // blogPosts?.find((post) => post.category == category);
}

export default GetBlogsByCategory;

// Usage:
// const post = await getPost("my-post");
