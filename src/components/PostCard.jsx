import PropTypes from 'prop-types';

const PostCard = ({ image, title, description }) => {
  return (
    <section className=" bg-white p-4 flex border-b max-sm:last:hidden">
      <section className="w-12">
        <img src={image} />
      </section>
      <section className="mx-4">
        <h6>{title}</h6>
        <p className="opacity-70">{description}</p>
      </section>
    </section>
  );
};

PostCard.propTypes = {
  image: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
};
export default PostCard;
