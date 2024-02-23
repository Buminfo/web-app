import { Image } from "@mantine/core";
import { useEffect, useState } from "react";

const ExtractedImage = ({ data, height }) => {
  const [blogDescription, setBlogDescription] = useState("");
  const [removedTag, setRemovedTag] = useState("");
  const [removedImgSrc, setRemovedImgSrc] = useState("");

  useEffect(() => {
    // Simulating fetching the blog description from the backend
    const fetchBlogDescription = async () => {
      // // Fetch the blog description from the backend
      // const response = await fetch("your-backend-url");
      // const data = await response.json();

      // Create a temporary DOM element
      const tempElement = document.createElement("div");
      tempElement.innerHTML = data;

      // Find and remove the specific img tag
      const imgTagToRemove = tempElement.querySelector("img");

      if (imgTagToRemove) {
        setRemovedTag(imgTagToRemove.outerHTML);
        setRemovedImgSrc(imgTagToRemove.getAttribute("src"));
        imgTagToRemove.parentNode.removeChild(imgTagToRemove);
      } else {
        setRemovedImgSrc("/images/buminfo.png");
      }

      // Get the updated blog description HTML string
      const updatedDescription = tempElement.innerHTML;

      // Set the updated blog description state
      setBlogDescription(updatedDescription);
    };

    fetchBlogDescription();
  }, []);

  return (
    // <div>
    <Image src={removedImgSrc} alt="" height={height} />
    //   <div dangerouslySetInnerHTML={{ __html: blogDescription }} />
    //   <div>Removed Tag: {removedTag}</div>
    //   <div>Removed Img Src: {removedImgSrc}</div>
    // </div>
  );
};

export default ExtractedImage;
