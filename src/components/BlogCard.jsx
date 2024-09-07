import PropTypes from 'prop-types';

const BlogCard = ({img,title,subTitle,description,date,commentsCount, wrapper}) => {
  const Wrapper = wrapper;
  return (
    <Wrapper className="w-11/12 mx-auto shadow-custom md:shadow-large bg-white md:w-full">
      <section className="w-full">
        <img src={img} alt="img" className="w-full" />
      </section>
        <section className="p-4" >
          <h1 className="text-2xl font-medium pb-4 ">{title}</h1>
          <p className="text-base ">
            {subTitle}, <span className="opacity-60">{date}</span>
          </p>
        </section>
        <section className="p-4 text-sm">
          <p className="text-justify	">
            {description}
          </p>
          <section className="flex justify-between	items-baseline text-base" >
            <button className="mt-8 font-semibold border py-3 px-5 hover:bg-[#ccc]	">{`READ MORE>>`}</button>
            <section className="hidden md:flex mx-6 ">
              <span className="font-semibold ">Comments</span>
              <span className={commentsCount ? "bg-black text-white px-2 ml-3 rounded-[50%]" : "bg-black text-white px-2 ml-3"}>{commentsCount}</span>
            </section>
          </section>
        </section>
    </Wrapper>
  );
};

BlogCard.propTypes = {
  img: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  subTitle:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  date:PropTypes.string.isRequired,
  commentsCount:PropTypes.number.isRequired,
  wrapper:PropTypes.string.isRequired,
};

export default BlogCard;
