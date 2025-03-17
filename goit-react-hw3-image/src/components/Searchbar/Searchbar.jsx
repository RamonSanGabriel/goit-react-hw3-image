import { useState } from 'react';
import './Searchbar.css';
import { FiSearch } from 'react-icons/fi';
import { getAPI } from '../../data/pixabay';

const Searchbar = ({ handleSearch }) => {
  return (
    <>
      <header className="search-wrapper">
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
            placeholder="Search images and photos"
          />
          {/* </label> */}
        </form>
      </header>
    </>
  );
};

export default Searchbar;
