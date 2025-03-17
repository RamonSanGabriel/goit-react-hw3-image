import React from 'react';
import Searchbar from '../Searchbar/Searchbar';

const Header = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.search.value);
  };
  return (
    <div>
      <Searchbar handleSearch={handleSearch} />
    </div>
  );
};

export default Header;
