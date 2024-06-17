import React from "react";

const PostCard = ({ image, title, decription, wrraper }) => {
  const Wrapper = wrraper;
  return (
    <Wrapper className=" bg-white p-4 flex border-b max-sm:last:hidden">
      <section className="w-12">
        <img src={image} />
      </section>
      <section className="mx-4">
        <h6>{title}</h6>
        <p className="opacity-70">{decription}</p>
      </section>
    </Wrapper>
  );
};

export default PostCard;
