import React from 'react';

const LoadMore = ({ onClick }) => {
  return (
    <button className="load-more button" onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMore;
