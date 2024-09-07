import PropTypes from 'prop-types';

const Tag = ({ tagName }) => {
  return (
    <span className="bg-[#f1f1f1] text-xs px-2 w-max ml-2 mb-4 first:bg-black first:text-white first:text-sm ">
      {tagName}
    </span>
  );
};

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
};

export default Tag;
