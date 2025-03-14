import './Searchbar.css';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const handleSearch = (e) => {
    // alert('Search button clicked');
    e.preventDefault();
    const searchInput = document.querySelector('.search-input');
    console.log(searchInput);
    const searchValue = searchInput.value.trim();

    if (searchValue) {
      window.location.href = `/search/${searchValue}`;
    }
  };
  return (
    <div className="search-wrapper">
      <form action="" className="search-form">
        <button className="search-btn">
          <FiSearch onClick={handleSearch} />
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
