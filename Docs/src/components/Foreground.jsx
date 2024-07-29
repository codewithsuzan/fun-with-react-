import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
    const ref = useRef(null)
  const data = [
    {
      description: "Lorem ipsum dolor sit amet consectetur.",
      filesize: ".9mb",
      close: true,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquam dolores repudiandae qui laboriosam itaque!.",
      filesize: "1.9mb",
      close: true,
      tagDetails: {
        isOpen: false,
        tagTitle: "Upload",
        tagColor: "green",
      },
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur.dipisicing elit. Sed aliquam dolores",
      filesize: "32mb",
      close: true,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
  ];
  return (
    <div ref={ref} className="p-5 flex gap-10 flex-wrap top-0 left-0 fixed z-[3] w-full h-full ">
      {data.map((item, index) => (
        <Card data={item} reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
