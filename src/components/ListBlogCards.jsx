import BlogCard from "./BlogCard";
import {BLOGS_DATA } from "../Data";
const ListBlogCards = () => {
  return (
    <ul className="space-y-10">
        {BLOGS_DATA.map(blog =>
           <BlogCard key={blog.id} {...blog} wrapper="li"/>)}
    </ul>
  )
}

export default ListBlogCards
