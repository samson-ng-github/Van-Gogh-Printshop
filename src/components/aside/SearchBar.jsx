import SearchButton from '../Buttons/SearchButton';

const SearchBar = () => {
  return (
    <form className="searchBar">
      <input type="text" className="searchField" placeholder="Search" />
      <SearchButton />
    </form>
  );
};

export default SearchBar;
