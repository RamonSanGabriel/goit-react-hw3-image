import './Searchbar.css';

const Searchbar = () => {
  return (
    <div className="searchbar">
      <input
        className="search-input"
        type="text"
        placeholder="Search for a movie..."
      />
      <button className="search-btn">Search</button>
    </div>
  );
};

export default Searchbar;
