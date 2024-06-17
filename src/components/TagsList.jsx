import React from "react";
import {TAGS_DATA} from "../Data";
import Tag from "./Tag";

const TagsList = () => {
  return (
    <article
      className="bg-white w-11/12 mx-auto my-12 shadow-custom md:w-full">
      <h1 className="bg-[#f1f1f1] p-6 text-xl">Tgas</h1>
      <ul className=" flex flex-wrap p-4 ">
        {TAGS_DATA.map((tag,index) => <Tag key={index} name={tag}/>)}
      </ul>
    </article>
  );
};

export default TagsList;
