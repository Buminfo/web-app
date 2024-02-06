import CategoryCard from "@/components/CategoryCard";
import { Introduction } from "@/components/Introduction";
import { Header } from "@/components/Header";
import { getData } from "../../utils/getData";

export default async function Page() {
  const allBlogs = await getData();

  return (
    <div>
      <Header allBlogs={allBlogs} />
      <Introduction />
      <CategoryCard allBlogs={allBlogs} />

      <div>
        <h1>BLOG</h1>
      </div>
    </div>
  );
}
