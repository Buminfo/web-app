// import { MyUserContext } from "@/dataContext";

import { getData } from "./getData";

async function GetBlogsByCategory({ categoryName }: any) {
  //   const { allBlogs } = MyUserContext();
  const allBlogs = await getData();

  const Blogs=allBlogs?.find((category: any) => category.name == categoryName);
  return Blogs.blogs
  //   return allBlogs.filter((category: any) =>
  //     category.name.includes(categoryName)
  //   );

  // blogPosts?.find((post) => post.category == category);
}

export default GetBlogsByCategory;

// Usage:
// const post = await getPost("my-post");
