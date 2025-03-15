import { useState } from 'react';
import './Searchbar.css';
import { FiSearch } from 'react-icons/fi';
import { searchQuery } from '../../data/pixabay';

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState('');
  console.log(searchInput);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.search.value);
  };

  return (
    <>
      <div className="search-wrapper">
        <form action="" className="search-form">
          <button className="search-btn" type="submit">
            <FiSearch onSubmit={handleSearch} />
          </button>
          {/* <label htmlFor="search" className="search-label"> */}
          <input
            className="search-input"
            name="search"
            id="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search..."
          />
          {/* </label> */}
        </form>
      </div>
    </>
  );
};

export default Searchbar;
