import { useEffect, useState } from "react";
import classes from "./BlogDescription.module.css";

export default function BlogDescription({ description }: any) {
  useEffect(() => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = description;

    const imgTags = tempElement.getElementsByTagName("img");
    if (imgTags.length !== 0) {
      for (let i = 0; i < imgTags.length; i++) {
        const img = imgTags[i];
        img.classList.add(classes.img);
        // img.style.width = "100px"; // Set the desired width
        // img.style.height = "100px"; // Set the desired height
      }
    }

    setModifiedHtmlDescription(tempElement.innerHTML);
  }, []);

  const [modifiedHtmlDescription, setModifiedHtmlDescription] = useState("");

  return <div dangerouslySetInnerHTML={{ __html: modifiedHtmlDescription }} />;
}
