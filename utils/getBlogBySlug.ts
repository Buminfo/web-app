import { useState } from "react";
import GetBlogsByCategory from "./getBlogsByCategory";

async function GetBlogBySlug({ categoryName, slug }: any) {
  //   const [blogs, setBlogs] = useState<any>();
  const blogs = await GetBlogsByCategory(categoryName);
  //   setBlogs(category?.blogs);
  //   console.log(category);
  return blogs?.find((blog: any) => blog.slug == slug);
}

export default GetBlogBySlug;
