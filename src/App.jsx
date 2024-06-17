import Header from "./components/Header";
import ListBlogCards from "./components/ListBlogCards";
import PersonalCard from "./components/PersonalCard";
import PostsCardsList from "./components/PostsCardsList";
import TagsList from "./components/TagsList";

function App() {
  return (
    <>
      <Header />
      <main className="font-raleway grid lg:grid-cols-3 mx-auto 2xl:w-[80%] my-14 md:w-[97%]">
        <section className="lg:col-span-2 ">
          <ListBlogCards />
        </section>
        <section className="lg:col-span-1 lg:ml-8 ">
          <PersonalCard />
          <PostsCardsList />
          <TagsList />
        </section>
      </main>
    </>
  );
}

export default App;
