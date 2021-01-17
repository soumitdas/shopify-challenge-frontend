import "./SearchBar.css";

const SearchBar = ({ onChange }) => {
  return (
    <input
      className="search-bar"
      type="search"
      name="searchBox"
      onChange={onChange}
    />
  );
};

export default SearchBar;
