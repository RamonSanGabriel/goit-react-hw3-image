import { useState } from 'react';
import './Searchbar.css';
import { FiSearch } from 'react-icons/fi';
import { getAPI } from '../../data/pixabay';

const Searchbar = ({ onSubmit }) => {
  return (
    <>
      <header className="search-wrapper">
        <form action="" className="search-form" onSubmit={onSubmit}>
          <button className="search-btn" type="submit">
            <FiSearch />
          </button>
          <input
            className="search-input"
            name="search"
            id="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};

export default Searchbar;
