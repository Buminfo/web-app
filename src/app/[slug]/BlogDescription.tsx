import { useEffect, useState } from "react";

const BlogDescription = ({ description }: any) => {
  const [blogDescription, setBlogDescription] = useState("");

  useEffect(() => {
    // Simulating fetching the blog description from the backend
    const fetchBlogDescription = async () => {
      // Manipulate the HTML string to remove the specific tag
      const updatedDescription = description.replace(
        /<a\b[^>]*>(.*?)<\/a>/gi,
        ""
      );

      // Set the updated blog description state
      setBlogDescription(updatedDescription);
    };

    fetchBlogDescription();
  }, [description]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: blogDescription }} />
    </div>
  );
};

export default BlogDescription;
