import './LoadMore.css';

const LoadMore = ({ onClick }) => {
  return (
    <button className="load-more" onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMore;
