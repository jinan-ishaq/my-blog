import React from "react";
import avatar from "../assets/avatar_g.jpg";

const PersonalCard = () => {
  return (
    <article className="w-11/12 mx-auto shadow-custom bg-white my-8 lg:my-0 md:w-full">
      <section className="w-full">
        <img src={avatar} alt="Blogger Personal Image " className="w-full"/>
      </section>
      <h1 className="text-2xl font-medium p-4">Jinan Zahaika</h1>
      <p className="p-4 text-sm text-justify">
        Just me, myself and I, exploring the universe of uknownment. I have a
        heart of love and a interest of lorem ipsum and mauris neque quam blog.
        I want to share my world with you.
      </p>
    </article>
  );
};

export default PersonalCard;
