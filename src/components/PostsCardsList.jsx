import PostCard from "./PostCard";
import {POSTS_DATA} from "../Data";

const PostsCardsList = () => {
  return (
    <article className="bg-white w-11/12 mx-auto my-12
     shadow-custom md:w-full">
      <h1 className="bg-[#f1f1f1] p-6 text-xl">Popular Posts</h1>
      <ul>
        {POSTS_DATA.map((post,index) => <PostCard key={post.id} {...post}
        className={index === POSTS_DATA.length - 1 ? 'md:hidden' : ''}/>)}
      </ul>
    </article>
  );
};

export default PostsCardsList;
