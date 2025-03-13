import './Searchbar.css';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  return (
    <div className="search-wrapper">
      <form action="" className="search-form">
        <button className="search-btn">
          <FiSearch />
        </button>
        {/* <label htmlFor="search" className="search-label"> */}
        <input
          className="search-input"
          name="search"
          id="search"
          type="text"
          placeholder="Search..."
        />
        {/* </label> */}
      </form>
    </div>
  );
};

export default Searchbar;
