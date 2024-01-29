import { ArticleCard } from "@/components/ArticleCard";
import Demo from "@/components/Demo";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Container,
  Grid,
} from "@mantine/core";
import { groupDataByCategory } from "../../utils/groupData";
import CategoryCard from "@/components/CategoryCard";
import { Introduction } from "@/components/Introduction";
import { Header } from "@/components/Header";

async function getData() {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=300"
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
  const Blogs = data.blogs;
  console.log(Blogs[3].title);
  const groupedData = await groupDataByCategory(Blogs);

  return (
    <div>
      <Header groupedData={groupedData} />
      <Introduction />
      <Demo groupedData={groupedData} />

      <div>
        <h1>BLOG</h1>
      </div>
    </div>
  );
}
