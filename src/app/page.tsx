import CategoryCard from "@/components/CategoryCard";
import { Introduction } from "@/components/Introduction";
// import { getData } from "../../utils/getData";

export default async function Page() {
  // const allBlogs = await getData();

  return (
    <div>
      <Introduction />

      <CategoryCard />
      {/* <div>
        <h1>BLOG</h1>
      </div> */}
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-9TLX1XB6T4"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9TLX1XB6T4');
</script> */}
    </div>
  );
}
