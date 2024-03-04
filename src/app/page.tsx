import CategoryCard from "@/components/CategoryCard";
import { Introduction } from "@/components/Introduction";
// import { getData } from "../../utils/getData";

export default async function Page() {
  // const allBlogs = await getData();

  return (
    <div>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1435412513227114"
          crossOrigin="anonymous"
        ></script>
      </head>
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
