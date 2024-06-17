import React from "react";

const Tag = ({ name }) => {
  return (
    <span className="bg-[#f1f1f1] text-xs px-2 w-max ml-2 mb-4 first:bg-black first:text-white first:text-sm ">
      {name}
    </span>
  );
};

export default Tag;
