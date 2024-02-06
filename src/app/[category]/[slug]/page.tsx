"use client";
// import { useContext } from "react";
import { useUserContext } from "@/dataContext";
// import { getData } from "../../../../utils/getData";
function Page() {
  const { allBlogs } = useUserContext();
  return (
    <div>
      {allBlogs.map((category: any) => (
        <div key={category.id}>
          <h1>{category.name}</h1>
        </div>
      ))}
      <h1>welcome</h1>
    </div>
  );
}

export default Page;
